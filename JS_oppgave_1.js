// Oppgave 1
// Lag et array med 10 elementer
// Fjern siste element med .pop
// Legg så til et nytt element i enden i arrayet med .push
// BONUS: Finn og utfør en god method for å ta ut element 3 og 7 fra arrayet tilslutt
// console.log arrayet
const array = [
  "el1",
  "el2",
  "el3",
  "el4",
  "el5",
  "el6",
  "el7",
  "el8",
  "el9",
  "el10",
];

console.log(array);

array.pop();

console.log(array);

array.push("newEl");

console.log(array);

array.splice(2, 1);
array.splice(5, 1);
console.log(array);

// Oppgave 1.1
// Console.log elementet som ligger i index 5 ut i konsollen med tekst som sier: "dette er index 5: ". Dere kan selv velge om det skal være med template literals
console.log(`Dette er nå index 5: ${array[5]}`);

// oppgave 2
// Lag et array med 2 eller flere objekter i. Det skal minst være 3 keys i hvert objekt (f.eks firstName, lastName og age)
// BONUS! Legg til en key som inneholder et array (f.eks hobbies) med minst 3 elementer i
// console.log ut all informasjonen. En for hvert objekt (sånn at all informasjonen til et objekt kommer i en console.log

const arrayWithObjects = [
  {
    firstName: "Bob",
    lastName: "Marley",
    hobbies: ["MJ", "Musikk", "Jameican Food"],
  },
  {
    firstName: "Tor",
    lastName: "Thorkilsen",
    hobbies: ["Matte", "Fysikk", "Roser"],
  },
];

console.log(arrayWithObjects[0].firstName)
console.log(arrayWithObjects[0].lastName)
console.log(arrayWithObjects[0].hobbies)

console.log(arrayWithObjects[1].firstName)
console.log(arrayWithObjects[1].lastName)
console.log(arrayWithObjects[1].hobbies)

console.log(arrayWithObjects[0])
console.log(arrayWithObjects[1])


//oppgave 3:
// Lag en logikk for en bedrift slik som vi har øvd på tidligere. LAG EN NY logikk, ikke bruk samme dere jobbet med på torsdag.
// Det skal være med if og else
// BONUS: Bruk if else minst 2 ganger
// console.log ut resultatet.

const numberOfCats = 4

if (numberOfCats <= 0) {
 console.log("You have no cats")
} else if (numberOfCats > 0 && numberOfCats <= 3) {
    console.log("You between 1 and 3 cats HUZZAH!")
} else {
    console.log("OMG CANIHAZCHEEZBURGER!")
}

//oppgave 4:
// Lag et funksjon som fungerer (husk å bruke return for å få noe ut fra funksjonen du vil at skal være tilgjengelig i konsollen)
// BONUS: Bruk en method vi ikke har gått igjennom enda for å få til noe kult!

function noe() {
    console.log("hallo")
}

noe()
