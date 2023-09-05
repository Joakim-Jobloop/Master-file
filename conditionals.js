
// Basic conditionals:

console.log("Hello world!");



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

let y = 9;

console.log(x + y);

x = x * 2; // x er 20
y = y * 2;

console.log(x);

x = 40; // x er 40

console.log(x);

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


