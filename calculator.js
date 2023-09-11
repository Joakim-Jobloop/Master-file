let num1 = document.getElementById("num1-el").value;
let num2 = document.getElementById("num2-el").value;

let sumParagraph = document.getElementById("sum-el");
console.log(sum);

function add() {

  let sum = num1 + num2;
  sumParagraph.textContent = sum;
}

function subtract() {
  let sum = num1 - num2;
  sumParagraph.textContent = sum;
}

function divide() {
  let sum = num1 / num2;
  sumParagraph.textContent = sum;
}
function multiply() {
  let sum = num1 * num2;
  sumParagraph.textContent = sum;
}
