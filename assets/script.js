

var tocar = document.querySelector("#video1");

var playBtn = document.querySelector('.play-btn');
var pauseBtn = document.querySelector('pause-btn')
var count = 0;



function play() {
    if (count == 0) {
        count = 1;
        tocar.play()
        playBtn.style.opacity = 0

    } else {
        count = 0;
        tocar.pause()
        playBtn.innerHTML = "   &nbsp;&#9654;"
        playBtn.style.color = "#f63fed"
        playBtn.style.fontSize = "19pt"
        playBtn.style.opacity = 1

    }
}