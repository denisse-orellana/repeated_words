// REPEATED WORDS

// PART ONE: How many times the LETTERS are repetead in the text

// Expected output: "a: 4,"

// 1 Call DOMContentLoaded -> carga el documento
document.addEventListener('DOMContentLoaded', function(event){
    // brings all the text content to the console:
    //      console.log(document.getElementById('texto-entrada').textContent);

    // call the function cleanText:
    //      console.log(cleanText(document.getElementById('texto-entrada').textContent));

    // call the function addLettersToArray: (brings the letters)
    //      console.log(addLettersToArray(cleanText(document.getElementById('texto-entrada').textContent)));

    // call the function countRepeatedLetters: 
    console.log(countRepeatedLetters(cleanText(document.getElementById('texto-entrada').textContent)));
})

// 2 Clean the text:
function cleanText(text) {
    text = text.replaceAll("\n", ""); 
    text = text.replaceAll("\s", "");
    text = text.replaceAll("\t", "");
    text = text.replaceAll("\.", "");
    text = text.replaceAll("\,", "");
    text = text.replaceAll("  ", "");
    text = text.replaceAll("        ", "");
    return text;
}

// 3 Generates new array with the letters: 
function addLettersToArray(text) {
    text = text.replaceAll(" ", "");
    return text = text.split("");
}

// 4 Function that counts letters
function countRepeatedLetters(text) {
    let arrayLetters = addLettersToArray(text)
    let findMatchedLetters = [];
    let repeatedLetters = [];
    for (let i = 0; i < arrayLetters.lenght; i++) {
        letter = 0
        for (let j = 0; j < arrayLetters.lenght; j++) {
            if (arrayLetters[i] === arrayLetters[j] && !findMatchedLetters.includes(arrayLetters[i])) {
                letter = letter + 1; // letter++ or letter = letter + 1 
            }
        }
        findMatchedLetters.push(arrayLetters[i]);
        if (letter > 1) {
            repeatedLetters.push(`${arrayLetters[i]}: ${letter}`);
        }
    }
    return repeatedLetters;
}


// PART TWO: How many times the WORDS are repetead in the text

// 3 Generates new array with the words: 
// function addLettersToArray(text) {
//     return text = text.split("");
// }

/* Remember:
    \" – double quote
    \\ – single backslash
    \a – bell/alert
    \b – backspace
    \r – carriage return
    \n – newline
    \s – space
    \t – tab

    .split() - String.prototype.split()
    El método split() devuelve el nuevo array
    divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.

        * example:
            La cadena original es: "Oh brave new world that has such people in it."
                El separador es: " "
            El array tiene 10 elementos: Oh / brave / new / world / that / has / such / people / in / it. /
*/
