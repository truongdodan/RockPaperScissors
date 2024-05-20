let humanScore = 0
let computerScore = 0
let winner
let thrownumber = 0
let uIn
const throwNum = document.querySelector("#thrownum")
const userChoose = document.querySelector("#userchoose")
const comChoose = document.querySelector("#comchoose")
const resutl = document.querySelector("#result")
const roundresult = document.querySelector("#roundresult")
const userscore = document.querySelector("#userscore")
const comscore = document.querySelector("#comscore")

function showResult(num) {
    if(num === 1) {
        return "Rock"
    }
    else if(num === 2) {
        return "Paper"
    }
    else if(num === 3) {
        return "Scissors"
    }
}

function getComputerInput() {
    const comIn = Math.floor(Math.random() * 3) + 1

    return comIn
}

//Event for each button 
const rock = document.querySelector(".rock")
rock.addEventListener("click", () => {
    uIn = 1
    playGame()
    if(humanScore == 3 || computerScore == 3) {
        if(humanScore > computerScore) {
            roundresult.textContent = "Round result: You win"
        }
        else {
            roundresult.textContent = "Round result: Computer win"
        }
    }
})

const paper = document.querySelector(".paper")
paper.addEventListener("click", () => {
    uIn = 2
    playGame()
    if(humanScore == 3 || computerScore == 3) {
        if(humanScore > computerScore) {
            roundresult.textContent = "Round result: You win"
        }
        else {
            roundresult.textContent = "Round result: Computer win"
        }
    }
})

const scissors = document.querySelector(".scissors")
scissors.addEventListener("click", () => {
    uIn = 3
    playGame()
    if(humanScore == 3 || computerScore == 3) {
        if(humanScore > computerScore) {
            roundresult.textContent = "Round result: You win"
        }
        else {
            roundresult.textContent = "Round result: Computer win"
        }
    }
})

const startround = document.querySelector(".startround")
startround.addEventListener("click", () => {
    throwNum.textContent = "Throw: 0"
    userChoose.textContent = "You choose: "
    comChoose.textContent = "Computer choose: "
    resutl.textContent = "Result: "
    humanScore = 0
    computerScore = 0
    userscore.textContent = "Your score: " + humanScore
    comscore.textContent = "Computer score: " + computerScore
    roundresult.textContent = "Round result: "
})


function playGame() {
    let comIn = getComputerInput()

    if(comIn === uIn) {
        resutl.textContent = "Result: It's a tie"
    }
    else if(uIn === comIn + 1 || (uIn + 2) === comIn) {
        humanScore += 1
        resutl.textContent = "Result: You win"
    }
    else {
        computerScore += 1
        resutl.textContent = "Result: You lose"
    }

    thrownumber++;

    userChoose.textContent = "You choose: " + showResult(uIn)
    comChoose.textContent = "Computer choose: " + showResult(getComputerInput())
    userscore.textContent = "Your score: " + humanScore
    comscore.textContent = "Computer score: " + computerScore
    throwNum.textContent = "Throw: " + thrownumber
}

function rps() {
    
}

    //rps()
    

