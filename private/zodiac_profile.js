
addListener('form', 'submit', function(e){
    e.preventDefault();

    let selectedSign = document.getElementById('zodiac_drop');
    let url = `http://sandipbgt.com/theastrologer/api/horoscope/${selectedSign.value}/today`

    console.log(event.target);
    console.log(selectedSign.value)
    console.log(url);
})


// fetch ('http://sandipbgt.com/theastrologer/api/sunsigns/', callback) {

//   }