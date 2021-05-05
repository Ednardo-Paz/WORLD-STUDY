

var tocar = document.querySelector("#video1");
var playBtn = document.querySelector('.play-btn');
var count = 0;

playBtn.addEventListener(`click`, opacity)
playBtn.addEventListener(`mouseover`, opacityOn)
playBtn.addEventListener(`mouseout`, opacityOff)

function opacity() {
    if (count == 1) {
        playBtn.style.opacity = 0
    } else {
        playBtn.style.opacity = 1
    }
} 
function opacityOn() {
    if (count == 1) {
        playBtn.style.opacity = 1
    }
}
function opacityOff() {
    if (count == 1) {
        playBtn.style.opacity = 0
    }
}

function play() {
    if (count == 0) {
        count = 1;
        tocar.play()
        playBtn.innerHTML = " ❚ ❚"
        playBtn.style.color = "#8e2170"
        playBtn.style.color = "#f63fed"
        playBtn.style.fontSize = "20pt"
    } else {
        count = 0;
        tocar.pause()
        playBtn.innerHTML = "   &nbsp;&#9654;"
        playBtn.style.color = "#f63fed"
        playBtn.style.fontSize = "19pt"
    }
}