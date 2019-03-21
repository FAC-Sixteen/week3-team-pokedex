let controls = document.getElementById('player')

function togglePlay(){
    
    return controls.paused ? controls.play() : controls.pause();
}