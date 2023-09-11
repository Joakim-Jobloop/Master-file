let sumParagraph = document.getElementById("sum-el");

function add() {
  let num1 = parseFloat(document.getElementById("num1-el").value);
  let num2 = parseFloat(document.getElementById("num2-el").value);
  let sum = num1 + num2;
  sumParagraph.textContent = sum;
}

function subtract() {
    let num1 = parseFloat(document.getElementById("num1-el").value);
    let num2 = parseFloat(document.getElementById("num2-el").value);
  let sum = num1 - num2;
  sumParagraph.textContent = sum;
}

function divide() {
    let num1 = parseFloat(document.getElementById("num1-el").value);
    let num2 = parseFloat(document.getElementById("num2-el").value);
  let sum = num1 / num2;
  sumParagraph.textContent = sum;
}
function multiply() {
    let num1 = parseFloat(document.getElementById("num1-el").value);
    let num2 = parseFloat(document.getElementById("num2-el").value);
  let sum = num1 * num2;
  sumParagraph.textContent = sum;
}
