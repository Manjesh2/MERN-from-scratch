let largeCountry = ['china', 'india', 'usa', 'indonesia', 'pakistan']

for (let i = 0; i < largeCountry.length; i++) {
    console.log(largeCountry[i])
}

let largeCountries = ['tuvala', 'india', 'usa', 'indonesia', 'monaco']

// perform shift and unshift

largeCountries.shift('tuvala')
largeCountries.unshift('china')
console.log(largeCountries)

// give random items from array

let hands = ['rock', 'paper', 'scissor'
]
function randomfun() {
    let randNm = Math.floor(Math.random() * 3)
    // if (randNm === 0) {
    //     return hands[0]
    // } else if (randNm === 1) {
    //     return hands[1]
    // } else {
    //     return hands[2]
    // }
    return hands[randNm]

}
console.log(randomfun())