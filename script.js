// Selecting elements
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const lapBtn = document.getElementById("lapBtn");
const resetBtn = document.getElementById("resetBtn");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const millisecondsDisplay = document.getElementById("milliseconds");
const lapList = document.getElementById("laplist");

// Variables
let intervalId;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let lapCount = 1;

// Format time helper function
function formatTime(time) {
    return time.toString().padStart(2, "0");
}

// Start the timer
function startTimer() {
    if (!intervalId) {
        intervalId = setInterval(() => {
            milliseconds++;
            if (milliseconds === 100) {
                seconds++;
                milliseconds = 0;
            }
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            minutesDisplay.textContent = formatTime(minutes);
            secondsDisplay.textContent = formatTime(seconds);
            millisecondsDisplay.textContent = formatTime(milliseconds);
        }, 10);
    }
}

// Stop the timer
function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
}

// Reset the timer
function resetTimer() {
    stopTimer();
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    minutesDisplay.textContent = "00";
    secondsDisplay.textContent = "00";
    millisecondsDisplay.textContent = "00";
    lapCount = 1;
    lapList.innerHTML = "";
}

// Add a lap
function addLap() {
    const lapTime = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
    lapList.appendChild(lapItem);
    lapCount++;
}

// Event listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
lapBtn.addEventListener("click", addLap);
resetBtn.addEventListener("click", resetTimer);