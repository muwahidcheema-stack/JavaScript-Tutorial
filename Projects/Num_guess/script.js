let random = parseInt(Math.random() * 100 + 1)

let submit = document.querySelector('#subt')
let input = document.querySelector('#guessField')
let guesses = document.querySelector('.guesses')
let remaining = document.querySelector('.lastResult')
let lowOrHi = document.querySelector('.lowOrHi')
let startOver = document.querySelector('.resultParas')

let para = document.createElement('p')

let prevGuess = []
let guessCnt = 1
let playGame = true

if(playGame){
    submit.addEventListener('click' , (e) => {
        e.preventDefault()
        let guessNum = parseInt(input.value)
        // console.log(guessNum);
        validateGuess(guessNum)

    })
}

function validateGuess(guess) {
    if(isNaN(guess) || guess < 1 || guess > 100){
        alert("Please enter a valid Number")
    }else{
        prevGuess.push(guess)
        if(guessCnt > 10){
            displayGuess(guess)
            displayMsg(`Game Over!! Number was ${random}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }

    }
}

function checkGuess(guess) {
    if(guess === random){
        displayGuess("Hurrah ! You guessed it")
        endGame()
    } else if(guess < random){
        displayMsg("Number is Low!")
    } else if(guess > random){
        displayMsg("Number is High!!")
    }
}

function displayMsg(msg){
    lowOrHi.innerHTML = `<h3>${msg}</h3>`
}

function displayGuess(guess){
    input.value = ''
    guesses.innerHTML += `${guess},`
    guessCnt++;
    remaining.innerHTML = `${11 - guessCnt}`
}

function newGame(){
    let newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (e) => {
        random = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        guessCnt = 1
        guesses.innerHTML = ''
        remaining.innerHTML = `${11 - guessCnt}`
        input.removeAttribute('disabled')
        startOver.removeChild(para)
        playGame = true

    })
}

function endGame(){
    input.value = ''
    input.setAttribute('disabled', '')
    para.classList.add('button')
    para.innerHTML = '<h3 id="newGame">Start new Game</h3>'
    startOver.appendChild(para);
    playGame = false
    newGame();

}
