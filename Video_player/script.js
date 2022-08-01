const video_player = document.querySelector('.video_player');
const myVideo = document.querySelector('.myVideo');
const progress_innter = document.querySelector('.progress_innter');
const backward = document.querySelector('.backward');
const forward = document.querySelector('.forward');
const playBtn = document.querySelector('.playBtn');
const video_duration = document.querySelector(".video_duration");
const video_current_time = document.querySelector(".video_current_time");
const volume_range = document.querySelector(".volume_range");
const pic_in_pic = document.querySelector(".pic-in-pic");
const fullscreenIcan = document.querySelector(".fullscreenIcan");
const controls = document.querySelector(".controls");
const progress_outer = document.querySelector(".progress_outer");
// const volumeControl = document.querySelector('.volume-control');


// PLAY Function

function play() {
    playBtn.className = "playBtn fa-solid fa-pause";
    myVideo.play();
}
//Pause function
function pause() {
    playBtn.className = "playBtn fa-solid fa-play";
    myVideo.pause();
}


// Play Event Listener
playBtn.addEventListener("click", () => {
    let isVideoPlay = playBtn.classList.contains("fa-play");
    isVideoPlay ? play() : pause();
    // console.log(isVideoPlay);
});

//Video Forward Function
forward.addEventListener("click", () => {
    myVideo.currentTime += 10;
    console.log(r);
    // console.log('has been click');
});

//Video Backward Function
backward.addEventListener("click", () => {
    myVideo.currentTime += 10;

    // console.log('has been click');
});


// Update timer
myVideo.addEventListener("loadeddata", () => {
    let duration = Math.floor(myVideo.duration / 60);
    let durationSec = Math.floor(myVideo.duration % 60);
    video_duration.innerText = duration + ":" + durationSec;
    // console.log(durationSec);
    // console.log(duration);
});

myVideo.addEventListener("timeupdate", () => {
    let duration = Math.floor(myVideo.currentTime / 60);
    let durationSec = Math.floor(myVideo.currentTime % 60);

    duration = duration < 10 ? "0" + duration : duration;
    durationSec = durationSec < 10 ? "0" + durationSec : durationSec;

    video_current_time.innerText = duration + ":" + durationSec;

    // console.log(currentVideoTime);


    // PROGRESS BAR

    let progressWidth = myVideo.currentTime / myVideo.duration * 100;

    progress_inner.style.width = progressWidth + "%";


    // console.log(progress_innter.style.width);
});

//Volume Range section
volume_range.addEventListener("change", () => {
    let myVolume = volume_range.value / 100;
    myVideo.volume = myVolume;


    // console.log(myVolume);
});

//Picture in picture
pic_in_pic.addEventListener("click", () => {
    myVideo.requestPictureInPicture();
});

//Full Screen Section 

fullscreenIcan.addEventListener("click", () => {

    if (fullscreenIcan.classList.contains("fa-expand")) {
        video_player.requestFullscreen();
        controls.style.top = "-54px";
        progress_outer.style.top = "-56px";
        fullscreenIcan.className = ("fullscreenIcan fa-solid fa-compress")
    } else {
        document.exitFullscreen();
        controls.style.top = "0";
        progress_outer.style.top = "0";
        fullscreenIcan.className = ("fullscreenIcan fa-solid fa-expand");
    }

})