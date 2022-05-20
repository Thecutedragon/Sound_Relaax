

const sound_folder = "sound/";
//New audio
const sounds = [
    new Audio(`${sound_folder}waves.wav`),
    new Audio(`${sound_folder}strongWind.wav`),
    new Audio(`${sound_folder}rain.wav`),
    new Audio(`${sound_folder}fire.wav`),
    new Audio(`${sound_folder}waves.wav`)
];

for (const sound in sounds) {
    sound.loop = true;
}

const soundElems = [
    document.getElementById("forest"),
    document.getElementById("wind"),
    document.getElementById("rain"),
    document.getElementById("fire"),
    document.getElementById("waves")
]

// Play function
for (let i = 0; i < soundElems.length; i++) {
    const elem = soundElems[i];
    const sound = sounds[i];
    elem.addEventListener('click', () => {
        if (sound.paused) {
            elem.classList.add('animate');
            return sound.play();
        }
        elem.classList.remove('animate');
        sound.pause();
    });
}
//slider


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
signIn.addEventListener(`click`, openForm1);
const x1 = document.getElementById("fa-x1");
x1.addEventListener(`click`, openForm1);

const logIn = document.getElementById("log-in");
logIn.addEventListener(`click`, openForm2);
const x2 = document.getElementById("fa-x2");
x2.addEventListener(`click`, openForm2);


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








