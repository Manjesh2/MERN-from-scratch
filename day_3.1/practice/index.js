let welcomeEl = document.getElementById("welcome-el");

let user = "Manjesh";
let greetings = "Welcome back "

welcomeEl.innerText = greetings + user;

// i want to add emoji on h1 without modifying the above content
welcomeEl.innerText = welcomeEl.innerText + "👋"
welcomeEl.innerText += "👋"