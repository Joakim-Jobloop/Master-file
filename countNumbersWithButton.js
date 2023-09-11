// Fang referansen du vil at js skal brukes i:

//! setningen under trengs kun hvis man må legge til en eventlistener, i dette tilfelle.
// const countButton = document.getElementById("countbutton");

// lag en simpel loop som konsoll logger tall 1-10
function countNumbers() {
  // loop syntax:
  for (let i = 1; i <= 10; i++) {
    // konsoll logg hver gang loopen blir kjørt:
    console.log(i);
  }
}

//! metoden under fungerer ikke, men det er mulig å legge til addEventListener her i js filen istedet for å bruke onclick i selve knappen. 
//! onclick mener jeg er en bedre metode siden det krever mindre javascript for å få til det samme.
// legger til en eventlistener til referansen man fanget i starten, 
//"click" betyr at noe skal skje når knappen blir trykket på, 
// countNumbers refererer tilbake til funksjonen og det blir da kjørt når knappen blir trykket på
// countButton.addEventListener("click", countNumbers);
