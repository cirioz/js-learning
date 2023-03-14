// Koliko upitnika imamo, tj slotova za input
const inputSlotNum = 4;
// Koliko ima vrsta znakova od kojih biramo
const signKindNum = 6;
// Putanja slika znakova
const signsBasePath = "img/sign/";
// Koliko maximalno ima pokusaja
const maxTurns = 6;

/**
 * 
 */
let turnNum = 0;
let currentCombination = null;
let solutionCombination = null;

let enableLogging = false;

function loadNextImage(img)
{
    var turnSlot = Number(img.id[1]);
    var elementIndex = Number(img.id[3] - 1);

    if (turnNum != turnSlot)
    {
        console.warn("Ne klikas dobar turn");
        return;
    }
    
    if (currentCombination == null)
    {
        currentCombination = [-1, -1, -1, -1];
    }

    currentCombination[elementIndex] = (currentCombination[elementIndex] + 1) % signKindNum;

    imgToLoad = currentCombination[elementIndex] + ".png";
    img.src = signsBasePath + imgToLoad;
}

function checkSolution(userInput, solution)
{
    var contains = 0;
    var inPlace = 0;  

    var userLeft = [];
    var solLeft = [];

    for(var i = 0; i < userInput.length; i++)
    {
        if (userInput[i] === solution[i])
        {
            inPlace++;
        }
        else
        {
            userLeft.push(userInput[i]);
            solLeft.push(solution[i]);
        }
    }

    if (inPlace === inputSlotNum)
    {
        return [inputSlotNum, 0];
    }

    for (i = 0; i < userLeft.length; i++)
    {
        var iof = solLeft.indexOf(userLeft[i]);
        if (iof > -1)
        {
            contains++;
            solLeft.splice(iof, 1);
        }
    }

    return [inPlace, contains];
}

function showSolution()
{
    var ch = document.getElementById("solution").children;
    for (var i = 0; i < ch.length; i++)
    {
        ch[i].src = signsBasePath + solutionCombination[i] + ".png";
    }
}

function submitCombination()
{
    if (turnNum < 1)
    {
        return;
    }
    if (currentCombination === null || currentCombination.some((el, ind, arr) => {
        return el < 0;
    }))
    {
        window.alert("Nemoj upitnike, unesi neke znakove");
        return;
    }
    
    if (currentCombination.length !== solutionCombination.length)
    {
        throw Error("{currentCombination.length} != {desiredCombination.length}");
    }

    logToConsole("submitted", currentCombination);

    var info = checkSolution(currentCombination, solutionCombination);

    logToConsole("feedback info", info);

    handleSolutionInfo(info);
}

function generateCombination()
{
    const signSpan = 1 / (signKindNum - 1);
    var array = [];
    for (var i = 0; i < inputSlotNum; i++)
    {
        var rnd = Math.random();
        array.push(Math.round(rnd / signSpan));
    }
    return array;
}

function showTurnFeedback(info)
{
    function appendFeedbackImg(path)
    {
        var hitImg = document.createElement("img");
        hitImg.src = path;
        turnElement.appendChild(hitImg);
    }

    var turnId = "turn0" + turnNum;
    var turnElement = document.getElementById(turnId);

    for (var i = 0; i < info[0]; i++)
    {
        appendFeedbackImg("img/tacno.png");
    }
    for (i = 0; i < info[1]; i++)
    {
        appendFeedbackImg("img/netacno.png");
    }
}

function startGame()
{
    solutionCombination = generateCombination();
    logToConsole("solution", solutionCombination);
    turnNum = 1;
}

function playerWonGame()
{
    document.getElementById("msg").innerHTML = "Čestitamo!";
    showSolution();
    clearInterval(intervalId);

}

function playerLostGame()
{
    document.getElementById("msg").innerHTML = "Neuspešno!";
    showSolution();
    clearInterval(intervalId);
}

function handleSolutionInfo(info)
{
    showTurnFeedback(info);
    if (info[0] === 4 && info[1] === 0)
    {
        turnNum = 0;
        playerWonGame();
    }
    else
    {
        turnNum++;
        if (turnNum > maxTurns)
        {
            turnNum = 0;
            playerLostGame();
        }
    }
    currentCombination = null;
}

// Timer

let timerOn = false;
let timerTime;
let timeView;

let intervalId;


function timerToggleUpdate()
{
    var timer = document.getElementById("timer");
    var poSrpski = timerOn ? 'uključen  <b id="time">00:00</b>' : 'isključen';
    timer.innerHTML = "Tajmer je " + poSrpski;
}

function toggleTimer()
{
    if(turnNum != 1)
    {
        window.alert("Ne može sada togl tajmr");
        return;
    }

    timerOn = !timerOn;
    timerTime = 0;
    timerToggleUpdate();
    if (timerOn)
    {
        timeView = document.getElementById("time");
        intervalId = setInterval(timerIterate, 1000);
        console.log(intervalId);

    }
    else
    {
        console.log(intervalId);

        clearInterval(intervalId);
        intervalId = undefined;
        console.log(intervalId);

    }
}

function numToTimeString(num)
{
    var minutes = "0" + Math.round(num / 60);
    var seconds = "0" + num % 60;

    minutes = minutes.substr(minutes.length - 2);
    seconds = seconds.substr(seconds.length - 2);

    return minutes + ":" + seconds;
}

function timerIterate()
{
    timerTime ++;
    timeView.innerHTML = numToTimeString(timerTime);
}

// Reload -- TODO

// Logging

function printLegend()
{
    if (!enableLogging)
    {
        return;
    }
    console.log('0 - Herc');
    console.log('1 - Pik');
    console.log('2 - Karo');
    console.log('3 - Tref');
    console.log('4 - Zvezda');
    console.log('5 - CD');
}

function logToConsole(headline, data)
{
    if (!enableLogging)
    {
        return;
    }
    console.log("* {headline} :");
    console.log(data);
}

printLegend();
startGame();
