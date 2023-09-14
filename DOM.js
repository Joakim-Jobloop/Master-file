function fånoefram() {
  let randomNumber = Math.floor(Math.random() * 10 + 1) ;
let el = document.getElementById("whazzap")

  if (randomNumber < 5) {
    el.textContent = `number is less then 5: ${randomNumber}`;  
  } else if (randomNumber > 5) {
    el.textContent = `number is more then 5: ${randomNumber}`;  
  } else {
    el.textContent = `number is 5: ${randomNumber}`;  
  }
}

const fånoeannetfram = () => {
    let randomNumber2 = Math.floor(Math.random() * 10 + 1) ;
    let el2 = document.getElementById("whazzap2")
    
      if (randomNumber2 < 5) {
        el2.textContent = `number is less then 5 A: ${randomNumber2}`;  
      } else if (randomNumber2 > 5) {
        el2.textContent = `number is more then 5 A: ${randomNumber2}`;  
      } else {
        el2.textContent = `number is 5 A: ${randomNumber2}`;  
      }
}

fånoeannetfram();

fånoefram();

