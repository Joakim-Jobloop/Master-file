// Hvordan lage en funksjon for å finne summen i et array:
function calculateSum(arr) {
    // først initierer vi en variabel
    let sum = 0;
    // vi lager så en for loop for å skjekke igjennom noe arrayet vi vil bruke
    // denne for loopen er en STANDARD for loop:
    for (let i = 0; i < arr.length; i++) {
        // hver gang loopen kjøres oppdateres sum med å plusse på tallene fra hver index.
        sum += arr[i]
    }
    return sum
}

console.log(calculateSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// Hvordan lage en funksjon som finner det høyeste tallet i et array:
function findMax(arr) {
    // initiate en variabel først som er den første indexen i arrayet
    let max = arr[0];
    // kjøre for loop som starter på index 1, siden vi allerede har definert index 0 i variabelen over
    for (let i = 1; i < arr.length; i++) {
        // hver gang loopen kjøres kjøres en conditional for å sjekke om tallet i indexen er større enn variabelen vi har definert (max)
        if (arr[i] > max) {
            // hvis conditional stemmer kjøres koden under. Koden oppdateres max til det høyeste tallet i arrayet
            max = arr[i]
        }
    }
    // return settes her fordi man vil kun returnere resultatet etter at hele loopen har kjørt igjennom arrayet
    return max;
}

console.log(findMax([87, 6, 1, 321, 9, 726, 109]))

// Hvordan reversere en String med loops:
function reverseString(input) {
    // initiate en empty string siden vi vil ha tilbake en datatype String
    let reversed = "";
    // vi endrer på for loopen slik at vi kan hente enkelt bokstaver fra Stringen og starter på slutten
    // ved å sette i = input.length - 1 starter vi på slutten av Stringen
    // i >= 0 forteller at man sjekker fram til starten av Stringen og ikke lengere
    // i -- forteller at i blir 1 mindre for hver gang loopen kjøres.
    for (let i = input.length - 1; i >= 0; i--) {
        // hver gang loopen kjøres oppdateres reversed med å legge inn en og en bokstav til, starter med den siste bokstaven i Stringen
        reversed += input[i]
    }
    return reversed
}

console.log(reverseString("Joakim Villo"))

// hvordan generere partall med loop:
function generateEvenNumbers(limit) {
    // initiate et empty array, for vi vil ha et array med nummere som resultatet
    let evenNumbers = [];
    // for loopen endres fra standaren for å iterate fra 2 opp til limit, plusses på 2 for hver gang loopen kjøres 
    for (let i = 2; i <= limit; i += 2) {
        // hver gang loopen kjøres blir "i" pushet inn i arrayet på slutten.
        evenNumbers.push(i)
        //! Ikke legg return her! Da kjøres kun loopen en gang
        // return evenNumbers
    }
    return evenNumbers
}

console.log(generateEvenNumbers(10))

// hvordan endre funksjonen over for å heller finne oddetall:
function generateOddNumbers(limit) {
    let oddNumbers = [];
    for (let i = 1; i <= limit; i += 2) {
        oddNumbers.push(i)
    }
    return oddNumbers
}

console.log(generateOddNumbers(10))

// hvordan lage en funksjon som faktoriserer tall

// hvordan console.log et vist antall ganger med økende tall:
function increasingNumber(max) {
    for (let i = 0; i <= max; i++) {
        console.log(i)
    }
}

increasingNumber(5)

function makeNumberArray(max) {
    const numbers = [];
    for (let i = 1; i <= max; i++) {
        numbers.push(i)
    }
    return numbers
}

console.log(makeNumberArray(10))



const marvelHeroes = [
    "Spider-Man",
    "Thor",
    "Hulk",
    "Doctor Strange",
    "Iron Man",
];

// hvordan fjerne noe fra et array med loop:
function removeHero(heroArray, heroToRemove) {
    const newArray = [];
    for (let i = 0; i < heroArray.length; i++) {
        if (heroArray[i] === heroToRemove) {
            newArray.push(heroArray[i]);
        }
    }
    return newArray
}
console.log(marvelHeroes)

console.log(removeHero(marvelHeroes, "Hulk"))


function calculateFactorial(number) {
    // starter på 1 fordi vi ikke skal gange med 0
    let factorial = 1;
    // nesten standard for loop, men starter på 1 istedet for 0 fordi vi ikke skal gange med 0
    for (let i = 1; i <= number; i++) {
        // hver gang loopen kjøres ganges i med factorial: 1*1, 1*2, 2*3, 6*4, 24*5.
        factorial *= i;
    }
    return factorial
}
// faktorial 5: 5 x 4 x 3 x 2 x 1
// kan brukes til å finne ut mulige kombinasjoner/muligheter
console.log(calculateFactorial(5))

// hvordan lage en fibonacci generator:
//! Ignorer denne hvis det er forrvirrende
function generateFibonacci(number) {
    let sequence = [0, 1];
    for (let i = 2; i < number; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2])
    }
    return sequence
}

console.log(generateFibonacci(10))


// hvordan sjekke om Stringen er et palidrom
function isPalidrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false
        }
    }
    return true
}

console.log(isPalidrome("agnes i senga"))












