//Variables
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

