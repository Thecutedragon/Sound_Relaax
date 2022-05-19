

const sound_folder = "sound/";
//New audio
const forestAudio = new Audio(`${sound_folder}forest.wav`);
forestAudio.loop = true;

const windAudio = new Audio(`${sound_folder}strongWind.wav`);
windAudio.loop = true;

const rainAudio = new Audio(`${sound_folder}rain.wav`);
rainAudio.loop = true;

const fireAudio = new Audio(`${sound_folder}fire.wav`);
fireAudio.loop = true;

const wavesAudio = new Audio(`${sound_folder}waves.wav`);
wavesAudio.loop = true;

const leafAudio = new Audio(``);
leafAudio.loop = true;
// Play function
const forestPlay = document.getElementById("forest");

forestPlay.addEventListener('click', () => {
    if (forestAudio.paused) {
        forestPlay.classList.add('animate');
        return forestAudio.play();
    }
    forestPlay.classList.remove('animate');
    forestAudio.pause();
});

const windPlay = document.getElementById("wind");

windPlay.addEventListener(`click`, () =>{
    if(windAudio.paused) {
        windPlay.classList.add('animate');
        return windAudio.play();
    }
    windPlay.classList.remove('animate');
    windAudio.pause();
});

const rainPlay = document.getElementById(`rain`);

rainPlay.addEventListener(`click`, () =>{
    if(rainAudio.paused) {
        rainPlay.classList.add('animate');
        return rainAudio.play();
    }
    rainPlay.classList.remove('animate');
    rainAudio.pause();
})

const firePlay = document.getElementById(`fire`);

firePlay.addEventListener(`click`, () => {
    if(fireAudio.paused) {
        firePlay.classList.add('animate');
        return fireAudio.play();
    }
    firePlay.classList.remove('animate');
    fireAudio.pause();
})

const wavesPlay = document.getElementById(`waves`);

wavesPlay.addEventListener(`click`, () => {
    if(wavesAudio) return wavesAudio.play();
    wavesAudio.pause();
})

const leafPlay = document.getElementById(`leavsBlowinginWind`);

leafPlay.addEventListener(`click`, () => {
    if(leafAudio) return leafAudio.play();
    leafAudio.pause();
})
//slider
// $("#volume").slider({
//     min: 0,
//     max: 100,
//     value: 0,
//     range: "min",
//     slide: function(event, ui){
//         setVolume(ui.value / 100)
//     }
// });


//volume



// Email check
function checkEmail(myForm) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value)){
        return true;
    } // I cant fully under stand this code but was the best i could find
    alert("Du har angivit en ogiltig epostadress. Kontrollera den angivna adressen!");
    
    return false;
}


// Sign upp check

const signIn = document.getElementById("sign-in");
signIn.addEventListener(`click`, openForm1)


const logIn = document.getElementById("log-in");
logIn.addEventListener(`click`,  openForm2)


function openForm1(){
    form = document.getElementById("form1");
    if(form.style.display === "flex"){
        form.style.display = "none";
    }else{
        form.style.display = "flex"
    }
}

function openForm2(){
    form = document.getElementById("form2");
    if(form.style.display === "flex"){
        form.style.display = "none";
    }else{
        form.style.display = "flex"
    }
}








