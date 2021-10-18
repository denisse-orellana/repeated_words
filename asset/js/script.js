// REPEATED WORDS

//* PART ONE * How many times the LETTERS are repetead in the text

// Expected output: "A: 60, B: 77, (...)"

// Call DOMContentLoaded -> carga el documento
document.addEventListener('DOMContentLoaded', function(event){
    // brings all the text content to the console:
    //      console.log(document.getElementById('texto-entrada').textContent);

    // call the function cleanText:
    //      console.log(cleanText(document.getElementById('texto-entrada').textContent));

    // call the function addLettersToArray: (brings the letters)
    //      console.log(addLettersToArray(cleanText(document.getElementById('texto-entrada').textContent)));

    // call the function countRepeatedLetters: 
    //      console.log(countRepeatedLetters(cleanText(document.getElementById('texto-entrada').textContent)));

    // call the function addWordsToArray: 
    //      console.log(addWordsToArray(cleanText(document.getElementById('texto-entrada').textContent)));

    // call the function countRepeatedWords: 
    //      console.log(countRepeatedWords(cleanText(document.getElementById('texto-entrada').textContent)));
})

// 1 get the text of the document
function getDocumentText() {
    return text = document.getElementById('texto-entrada').textContent;
}

// 2 Clean the text:
function cleanText(text) {
    text = text.replaceAll("\n", "");
    text = text.replaceAll("\s", "");
    text = text.replaceAll("\.", "");
    text = text.replaceAll("\,", "");
    text = text.replaceAll("  ", "");
    text = text.replaceAll('        ', '');
    return text
}

// 3 Generates new array with the letters: 
function addLettersToArray(text) {
    text = text.replaceAll(" ", "");
    return text = text.toUpperCase().split("").sort(); // Capital letters order by asc
}

// 4 Function that counts letters
function countRepeatedLetters(text) {
    let arrayLetters = addLettersToArray(text);
    let findMatchedLetters = [];
    let repeatedLetters = [];
    for (let i = 0; i < arrayLetters.length; i++) {
        let letter = 0;
        for (let j = 0; j < arrayLetters.length; j++) {
            if (arrayLetters[i] === arrayLetters[j] && !findMatchedLetters.includes(arrayLetters[i])) {
                letter++; // letter++ or letter = letter + 1
            }
        }
        findMatchedLetters.push(arrayLetters[i]);
        if (letter > 1) {
            repeatedLetters.push(`${arrayLetters[i]}: ${letter}`);
        }
    }
    return repeatedLetters;
}

// to show in index the results
function showLettersResultHtml(repeatedWords) {
    let wordsCounted = Object.entries(repeatedWords)
    wordsCounted.forEach(values => {
        let p = document.createElement('p');
        document.getElementById('resultados').appendChild(p);
    
        let strong = document.createElement('strong');
        strong.innerHTML = `Letter n°: ${values[0]} | `;
        p.appendChild(strong);

        let span = document.createElement("span");
        span.innerHTML = `Counter: ${values[1]}`;
        p.appendChild(span);
    })
}

// 6 calling the functions
function letterCount() {
    let textGet = getDocumentText();
    let textClean = cleanText(textGet);
    let letters = countRepeatedLetters(textClean);
    showLettersResultHtml(letters);
}

letterCount();

//* PART TWO *: How many times the WORDS are repetead in the text

// 1 get the content text of the document
function getDocumentText() {
    return text = document.getElementById('texto-entrada').textContent;
}

// 2 Generates new array with the words: 
function addWordsToArray(text) {
    return text = text.toLowerCase().split(" ").sort(); // Lower case words order by asc
}

// 3 Function that counts words:
function countRepeatedWords(text) {
    let arrayWords = addWordsToArray(text);
    let findMatchedWords = [];
    let repeatedWords = [];
    for (let i = 0; i < arrayWords.length; i++) {
        let word = 0;
        for (let j = 0; j < arrayWords.length; j++) {
            if (arrayWords[i] === arrayWords[j] && !findMatchedWords.includes(arrayWords[i])) {
                word++;
            }
        }
        findMatchedWords.push(arrayWords[i]);
        if (word > 1) {
            repeatedWords.push(`${arrayWords[i]}: ${word}`);
        }
    }
    return repeatedWords;
}

// 4 to show in index
function showWordsResultHtml(repeatedWords) {
    let wordsCounted = Object.entries(repeatedWords)
    wordsCounted.forEach(values => {
        let p = document.createElement('p');
        document.getElementById('resultados').appendChild(p);
    
        let strong = document.createElement('strong');
        strong.innerHTML = `Word n°: ${values[0]} | `;
        p.appendChild(strong);

        let span = document.createElement("span");
        span.innerHTML = `Count: ${values[1]}`;
        p.appendChild(span);
    })
}

// 5 calling the functions
function wordCount() {
    let getText = getDocumentText();
    let cleanWords = cleanText(getText);
    let words = countRepeatedWords(cleanWords);
    showWordsResultHtml(words);
}

wordCount();



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


    // * other way        
    function insertWordResults(result) {
    var resultsArray = Object.entries(result)
    resultsArray.forEach(values => {
        
        var p = document.createElement("p");
        document.getElementById('resultados').appendChild(p);

        
        var strong = document.createElement("strong");
        strong.innerHTML = `Palabra: ${values[0]}`;
        p.appendChild(strong);

        var span = document.createElement("span");
        span.innerHTML = `Cantidad: ${values[1]}`;
        p.appendChild(span);
            })
        }


    ## Other resolution:

        function getDocumentLetters() {
            var textEntrada = document.querySelector('#texto-entrada').textContent;
            return textEntrada.replace(/[^-a-z0-9]/ig, '').toUpperCase().split("");
        }

        function countLetters(text) {
            var result = {}
            text.forEach(letter => {
                if (!result[letter]) {
                    result[letter] = 1;
                }
                else {
                    result[letter] += 1;
                }
            })
            return result;
        }
*/