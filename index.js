let myText = document.getElementById("text");

let upper = document.getElementById("upper-case");
let lower = document.getElementById("lower-case");
let proper = document.getElementById("proper-case");
let sentence = document.getElementById("sentence-case");

function upperCase() {
    myText.value = myText.value.toUpperCase();
}

function lowerCase(){
    myText.value = myText.value.toLowerCase();
}

function properCase() {
    myText.value = myText.value.toLowerCase();

    let words = myText.value.split(" ");
    let wordCounter = words.length;

    let newText = "";

    for (let word of words) {
        word = word.charAt(0).toUpperCase() + word.substring(1);
        wordCounter--;
        if(wordCounter >= 1) {
            newText += word + " ";
        }
        else{
            newText += word;
        }
    }

    myText.value = newText;
}

function sentenceCase(){
    myText.value = myText.value.toLowerCase();

    let words = myText.value.split(". ");
    let wordCounter = words.length;

    let newText = "";

    for (let word of words) {
        word = word.charAt(0).toUpperCase() + word.substring(1);
        wordCounter--;
        if(wordCounter >= 1) {
            newText += word + ". ";
        }
        else{
            newText += word;
        }
    }

    myText.value = newText;
}

function saveText(filename, text) {
    text = myText.value;
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', 'text.txt');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}