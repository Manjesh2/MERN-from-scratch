const chars = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '~', '`', '|', '}', '{', '[', ']', ':', ';', '?', '>', '<', ',', '.', '/', '-', '='
];


let input1El = document.getElementById("pass-1-el")
let input2El = document.getElementById("pass-2-el")
input1El.value = null
input2El.value = null

function generatePass() {
    let pass1 = " "
    for (let i = 0; i < 15; i++) {
        let randomChar = Math.floor(Math.random() * chars.length)
        pass1 += chars[randomChar]
    }
    let pass2 = " "
    for (let i = 0; i < 15; i++) {
        let randomChar = Math.floor(Math.random() * chars.length)
        pass2 += chars[randomChar]
    }
    let input1El = document.getElementById("pass-1-el")
    input1El.value = pass1
    let input2El = document.getElementById("pass-2-el")
    input2El.value = pass2
    
}

//function to copy password when clicked

function copyPassword() {
    //check if input is empty
    let input1El = document.getElementById("pass-1-el")
    if (!(input1El.value)) {
        return 
    }
    //select the text inside the input field
    input1El.select()

    //copy the selected text on clipboard
    navigator.clipboard.writeText(input1El.value)
        .then(() => {
            alert("password copy to clipboard.")
        })
        .catch(err => {
            console.error("faild to copy text. ", err)
        });
}
function copyPassword2() {
    //check if input is empty
    let input2El = document.getElementById("pass-2-el")
    if (!(input2El.value)) {
        return 
    }
    //select the text inside the input field
    input2El.select()

    //copy the selected text on clipboard
    navigator.clipboard.writeText(input2El.value)
        .then(() => {
            alert("password copy to clipboard.")
        })
        .catch(err => {
            console.error("faild to copy text. ", err)
        });
}

