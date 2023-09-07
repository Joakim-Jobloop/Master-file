const names = ["Tom", "Eric", "Jessica", "Scott", "Anna", "Carl", "Elisabeth", "Benny", "Oliver", "Andy", "Jenny", "Ashley", "Erin", "Patrick"];

//! DRY - Don't Repeat Yourself
// console.log(`Good day ${names[0]}`);
// console.log(`Good day ${names[1]}`);
// console.log(`Good day ${names[2]}`);
// console.log(`Good day ${names[3]}`);
// man måtte ha skrevet disse console.loggene fram til man hadde skrevet hele arrayet over.

const greeter = (name) => `Hello ${name}, have a good day!`;

for (let i = 0; i < names.length; i++) {
    console.log(greeter(names[i]));
}

// Oppgave 1: skriv om const greeter til en funksjon greeter

anotherArray = ["tom", "sarah", "jimmy"]

console.log(anotherArray);

function wordCleaner(arr) {
    let cleanedArr = [];
    for (word of arr) {
        console.log(word);
        cleanedArr.push(word.toUpperCase());
    }
    return cleanedArr;
}

console.log(wordCleaner(anotherArray));

// oppgave 2: Endre på funksjonen over slik at bare første bokstav blir uppercase;

let randomNum = Math.floor(Math.random() * 9) + 1;

let x = 0;

while (x != randomNum) {
    x++;
    if (x === 9) break;
    console.log("trying.. " + x);
}

// oppgave 3: skriv om while-løkken til en for-løkke

let stringArrayReverser = (arr) => {
    if (arr.length < 10 || arr.length > 100)
        return "Array is too short or too long";
    let reversedArray = [];
    for (let i = 0; i < arr.length; i++) {
        reversedArray.push(arr[i].split("").reverse().join(""));
    }
    return reversedArray
}

console.log(stringArrayReverser([
    "Lemon",
    "Mangos",
    "Apple",
    "Pear",
    "Grapes",
    "Kiwi",
    "Fig",
    "Peach",
    "Grapefruit",
    "Watermelon",
    "Orange",
    "Banana",]))

// Oppgave 4 (VANSKELIG): fortsett på funksjonen over for å gjøre uppercase på første bokstav (eks: "Nomel") 


makeNumberArray = (size, maxNum) => {
    let numArray = [];
    for (let i = 0; i < size; i++) {
        numArray.push(Math.floor(Math.random() * maxNum))
    }
    return numArray
}

console.log(makeNumberArray(20, 100));

// Oppgave 5: skriv om funksjonen over til å bruke en while-løkke

const maxFinder = (arr) => {
    let biggest = 0;
    for (let val of arr) {
        if (val > biggest) biggest = val;
    }
    return `Biggest number is ${biggest}`;
}

console.log(maxFinder(makeNumberArray(2, 10)));

// Oppgave 6: skriv om funksjonen over til å bruke en while-løkke

function generatePassword(len) {
    let password = "";
    while (password.length < len) {
        password +=
            String.fromCharCode(Math.floor(Math.random() * 87) + 35)
    }
    return password;
}

console.log(generatePassword(50))


// simpleste loopen i en funksjon:
function enkelLoop() {
    for (let i = 0; i < 5; i++) {
        console.log(i + 1)
    }
}

console.log(enkelLoop());


// simpel loop utenfor funksjon som kjøres med en gang nettsiden lastes:
for (let i = 0; i < 5; i++) {
    console.log(i + 1)
}

// Oppgave 7: Lag en funksjon som returnerer noen tilfeldige lotto tall (hint: bruk 2 separate funksjoner som kombineres på slutten i en konsoll logg)







