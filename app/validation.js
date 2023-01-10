
const choiceIsInvalid = (number) =>{
    return Number.isNaN(number);
}

const verifyValidInformation = (information) =>{
    const number = +information;

    if(choiceIsInvalid(number)){
        choiceElement.innerHTML += `<div>Valor inválido</div>`;
        return;
    }

    if(numberIsGreaterOrLowerThanAllowedRange(number)){
        choiceElement.innerHTML += 
        `<div></div>Valor inválido: o número deve estar entre ${LOWER_VALUE} e ${GREATER_VALUE}</div>`;
        return;
    }

    if(number !== secretNumber){
        choiceElement.innerHTML += `
            <div>O número secreto é ${number < secretNumber ? 'maior' : 'menor'}
                <i class="fa-sharp fa-solid fa-arrow-${number < secretNumber ? 'up' : 'down'}"></i>
            </div>
        `;
    }

    if(number === secretNumber){
        document.body.innerHTML = `
            <h2>Você acertou !</h2>

            <h3>O número secreto era ${number}</h3>

            <button id="jogar-novamente" class="btn-jogar">
                Jogar novamente
            </button>
        `;
    }
}

function numberIsGreaterOrLowerThanAllowedRange (number) {
    return number < LOWER_VALUE || number > GREATER_VALUE;
}

document.body.addEventListener('click', (e) => {
    if(e.target.id = 'jogar-novamente'){
        window.location.reload();
    }
});