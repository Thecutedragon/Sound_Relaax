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


// Email check
function checkEmail(myForm) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value)){
    return (true)
    } // I cant fully under stand this code but was the best i could find
    alert("Du har angivit en ogiltig epostadress. Kontrollera den angivna adressen!")
    return (false)
    }


// Sign upp check

var signIn = document.getElementById("log-in");
signIn.addEventListener(`click`, () => {
    let form = document.createElement("div");
    var Email1 = document.createElement("p");
    Email1.classList.add("font");
    let email1 = document.createTextNode("Email:");
    Email1.append(email1);
    form.classList.add("login");
    var input = document.createElement("input");
    input.type = "text";
    document.body.append(form)
    var collum1 = document.createElement("div")
    collum1.classList.add("collum")
    collum1.append(Email1);
    collum1.appendChild(input);
    form.append(collum1);
    var collum2 = document.createElement("div")
    collum2.classList.add("collum")
    var password1 = document.createElement("p")
    password1.classList.add("font")
    let pass = document.createTextNode("Password:")
    password1.append(pass)
    var input2 = document.createElement("input");
    input2.type = "text";
    collum2.append(input2)
    collum2.append(password1)
    form.append(collum2)

})

function openForm(){
    document.getElementById("log-in").style.display = "block";
}

function closeForm(){
    document.getElementById("log-in").style.display = "none";
}