

var tocar = document.querySelector("#video1");

var playBtn = document.querySelector('.play-btn');
var pauseBtn = document.querySelector('pause-btn')
var count = 0;


playBtn.addEventListener("mouseover", opacyti1 )
playBtn.addEventListener("mouseout", opacyti )



function opacyti(){
    playBtn.style.opacity = 0
 
}


function opacyti1(){
    playBtn.style.opacity = 1
  
}


function play() {
    if (count == 0) {
        count = 1;
        tocar.play()
        playBtn.innerHTML = " ❚ ❚"
        playBtn.style.color ="#f63fed"
        playBtn.style.fontSize= "20pt"
        
        

    } else {
        count = 0;
        tocar.pause()
        playBtn.innerHTML = "   &nbsp;&#9654;"
        playBtn.style.color ="#f63fed"
        playBtn.style.fontSize= "19pt"

    }
}