
//New audio
const forestAudio = new Audio('forest.wav');
forestAudio.loop = true;

const windAudio = new Audio(`strongWind.wav`);
windAudio.loop = true;

const rainAudio = new Audio(`rain.wav`);
rainAudio.loop = true;

const fireAudio = new Audio(`fire.wav`);
fireAudio.loop = true;

const wavesAudio = new Audio(`waves.wav`);
wavesAudio.loop = true;

const leafAudio = new Audio(``);
leafAudio.loop = true;
// Play function
const forestPlay = document.getElementById("forest")

forestPlay.addEventListener('click', () => {
    if (forestAudio.paused) return forestAudio.play();
    forestAudio.pause();
});

const windPlay = document.getElementById("wind")

windPlay.addEventListener(`click`, () =>{
        if(windAudio.paused) return windAudio.play();
        windAudio.pause();
    });

const rainPlay = document.getElementById(`rain`)

rainPlay.addEventListener(`click`, () =>{
    if(rainAudio.paused) return rainAudio.play();
    rainAudio.pause();
})

const firePlay = document.getElementById(`fire`)

firePlay.addEventListener(`click`, () => {
    if(fireAudio.paused) return fireAudio.play();
    fireAudio.pause();
})

const wavesPlay = document.getElementById(`waves`)

wavesPlay.addEventListener(`click`, () => {
    if(wavesAudio) return wavesAudio.play();
    wavesAudio.pause();
})

const leafPlay = document.getElementById(`leavsBlowinginWind`)

leafPlay.addEventListener(`click`, () => {
    if(leafAudio) return leafAudio.play();
    leafAudio.pause();
})
