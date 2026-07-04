
let cards = [] // array
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let sumEl = document.getElementById("sum-el")
let cardEl = document.querySelector("#card-el")
// let messageEl = document.getElementById("message-el")
let messageEl = document.querySelector("#message-el")

let player = {
    name: 'Manjesh',
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips 

function getRandomCard() {
    let randomNum = (Math.random()) * 13
    let getNum = Math.floor(randomNum) + 1
    if (getNum === 1) {
        return 11
    } else if (getNum === 11 | getNum === 12 | getNum === 13) {
        return 10
    } else {
        return getNum
    }

}


function startGame() {
    isAlive = true
    let firstNum = cards.push(getRandomCard())
    let secondNum = cards.push(getRandomCard())
    sum += cards[0] + cards[1]

    renderGame()
}


function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got BlackJack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message

}
function getNewCard() {
    if (isAlive == true && hasBlackJack == false) {
        let newCard = getRandomCard()
        sum += newCard

        cards.push(newCard)
        renderGame()
    }

}
