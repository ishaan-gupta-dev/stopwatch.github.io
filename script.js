let hoursDisplay = document.getElementById("hours-display");
let minutesDisplay = document.getElementById("minutes-display");
let secondsDisplay = document.getElementById("seconds-display");
let millisecondsDisplay = document.getElementById("milliseconds-display");

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let startButton = document.getElementById("start-button");
let stopButton = document.getElementById("stop-button");
let resetButton = document.getElementById("reset-button");

// to receive the inteval Id returned by setInterval()
let intervalId = null;

// logic for start button
startButton.onclick = () => {
    startButton.disabled = true;
    if (intervalId != null) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(stopWatch, 10);
}

// logic for stop button
stopButton.onclick = () => {
    startButton.disabled = false;
    clearInterval(intervalId);
}

// logic for reset button
resetButton.onclick = () => {
    startButton.disabled = false;
    clearInterval(intervalId);

    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    hoursDisplay.innerHTML = "00";
    minutesDisplay.innerHTML = "00";
    secondsDisplay.innerHTML = "00";
    millisecondsDisplay.innerHTML = "000";
}

// main logic for stopwatch
function stopWatch() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    // logic for showing 0 before the number if the number is single digit

    let hoursString = hours;
    let minutesString = minutes;
    let secondsString = seconds;
    let millisecondsString = milliseconds;

    if (hours < 10) {
        hoursString = "0" + hours;
    }
    if (minutes < 10) {
        minutesString = "0" + minutes;
    }
    if (seconds < 10) {
        secondsString = "0" + seconds;
    }
    if (milliseconds < 10) {
        millisecondsString = "00" + milliseconds;
    } else if (milliseconds < 100) {
        millisecondsString = "0" + milliseconds;
    }

    hoursDisplay.innerHTML = hoursString;
    minutesDisplay.innerHTML = minutesString;
    secondsDisplay.innerHTML = secondsString;
    millisecondsDisplay.innerHTML = millisecondsString;
}



