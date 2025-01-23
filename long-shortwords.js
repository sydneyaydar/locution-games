const words = [
    "test",
    "hello",
];

let guessedlist = [];

let guess = "";
for (let i = 0; i < selectedWord.length; i++) {
    guess += "_ ";
}
document.getElementById("display")

function checkAnswer() {
    alert("IT WORKS")
    
    let inputElement =
        document.getElementById("guess-box");
}

    if (!inputElement.value) {
        alert("Input is Empty.");
        return;
    }

    let daguess = inputElement.value.toLowerCase();

    inputElement.value = "";

    if (guessedlist.includes(daguess)) {
        alert("You have already guessed this word bro");
        return;
    }

    guessedlist.push(daguess);

    let updatedDisplay = "";
    let allLettersGuessed = true;
    for (let i = 0; i < selectedWord.length; i++) {
        if (guessedlist.includes(selectedWord[i])) {
            updatedDisplay += "_ "
            allLettersGuessed = false;
        }
    }

    document.getElementById("display")
        .textContent = updatedDisplay;