let homeScoreEl = document.getElementById("home-sc")
let guestScoreEl = document.getElementById("guest-sc")
let winnerEl = document.getElementById("home-scard")
let winnerEl2 = document.getElementById("guest-scard")
console.log(homeScoreEl)

let homeCount = 0
let guestCount = 0

function winnerChecker() {
    if (homeCount > guestCount) {
        winnerEl.textContent = "Status : Leading!"
        winnerEl2.textContent = "Status : Trailing!"
    } else if (homeCount == guestCount) {
        winnerEl.textContent = "Status : Tied!"
        winnerEl2.textContent = "Status : Tied!"
    } else {
        winnerEl.textContent = "Status : Trailing!"
        winnerEl2.textContent = "Status : Leading!"
    }
}




function add1Home() {
    console.log("add1")
    homeCount += 1
    homeScoreEl.innerText = homeCount
    winnerChecker()
}
function add2Home() {
    homeCount += 2
    homeScoreEl.innerText = homeCount
    winnerChecker()
}
function add3Home() {
    homeCount += 3
    homeScoreEl.innerText = homeCount
    winnerChecker()
}
function add1Guest() {
    console.log("add1")
    guestCount += 1
    guestScoreEl.innerText = guestCount
    winnerChecker()
}
function add2Guest() {
    guestCount += 2
    guestScoreEl.innerText = guestCount
    winnerChecker()
}
function add3Guest() {
    guestCount += 3
    guestScoreEl.innerText = guestCount
    winnerChecker()
}


