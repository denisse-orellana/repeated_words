# Repeated Words

This simple project finds the repeated letters and word of the main document. It's object is the handling of the DOM (Document Object Model).

<p align="center"><img width="100%" src="/asset/img/repeatedwords.png"></p>

## Part I: Number of times that the letters are repeated

### 1. Get the document:

```javascript
function getDocumentText() {
    return text = document.getElementById('texto-entrada').textContent;
}
```

### 2. The spaces and other characters are removed from the text:

```javascript
function cleanText(text) {
    text = text.replaceAll("\n", "");
    text = text.replaceAll("\s", "");
    text = text.replaceAll("\.", "");
    text = text.replaceAll("\,", "");
    text = text.replaceAll("  ", "");
    text = text.replaceAll('        ', '');
    return text
}
```

### 3. A new array is made for the letters:

```javascript
function addLettersToArray(text) {
    text = text.replaceAll(" ", "");
    return text = text.toUpperCase().split("").sort(); // Capital letters order by asc
}
```

### 4. Function that counts letters is added:

```javascript
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
```

### 5. The results are added to the index just as:

```javascript
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
```
### 6. Calling the functions:

```javascript
function letterCount() {
    let textGet = getDocumentText();
    let textClean = cleanText(textGet);
    let letters = countRepeatedLetters(textClean);
    showLettersResultHtml(letters);
}

letterCount();
```

## Part II: Number of times that the words are repeated

### Calling the functions:

For the counting of the words the same steps are followed, leading to the final result:

```javascript
function wordCount() {
    let getText = getDocumentText();
    let cleanWords = cleanText(getText);
    let words = countRepeatedWords(cleanWords);
    showWordsResultHtml(words);
}

wordCount();
```

## Website link

The final state of the project can be seen here: [Repetead words](https://denisseee.github.io/repeated_words/)