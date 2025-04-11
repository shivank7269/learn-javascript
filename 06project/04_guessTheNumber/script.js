(function(){
    
const button = document.getElementById('subt')
const randomInt = Math.floor(Math.random()*100)+1
let noOfGuess = 10
button.addEventListener("click",function(event){
    event.preventDefault();
    if(noOfGuess>0){
        noOfGuess--
        let guess = document.getElementById('guessField').value
        if(+guess === randomInt){
            let finalMessage = document.querySelector('.lowOrHi')
            finalMessage.textContent = "Your Guess is Correct"
            button.disabled = true
        }else{
            let prevGuess = document.querySelector('.guesses');
            prevGuess.textContent += `${guess} `
            let remaningGuess = document.querySelector('.lastResult');
            remaningGuess.textContent = `${noOfGuess}`
        }
    }else{
        let finalMessage = document.querySelector('.lowOrHi')
        finalMessage.innerHTML = "<b>Number of Guesses Passed</b>"
        button.disabled = false
    }
});
})();