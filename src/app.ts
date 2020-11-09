window.addEventListener("load", init);

//Global variables
const lettersInDOM: HTMLDivElement = document.querySelector("#letters");
const attemptInDOM: HTMLDivElement = document.querySelector("#attempt");
let attempts: number = 5;
attemptInDOM.innerText = attempts.toString();

let word: string = "dish";
let lettersInWord: string[] = splitWord(word);
console.log(lettersInWord);
let guessLetterInWord: string[] = fillWithDashes();
console.log(guessLetterInWord);

/**
 * Function to write the guessed letters tothe DOM
 */
function writeGuessedLettersToDOM(){
    lettersInDOM.innerHTML = "";
    guessLetterInWord.forEach(letter => {
        let listElement: HTMLElement = document.createElement("li");
        listElement.innerText = letter;
        lettersInDOM.appendChild(listElement);
    });
}


/**
 * Function to initialize the programme
 */
function init() {
  //write the alphabet keyboard to the DOM
  writeAlphabetToTheDom();
  writeGuessedLettersToDOM();
}

/**
 * Function to write the alphabet keyboard to the DOM
 */
function writeAlphabetToTheDom() {
  const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  const keyboard: HTMLDivElement = document.querySelector("#keyboard");
  alphabet.forEach(function (element, index) {
    let divKey: HTMLDivElement = document.createElement("div");
    divKey.id = element;
    divKey.classList.add("key");
    divKey.innerHTML = element;
    divKey.addEventListener("click", function(){
        letterClicked(divKey);
    })
    keyboard.append(divKey);
  });
}


/**
 * Function to split the word to be guessed to a string of letters
 * @param word The word to be guessed
 */
function splitWord(word: string):string[] {
    return word.split("");
}

/**
 * Function to display dashes when the program starts
 * @returns an array with dashes, lenght: the length of the word to be guessed
 */
function fillWithDashes():string[]{
    return lettersInWord.map((element) => "-");
}

/**
 * Function to evaluate the pressed key
 * @param key the pressed key
 */
function letterClicked(key: HTMLElement){
    let pressedKey: string = key.innerText;
    if (lettersInWord.includes(pressedKey, 0)) { // Decides if there is a match
        console.log("true");
        for (let i = 0; i < lettersInWord.length; i++) {
            if (lettersInWord[i] == pressedKey) {
                console.log("ok");
                guessLetterInWord[i] = pressedKey;
                writeGuessedLettersToDOM();
                if (!guessLetterInWord.includes("-",0)) { // If you do not have any dashes left, you win
                    alert("You won!");
                }
            }
            
        }
    }else{
        attempts--;
        attemptInDOM.innerText = attempts.toString();
    }
    if (attempts === 0) { // If you run out of attempts, you lose
        alert("Game over! Start again!");
        location.reload(); // Reloading the page after you lose
    }
}

