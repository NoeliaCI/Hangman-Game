# **HangMan Game**

[HangMan Game](https://noeliaci.github.io/Hangman-Game/) is an online old school game where the goal is
to find the missing word by guessing letters. The game has three different categories to choose from: Animals, Music Bands
and Instruments. The player can guess a letter by clicking on it. The game finishes when the player has correctly guessed
all the letters or when all six body parts are on the gallows.

![web on different screens](assets/documentation/am-I-responsive/responsive-home.png)

---

## **Table of Contents**

- [**HangMan Game**](#hangman-game)
  - [**Table of Contents**](#table-of-contents)
  - [**Target Audience**](#target-audience)
  - [**User Stories**](#user-stories)
    - [**First Time User Goals**](#first-time-user-goals)
    - [**Returning User Goals**](#returning-user-goals)
    - [**Frequent User Goals**](#frequent-user-goals)
  - [**Design**](#design)
    - [**Colour Theme**](#colour-theme)
    - [**Font**](#font)
  - [**Wireframes**](#wireframes)
    - [**Desktop**](#desktop)
    - [**Tablet**](#tablet)
    - [**Mobile**](#mobile)
  - [**Features**](#features)
    - [**Header**](#header)
    - [**Footer**](#footer)
    - [**Home Screen**](#home-screen)
    - [**Categories Screen**](#categories-screen)
    - [**Game Screen**](#game-screen)
    - [**Result Screen**](#result-screen)
    - [**Rules Screen**](#rules-screen)
    - [**Features Left to Implement**](#features-left-to-implement)
  - [**Technologies Used**](#technologies-used)
  - [**Testing**](#testing)
  - [**Browser Testing**](#browser-testing)
  - [**Responsiveness**](#responsiveness)
  - [**Validators**](#validators)
  - [**Lighthouse**](#lighthouse)
  - [**Bugs**](#bugs)
    - [**Solved**](#solved)
    - [**Unsolved**](#unsolved)
  - [**Deployment**](#deployment)
  - [**Credits**](#credits)
    - [**Content**](#content)
    - [**Media**](#media)
  
## **Target Audience**

- Users who look for interactive online games.
- Users who want to challenge their language knowledge.
- Users who enjoy playing word games.

## **User Stories**

### **First Time User Goals**

- As a first time user, I want to understand the purpose of the website, so I can learn about what is offered.
- As a first time user, I want to find rules or instructions sections, so I can understand the objective of the game.
- As a first time user, I want to easily navigate through the website, so I can quickly go from one section to another.

### **Returning User Goals**

- As a returning user, I want the game to have different categories, so I can test my skills in different areas.
- As a returning user, I want to be able to enter my user name, so I can have a personalised experience.
- As a returning user, I want the website to have social media links, so I can share my experience playing the game.

### **Frequent User Goals**

- As a frequent user, I want the game to be responsive, so I can play it on different devices.
  
## **Design**

### **Colour Theme**

![colour theme](/assets/documentation/colour-theme.png)

- The colour theme used for this project is a gradient background in green tones.

### **Font**

![font type](/assets/documentation/font.png)

- The font used is Bad Script. This font resembles the handwriting which makes it adequate for a word game.

## **Wireframes**

### **Desktop**

![wireframe desktop](/assets/documentation/Wireframes/Wireframe-desktop.png)

### **Tablet**

![wireframe tablet](/assets/documentation/Wireframes/Wireframe-tablet.png)

### **Mobile**

![wireframe mobile](/assets/documentation/Wireframes/Wireframe-mobile.png)

## **Features**

### **Header**

- The header contains the title of the game which is centered and emphasised with a text shadow.
- The title displays on every screen and when clicked, it takes the user back to the home screen.
- The header also contains a sound button to allow the user to decide on playing with or without sound.

![title image](/assets/documentation/features/title.png)

### **Footer**

- The footer contains links for social media and the name of the author.

![footer image](/assets/documentation/features/footer.png)

### **Home Screen**

- The home screen contains two buttons:
  - Play - takes the user to the category screen.
  - Rules - takes the user to the rules screen.
  - Both buttons play a sound effect when clicked.
- The home screen also contains a name form that, when filled, personalises the result message.

![home screen image](/assets/documentation/features/home-screen.png)

### **Categories Screen**

- The categories screen displays three category buttons:
  - Animals
  - Music Bands
  - Instruments
- When one category is selected the button turns into a different colour and the two other buttons can not be clicked.
- This screen also displays the canvas where the hangman will be drawn.

![category screen](/assets/documentation/features/categories-screen.png)

### **Game Screen**

- The game screen displays the selected category button in a different colour and the two other category buttons disabled.
- It contains the keyboard where the user can click on the letters to guess the word.
- The character buttons disable once they are clicked and the letters replace the dashes in the word to guess.
- The canvas area displays a body part of the hangman every time an incorrect letter is clicked.
- The game ends when all the correct letters are displayed in the word area or when all the body parts of the hangman are displayed.
  
![game screen image](/assets/documentation/features/game-screen.png)
  
### **Result Screen**

- The result screen appears when the game is over.
- It displays  a different message depending on the result of the game.
- It also displays the correct word and the player name in both messages.
- It contains two buttons:
  - New Game - leads to the category screen to start a new game.
  - Home - leads to the home screen.

![result screen](/assets/documentation/features/result-screen.png)  

### **Rules Screen**

- The rules screen displays when the rules button in the home screen is clicked.
- It contains the instructions to play the game.
- It contains a home button that takes the user back to the home screen when clicked.

![rules screen](/assets/documentation/features/rules-screen.png)

### **Features Left to Implement**

- Score tracking and leaderboard in order to keep the user engaged.
- 404 error page.

## **Technologies Used**

- [HTML](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- [GitHub](https://github.com/)
- [Codeanywhere](https://app.codeanywhere.com/)

## **Testing**

- I tested that this website works in different browsers: Chrome, Firefox, Edge.
- I used devtools device toolbar to confirm that the website is responsive and looks good on all standard screen sizes.
- I tested all the links and confirmed that they work and lead where they should.
- I tested entering a name and checked that it is showing on the result screen.
- I tested the game playing in the different categories to make sure that everything works as it should.

## **Browser Testing**

- Chrome

![chrome browser](/assets/documentation/browsers/chrome-browser.png)

- Edge

![edge browser](/assets/documentation/browsers/edge-browser.jpeg)

- Firefox

![firefox browser](/assets/documentation/browsers/firefox-browser.png)

## **Responsiveness**

- Home Screen

![home screen responsive](/assets/documentation/am-I-responsive/responsive-home.png)

- Rules Screen

![rules screen responsive](/assets/documentation/am-I-responsive/responsive-rules.png)

- Categories Screen

![categories screen responsive](/assets/documentation/am-I-responsive/responsive-categories.png)

- Game Screen

![game screen responsive](/assets/documentation/am-I-responsive/responsive-game.png)

- Result Screen

![result screen responsive](/assets/documentation/am-I-responsive/responsive-result.png)

## **Validators**

- HTML - No errors were found when passing the html file through the W3C validator.
  
![html validator](/assets/documentation/Validators/html-validator.png)

- CSS - No errors were found when passing the css file through the W3C validator.

![css validator](/assets/documentation/Validators/css-validator.png)

- JavaScript - Two warnings were found when passing the script file through JS Hint.

![script validator](/assets/documentation/Validators/JS-Hint.png)

## **Lighthouse**

[lighthouse validation](/assets/documentation/lighthouse/lighthouse.jpg)

## **Bugs**

### **Solved**

- When trying to set the icon for the sound, it didn't respond to any action and the icon with class hide didn't hide at all. This issue was solved by wrapping the icons inside a button element and placing !important in the hide element in css. Despite not being the best practice for css the solution worked.

### **Unsolved**

- When entering the web for the first time, a placeholder saying [object HTMLInputElement] is sometimes showing instead of the placeholder "your name" in the player name input section. I tried to solve it by adding .value when declaring the variable for the player name, giving an autocomplete attribute to the user input and also tried other suggestions found in the stack overflow website but none of them worked and it is still showing. After entering a player name it does not appear again.

## **Deployment**

- This website was deployed to GitHub pages. The steps to deploy are the following:
  - In the [GitHub repository](https://github.com/NoeliaCI/Hangman-Game), go to the settings tab.
  - Select the Main Branch from the source menu and click save.
  - The page will refresh and a message with successful deployment will display if nothing went wrong.
- The website can also be accessed by the live link here: [HangMan Game](https://noeliaci.github.io/Hangman-Game/).

## **Credits**

### **Content**

- The text for the rules screen was taken from [here](http://www.printactivities.com/Paper-Games/Rules-For-Hangman.shtml) and was slightly modified to adapt it to this project.
- For making the game work I follow this [tutorial](https://www.youtube.com/watch?v=T6uht1A0114&list=PLNCevxogE3fgy0pAzVccadWKaQp9iHspz&index=24&ab_channel=CodingArtist) and adapted it to this project.
- Inspiration for the font and to store player names, from this nice [project](https://saamauro92.github.io/hangman_game/) from another CI student.

### **Media**

- The font used is from [Google Fonts](https://fonts.google.com/specimen/Bad+Script?query=bad).
- The gradient background was found in this [website](https://gradient.shapefactory.co/?a=2D4C4D&b=A1BC73&d=25).
- The web icon was downloaded from [Flaticon](https://www.flaticon.com/free-icon/hangman_43980).
- The social media icons are from [Font Awesome](https://fontawesome.com/).
- The sound effects were taken from [Mixkit](https://mixkit.co/free-sound-effects/lose/).
- The wireframes were done with [Balsamiq](https://balsamiq.com/wireframes/).
- To check the responsiveness of the web I used the [Am I Responsive](https://ui.dev/amiresponsive) website.
