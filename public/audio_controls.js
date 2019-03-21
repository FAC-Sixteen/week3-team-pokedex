let controls = document.getElementById('player')
let symbol = document.querySelector('.controlsSymbol')

function togglePlay(){
    if(controls.paused){
        symbol.src = 'iconfinder_icon-ios7-pause_211791.png'
        return controls.play();
    } else{
        symbol.src = 'iconfinder_icon-play_211876.png'
        return controls.pause();
    }
}