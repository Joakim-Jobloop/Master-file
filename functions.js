// funksjon somn genererer et tilfeldig tall som man velger selv. maxNumber er en prop (noe man kan referere til for senere istedet for at det er noe fast)
function getRandomNumber(maxNumber) {
    return Math.round(Math.random() * maxNumber) + 1; 
  }
  
  console.log(getRandomNumber(9649))

//! dette er hvordan funksjonen kjøres når man skriver getRandomNumber(9549):
//   function getRandomNumber() {
//     return Math.round(Math.random() * 9649) + 1; 
//   }

///////////////////////////////////

// Veldig enkel funksjon for å legge sammen 2 tall, med 2 props:
  function addTwoNumbers(a, b) {
    return a+b
}
console.log(addTwoNumbers(1,321))

//hvordan å gjøre dette utenom å bruke funksjon:
let a = 1
let b = 321

let sum = a + b

console.log(sum)

///////////////////////////////////

  // Kompliment funksjon:
  function giveCompliment() {
    //Vi lager et array som 
      const compliments = [
          "You're awesome!",
          "You're a star!",
          "You make the world brighter!",
          "You're a superhero!",
          "You're the best!",
      ];
  
      //Vi må finne et tall som går går fra 0 til 4. Vi har 5 elementer, men husk at det første elementet har INDEX 0
      const randomIndex = Math.floor(Math.random() * compliments.length)
      const compliment = compliments[randomIndex];
      return compliment;
  }
  

  console.log(giveCompliment())
  
  // Insult funksjon:
  function giveInsult() {
      const insultsArray = [
          "Du er en dritt",
          "Faen se på deg a!",
          "Tryne ditt!",
          "Kan du bare drite 24 øl?",
          "Morra di!",
      ]
  
      const randomNumber = Math.floor((Math.random() * insultsArray.length))
      const insult = insultsArray[randomNumber]
      return insult
  }
  
  console.log(giveInsult())