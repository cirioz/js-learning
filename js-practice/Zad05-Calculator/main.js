let currentResult = 0;
let currentExpression = "";

/**
 * Kada otvaramo zagradu numOfOpenParenthesis++
 * Kada zatvaramo zagradu numOfOpenParenthesis--
 * Ako je vrednost 0 -> sve zagrade su uredu
 *      (ili nijedna nije ni otvorena, ili su sve otvorene uspesno zatvorene)
 * Ako je vrednost 0 -> ne mozemo da upisemo zatvorenu zagradu (jer nije otvorena)
 * Ako je vrednost veca od 0 -> nisu sve zagrade zatvorene (napisati alert)
 */
let numOfOpenParenthesis = 0;

const ALL_OPERATORS = "+-*/";
const ALLOWED_OPERATORS_ON_BEGINING = "+-";
const PARENTHESIS = "()";

let resultBox = document.getElementById("result");
let inputBox = document.getElementById("input");

// help functions

function isOperator(ch)
{
    for(var i = 0; i < ALL_OPERATORS.length; i++)
    {
        if (ch === ALL_OPERATORS[i])
        {
            return true;
        }
    }
    return false;
}

function isParenthesis(p)
{
    return p === PARENTHESIS[0] || p === PARENTHESIS[1];
}

function isOpenParenthasis(p)
{
    return PARENTHESIS[0] === p;
}

function isClosedParenthasis(p)
{
    return PARENTHESIS[1] === p;
}


// ---------------------------------------------------

function resetCalc()
{
    // Unutrasnje stanje da stavi na pocetno.
    currentExpression = "";
    currentResult = 0;
    // Vidljivo stanje na stranici da stavi na pocetno
    resultBox.innerHTML = "";
    inputBox.value = "";
}

function simpleWrite(value)
{
    currentExpression += value;
    inputBox.value = currentExpression;
}

function equalsButton()
{
    /**
     * Mora par stvari:
     * Izracuna rezultat
     * Ispise rezultat
     * Updateuje currentExpression
     */

    
    // moze ti zatrebati nekad kasnije pri resavanju zadatka...
    // checkIfInputIsValid();

    currentResult = eval(currentExpression);
    resultBox.innerHTML = currentResult;
    inputBox.value = currentResult;
    // forica da ostane string
    currentExpression =  "" + currentResult;
}


function mathOperation(operator)
{
    /**
     * Rasclanjujemo problem da delove:
     */
    if(currentExpression.length == 0)
    {
        // dopustimo upisivanje karaktera ako je on + ili -
        
        if (ALLOWED_OPERATORS_ON_BEGINING.includes(operator))
        {
            // dozvoljeno je upisati
            // TODO -- upisi ga u current expression
            currentExpression += operator;
            inputBox.value = currentExpression;
        }
        
        return;
    }

    // pravilo: samo jedan operator zaredom moze da se upise
    var lastChar = currentExpression[currentExpression.length - 1];

    // ovaj deo koda je izmenjen i stavljen u funkciju da mozes da je koristis
    if (isOperator(lastChar))
    {
        return;
    }
    
    // upisujemo novu vrednost u currentExpression
    currentExpression += operator;
    // upisujemo je u inputBox, da korisnik vidi sta upisuje
    inputBox.value = currentExpression;
}

function writeParenthesis(val)
{
    throw Error("Not implemented");
}

function undo()
{
    throw Error("Not implemented");
}

function squareOfNumber()
{
    throw Error("Not implemented");
}

function squareRootOfNumber()
{
    throw Error("Not implemented");
}

function checkIfInputIsValid()
{
    throw Error("Not implemented");
}