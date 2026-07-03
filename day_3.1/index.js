// document.getElementById("count-el").innerHTML = 5;
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1;
    countEl.innerText = count;
}

function save() {
    let countStr = count + " - "
    //make sure to not delete the existing content of the paragraph
    // TextContent is use to don't remove the space betweent '-'
    saveEl.textContent += countStr
    count = 0
    countEl.innerText = count
}
