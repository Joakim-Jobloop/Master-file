let x = 10;

if (x === 10) {
    console.log("x is 10");
} else if (x < 10) {
    console.log("x is less than 10");
} else if (x > 10) {
    console.log("x is greater than 10");
} else {
    console.log("x is not a number");
}

// Bar logikk:

let age = 18

age >= 18 ? console.log("Du er myndig og får lov til å drikke alkohol") : console.log("Du er et barn og får ingen alkohol av oss")

if (age >= 18) {
    console.log("Du er myndig og får lov til å drikke alkohol");
} else {
    console.log("Du er et barn og får ingen alkohol av oss");
}

// let drikke = age >= 18 ? "øl" : "juice";

let drikke;

if (age >= 18) {
    drikke = "øl";
} else {
    drikke = "juice";
}

console.log(drikke);

console.log(age >= 18 ? "Drikk så mye øl du vil!" : "Juice til babien")
//////////////////////////////////////////////


// Random number generator med if else (gir et tilfeldig tall mellom 1 og 10):
let randomNumber = Math.round(Math.random() * 9) + 1;
if (randomNumber > 5) {
    console.log("Tallet er større enn 5");
} else if (randomNumber < 5) {
    console.log("Tallet er mindre enn 5");
} else {
    console.log("Tallet er 5");
}
console.log(`Tallet er: ${randomNumber}`);


function getRandomNumber(maxNumber) {
  return Math.round(Math.random() * maxNumber) + 1; 
}

console.log(getRandomNumber(9649))

// Kompliment funksjon:
function giveCompliment() {
    const compliments = [
        "You're awesome!",
        "You're a star!",
        "You make the world brighter!",
        "You're a superhero!",
        "You're the best!",
    ];

    const randomIndex = Math.floor(Math.random() * compliments.length)
    const compliment = compliments[randomIndex];
    return compliment;
}

console.log(giveCompliment())