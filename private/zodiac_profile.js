

addListener('form', 'submit', function(e){
    e.preventDefault();

    let selectedSign = document.getElementById('zodiac_drop');
    let url = `http://sandipbgt.com/theastrologer/api/horoscope/${selectedSign.value}/today`;
    let stats = document.querySelector(".statText");
    stats.textContent = '';

    // update desc with first two lines of horoscope message
    fetch (url, function(response){
        console.log(response);
        let horoscopeText = document.querySelector(".horoscopeText");
        let responseSplit = response.horoscope.split(/[?!.]/g);
        let join = responseSplit[0]+'.'+responseSplit[1]+'!';
        horoscopeText.textContent = join.trim();

    // battle stats from the nested meta object
        let horoKeys = Object.keys(response.meta);
        let horoVals = Object.values(response.meta);
        // queryForm.appendChild(linebreak);
        console.log(horoKeys);
        console.log(horoVals);
        for (var i=0;i<horoKeys.length;i++){
            let listElem = document.createElement("ul");
            listElem.textContent += horoKeys[i]+': '+horoVals[i];
            stats.appendChild(listElem);
        }
    }); 

  

})

