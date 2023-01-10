
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';

recognition.start();

const showChoiceInTheScreen = (chute) => {
    choiceElement.innerHTML = `
    <div>
        Você disse: 
    </div>

    <span class="box">${chute}</span>
    `;
    verifyValidInformation(chute);
}

const onSpeak = (e)=>{
    const chute = e.results[0][0].transcript;

    showChoiceInTheScreen(chute);
}

recognition.addEventListener("result", onSpeak);
recognition.addEventListener("end", () => {
    recognition.start();
});
