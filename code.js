window.addEventListener("load", () => {
    setTimeout(() => {
        document.body.classList.add('animation')
        document.getElementById("top").classList.add("topAnimation")
        document.getElementById("heading").classList.add("headingAnimation")
    }, 500)
});

let isPlayed = false;


function playPause(frame, pic, musicId) {
    let music = document.querySelector("#" + musicId)
    if(isPlayed) {
        isPlayed = false;
        music.pause()
        document.getElementById(frame).style.borderRadius = "0"
        document.getElementById(pic).style.borderRadius = "0"
        
    } else {
        isPlayed = true
        music.play()
        document.getElementById(frame).style.borderRadius = "50%"
        document.getElementById(pic).style.borderRadius = "50%"
        
    }
}

