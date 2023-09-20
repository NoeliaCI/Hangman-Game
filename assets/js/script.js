//Variables
const homeContainer = document.getElementById("home-container");
const playButton = document.getElementById("play-button");
const gameContainer = document.getElementById("game-container");
const rulesButton = document.getElementById("rules-button");
const homeButton = document.getElementById("home-button");
const rulesContainer = document.getElementById("rules-container");
const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");

//Arrays
let options = {
    animals: [
        "Giraffe",
        "Kangaroo",
        "Cheetah",
        "Monkey",
        "Salamander",
        "Orangutan",
    ],
    music: [
        "Madonna",
        "Metallica",
        "Nirvana",
        "Slipknot",
        "Queen",
        "Shakira",
    ],
    instruments: [
        "Clarinet",
        "Violoncello",
        "Saxophone",
        "Accordion",
        "Harmonica",
        "Xylophone",
    ],
};

//Event Listeners

/**
 * Listens for the click of the play button in the home screen
 * adds or removes the hide class
 * enters the game screen
 */

playButton.addEventListener('click', () => {
    homeContainer.classList.add("hide");
    gameContainer.classList.remove("hide");
});
/**
 * Listens for the click of the rules button in the home screen
 * adds or removes the hide class
 * enters the rules screen
 */
rulesButton.addEventListener('click', () => {
    homeContainer.classList.add("hide");
    rulesContainer.classList.remove("hide");
});
/**
 * Listens for the click of the home button in the rules screen
 * adds or removes the hide class
 * goes back to the home screen
 */
homeButton.addEventListener('click', () => {
    rulesContainer.classList.add("hide");
    homeContainer.classList.remove("hide");
});

// Variables for the count
let winCount = 0;
let count = 0;

let chosenWord = "";

//Display the option buttons
const displayOptions = () => {
    optionsContainer.innerHTML += `<h3>Please Select An Option</h3>`;
    let buttonCon = document.createElement("div");
    for (let value in options) {
        buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
    }
    optionsContainer.appendChild(buttonCon);
};
//Block all the buttons
const blocker = () => {
    let optionsButtons = document.querySelectorAll(".options");
    let letterButtons = document.querySelectorAll(".letters");
    //Disable all the options
    optionsButtons.forEach((button) => {
        button.disabled = true;
    });

    //Disable all the letters
    letterButtons.forEach((button) => {
        button.disabled.true;
    });
    newGameContainer.classList.remove("hide");
};

