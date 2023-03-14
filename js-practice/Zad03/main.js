
let element = document.getElementById("id1");
element.innerHTML = "Ovo je nas <b>najjaci</b> tekst od <i>jutros</i>"

function ucitajPeru()
{
    let image = document.getElementById("img1");
    image.src = "pera.jpg";
    image.width = "300";
}

// -------------------------------------------------------------

// ASCII decimal value ranges for:
const smallLetters = [97, 122];
const bigLetters = [65, 90];

// TODO -- izmeni tako da bude range koji predstavlja brojeve (koristi ASCII tabelu)
const numbers = [-1, -1];


// Example function:

function randomPassGenerator()
{
    const passLength = 6;

    // output string that we append to
    var output = "";

    for(var i = 0; i < passLength; i++)
    {
        var rnd = Math.random();
        var span = smallLetters[1] - smallLetters[0];
        var step = 1 / span;
        var chrVal = smallLetters[0] + Math.round(rnd / step);
        // Pretvara iz ASCII brojnog koda u string vrednost
        var chr = String.fromCharCode(chrVal);
        output += chr;
    }

    return output;
}


function fiftyFiftyChance()
{
    return Math.random() > 0.5;
}

/*
    Koristi funkciju randomPassGenerator() kao primer. Uradi koliko mozes funkcija, ima tu posla. Sto ti ostane ili ne skontas precicemo na casu.

    Idemo :D
*/

// -------------------------------------------------------------

const SPECCHARS = "%$#![]{}()+=-_*<>?";

// duzinu niza dobijamo ovako:
SPECCHARS.length;   // returns 18
// na sledeci nacin pristupano nizu:
SPECCHARS[0];       // returns %


// EASY
function rndPassGenVariableLength(passLength)
{
    // output string that we append to
    var output = "";

    for(var i = 0; i < passLength; i++)
    {
        var rnd = Math.random();
        var span = smallLetters[1] - smallLetters[0];
        var step = 1 / span;
        var chrVal = smallLetters[0] + Math.round(rnd / step);
        // Pretvara iz ASCII brojnog koda u string vrednost
        var chr = String.fromCharCode(chrVal);
        output += chr;
    }

    return output;
}

// -------------------------------------------------------------

// MEDIUM
function rndPassGenSmallAndBigLetters(passLength)
{
    // TODO -- Generisi rnd pass duzine passLength i ukljuci velika i mala slova

    // HINT: take a look at function fiftyFiftyChance()
}

// -------------------------------------------------------------

// HINT:
// help for next function (uncomment or paste to console to see effect):
var abc = "ABC";
// pretvara karakter u ASCII kod
abc.charCodeAt(0); // returns 65
abc.charCodeAt(1); // returns 66


// HARD
function validatePassword(pwd)
{
    var result = false;

    //  TODO -- proveri da li variabla pwd sadrzi barem:
    //  jedno malo slovo
    //  jedno veliko slovo
    //  jedan broj
    //  jedan specijalni karakter iz niza SPECCHARS

    return result;
}

function testValidation()
{
    console.log(validatePassword("bratmoj"));
    console.log(validatePassword("bratMOI"));
    console.log(validatePassword("braAPmoj"));
    console.log(validatePassword("br4tmoJ"));
    console.log(validatePassword("BRatM0!"));

    console.log(validatePassword("Os5oi*x]"));
    console.log(validatePassword("Ye<uy2qu"));
    console.log(validatePassword("Yuoc-ei4"));
    console.log(validatePassword("Iequ}oo4"));
}

// test funkcije (unccomment)
// testValidation();

// -------------------------------------------------------------

// VERY HARD
function rndPassGenWithAtLeastOneSmallAndBigLettersAndNumbersAndSpecialCharacter(passLength)
{
    const oneCharCanBe = ["small letter", "big letter", "number", "specCharacter"];

    if (passLength < oneCharCanBe.length)
    {
        conole.error("Lozinka ne moze da bude manja od 4 jer mora da sadrzi barem 1 malo slovo, 1 veliko slovo, 1 broj i 1 spec karakter");
        return;
    }
    
    // TODO -- Generisi rnd pass duzine passLength i ukljuci BATEM JEDNO veliko, malo slovo, broj i specijalan karakter iz niza SPECCHARS
}

// ---------------------------------------------
// reference vs value

function changeAgeAndReference(person) {
    person.age = 25;
    
    var personB = {
        name: 'John',
        age: 50
    };
    
    return personB;
}

var personObj1 = {
    name: 'Alex',
    age: 30
};

var personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> ?
console.log(personObj2); // -> ?
