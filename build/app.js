window.addEventListener("load", init);
const lettersInDOM = document.querySelector("#letters");
const attemptInDOM = document.querySelector("#attempt");
let attempts = 5;
attemptInDOM.innerText = attempts.toString();
let word = "dish";
let lettersInWord = splitWord(word);
console.log(lettersInWord);
let guessLetterInWord = fillWithDashes();
console.log(guessLetterInWord);
function writeGuessedLettersToDOM() {
    lettersInDOM.innerHTML = "";
    guessLetterInWord.forEach(letter => {
        let listElement = document.createElement("li");
        listElement.innerText = letter;
        lettersInDOM.appendChild(listElement);
    });
}
function init() {
    writeAlphabetToTheDom();
    writeGuessedLettersToDOM();
}
function writeAlphabetToTheDom() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const keyboard = document.querySelector("#keyboard");
    alphabet.forEach(function (element, index) {
        let divKey = document.createElement("div");
        divKey.id = element;
        divKey.classList.add("key");
        divKey.innerHTML = element;
        divKey.addEventListener("click", function () {
            letterClicked(divKey);
        });
        keyboard.append(divKey);
    });
}
function splitWord(word) {
    return word.split("");
}
function fillWithDashes() {
    return lettersInWord.map((element) => "-");
}
function letterClicked(key) {
    let pressedKey = key.innerText;
    if (lettersInWord.includes(pressedKey, 0)) {
        console.log("true");
        for (let i = 0; i < lettersInWord.length; i++) {
            if (lettersInWord[i] == pressedKey) {
                console.log("ok");
                guessLetterInWord[i] = pressedKey;
                writeGuessedLettersToDOM();
                if (!guessLetterInWord.includes("-", 0)) {
                    alert("You won!");
                }
            }
        }
    }
    else {
        attempts--;
        attemptInDOM.innerText = attempts.toString();
    }
    if (attempts === 0) {
        alert("Game over! Start again!");
        location.reload();
    }
}
//# sourceMappingURL=app.js.map