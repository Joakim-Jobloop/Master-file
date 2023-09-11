function randomNumberGenerator() {
    let randomNumber = Math.floor((Math.random() * 1000) + 1)
    return randomNumber
}

randomNumber = randomNumberGenerator()



document.getElementById("randomNumber").textContent = "Your lucky number of the day is: " + randomNumber