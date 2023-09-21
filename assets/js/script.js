//Variables
const homeContainer = document.getElementById("home-container");
const playButton = document.getElementById("play-button");
const gameContainer = document.getElementById("game-container");
const rulesButton = document.getElementById("rules-button");
const homeButton = document.getElementById("home-button");
const homeButtonRules = document.getElementById("home-button-rules");
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
        "Rabbit",
        "Manatee",
        "Porcupine",
        "Ostrich",
    ],
    music: [
        "CyndiLauper",
        "Metallica",
        "Nirvana",
        "Slipknot",
        "Queen",
        "TinaTurner",
        "MarilynManson",
        "RedHotChilliPeppers",
        "TheRamones",
        "Greenday",

    ],
    instruments: [
        "Clarinet",
        "Violoncello",
        "Saxophone",
        "Accordion",
        "Harmonica",
        "Xylophone",
        "Electric-Guitar",
        "Didgeridoo",
        "Castanets",
        "Cymbals",
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
 * Listens for the click of the home button
 * adds or removes the hide class
 * goes back to the home screen
 */
homeButton.addEventListener('click', () => {
    rulesContainer.classList.add("hide");
    newGameContainer.classList.add("hide");
    gameContainer.classList.add("hide");
    homeContainer.classList.remove("hide");
});

homeButtonRules.addEventListener('click', () => {
    rulesContainer.classList.add("hide");
    homeContainer.classList.remove("hide");
});
//Functions from tutorial in https://www.youtube.com/watch?v=T6uht1A0114&list=PLNCevxogE3fgy0pAzVccadWKaQp9iHspz&index=24&ab_channel=CodingArtist
// Variables for the count
let winCount = 0;
let count = 0;

let chosenWord = "";

//Display the option buttons
const displayOptions = () => {
    optionsContainer.innerHTML += `<h3>Please Select A Category</h3>`;
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
//Word Generator
const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll(".options");
    //If optionValue matches the button, innerText will highlight the button
    optionsButtons.forEach((button) => {
        if (button.innerText.toLowerCase() === optionValue) {
            button.classList.add("active");
        }
        button.disabled = true;
    });
    //Hide the letters and clear the previous word
    letterContainer.classList.remove("hide");
    userInputSection.innerText = "";

    let optionArray = options[optionValue];
    //Choose a random word
    chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
    chosenWord = chosenWord.toUpperCase();

    //Replace every letter with a span containing dash
    let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');

    //Display each element as span
    userInputSection.innerHTML = displayItem;
};
//This function is called when the page loads and the user presses new game
const initializer = () => {
    winCount = 0;
    count = 0;
    //Erase all the content and hide letters and new game button
    userInputSection.innerHTML = "";
    optionsContainer.innerHTML = "";
    letterContainer.classList.add("hide");
    newGameContainer.classList.add("hide");
    letterContainer.innerHTML = "";
    //Creates letter buttons
    for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
        //Number to ASCII[A-Z]
        button.innerText = String.fromCharCode(i);
        //Listens for the click on the character buttons
        button.addEventListener("click", () => {
            let charArray = chosenWord.split("");
            let dashes = document.getElementsByClassName("dashes");
            //If array contains a clicked value replaces the matched dash with a letter
            if (charArray.includes(button.innerText)) {
                charArray.forEach((char, index) => {
                    //If character in array is the same as the clicked button
                    if (char === button.innerText) {
                        //Replace dash with a letter
                        dashes[index].innerText = char;
                        //Increment counter
                        winCount += 1;
                        //If winCount equals the word length
                        if (winCount == charArray.length) {
                            resultText.innerHTML = `<h2 class='win-msg'>You Win!!</h2><p>The word was <span>${chosenWord}</span></p>`;
                            //block all buttons
                            blocker();
                        }
                    }
                });
            } else {
                //Lose count
                count += 1;
                //For drawing man
                drawMan(count);
                //Count==6 because head, body, left arm, right arm, left leg, right leg
                if (count == 6) {
                    resultText.innerHTML = `<h2 class='lose-msg'>You Lose!!</h2><p>The word was <span>${chosenWord}</span></p>`;
                    blocker();
                }
            }
            //Disable the clicked button
            button.disabled = true;
        });
        letterContainer.append(button);
    }

    displayOptions();
    //Call to canvasCreator (for clearing previous canvas and creating initial canvas)
    let { initialDrawing } = canvasCreator();
    //initialDrawing would draw the frame
    initialDrawing();
};
//Constant to create canvas
const canvasCreator = () => {
    let context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 2;
    //For drawing lines
    const drawLine = (fromX, fromY, toX, toY) => {
        context.moveTo(fromX, fromY);
        context.lineTo(toX, toY);
        context.stroke();
    };
    const head = () => {
        context.beginPath();
        context.arc(70, 30, 10, 0, Math.PI * 2, true);
        context.stroke();
    };

    const body = () => {
        drawLine(70, 40, 70, 80);
    };

    const leftArm = () => {
        drawLine(70, 50, 50, 70);
    };

    const rightArm = () => {
        drawLine(70, 50, 90, 70);
    };

    const leftLeg = () => {
        drawLine(70, 80, 50, 110);
    };

    const rightLeg = () => {
        drawLine(70, 80, 90, 110);
    };
    //Initial frame
    const initialDrawing = () => {
        //Clear the canvas
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        //Bottom line
        drawLine(10, 130, 130, 130);
        //Left line
        drawLine(10, 10, 10, 131);
        //Top line
        drawLine(10, 10, 70, 10);
        //Small top line
        drawLine(70, 10, 70, 20);
    };
    return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};
//Code to draw the man
const drawMan = (count) => {
    let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
    switch (count) {
        case 1:
            head();
            break;
        case 2:
            body();
            break;
        case 3:
            leftArm();
            break;
        case 4:
            rightArm();
            break;
        case 5:
            leftLeg();
            break;
        case 6:
            rightLeg();
            break;
        default:
            break;
    }
};

//New Game
newGameButton.addEventListener("click", initializer);
window.onload = initializer;




