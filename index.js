let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let dice1source = "images/dice" + randomNumber1 + ".png";
let dice2source = "images/dice" + randomNumber2 + ".png";

let dice1 = document.querySelectorAll("img")[0];

dice1.setAttribute("src", dice1source)
let dice2 = document.querySelectorAll("img")[1];

dice2.setAttribute("src", dice2source);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "😍Player 1 Wins !!"
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins !! 😘";
}
else
{
    document.querySelector("h1").textContent = " !! Draw !! 😘";
}
