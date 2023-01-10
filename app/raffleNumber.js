
greaterValueElement.innerHTML = GREATER_VALUE;
lowerValueElement.innerHTML= LOWER_VALUE;

secretNumber =generateSecretNumber();
console.log(secretNumber);

function generateSecretNumber(){
    return parseInt(Math.random()* GREATER_VALUE + 1);
}