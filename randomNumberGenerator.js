function randomNumberGenerator() {
    let randomNumber = Math.floor((Math.random() * 1000) + 1)
    return randomNumber
}

document.getElementById("randomNumber").textContent = "Your lucky number of the day is: " + randomNumberGenerator()