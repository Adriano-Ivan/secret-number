
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';

recognition.start();

const showChoiceInTheScreen = (chute) => {
    console.log(chute.trim().toLowerCase() !== "game over")
    if(chute.trim().toLowerCase() !== "game over"){
        choiceElement.innerHTML = `
        <div>
            Você disse: 
        </div>
    
        <span class="box">${chute}</span>
        `;
        verifyValidInformation(chute);
    } else {
        document.body.innerHTML  = `
            <h1 style="color: yellow">GAME OVER</h1>
            <button id="jogar-novamente" class="btn-jogar">
            Jogar novamente
            </button>
        `;

        document.body.style.backgroundColor = "black";
    }

}

const onSpeak = (e)=>{
    const chute = e.results[0][0].transcript;

    showChoiceInTheScreen(chute);
}

recognition.addEventListener("result", onSpeak);
recognition.addEventListener("end", () => {
    recognition.start();
});
