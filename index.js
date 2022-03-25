

const forestAudio = new Audio('forest.wav');
forestAudio.loop = true;
//  function () {
//     document.getElementById("forest").style.color = `rgb(255,255,255)`
//     forestAudio.play();
// }

const forestPlay = document.getElementById("forest")

forestPlay.addEventListener('click', () => {
    if (forestAudio.paused) return forestAudio.play();
    forestAudio.pause();
});