const hoursOut = document.querySelector(".time__hours");
const minutesOut = document.querySelector(".time__minutes");
const secondsOut = document.querySelector(".time__seconds");
const millisecondsOut = document.querySelector(".time__milliseconds");
const newResults = document.querySelector(".newResults");

const startbtn = document.querySelector(".buttons__start");
const pausebtn = document.querySelector(".buttons__pause");
const stopbtn = document.querySelector(".buttons__stop");
const newbtn = document.querySelector(".buttons__new");

let hours = 00,
    minutes = 00,
    seconds = 00,
    milliseconds = 00,
    interval,
    counter = 0,
    newResult;


startbtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
    // newResult = "";
    // counter = 0;
    // newResults.innerHTML = newResult;
})

pausebtn.addEventListener("click", () => {
    clearInterval(interval);
})

stopbtn.addEventListener("click", () => {
    clearInterval(interval);
    clearFields();

})

newbtn.addEventListener("click", () => {
    clearInterval(interval);
    counter++;
    milliseconds < 10 ? milliseconds = "0" + milliseconds : milliseconds = milliseconds;;
    seconds < 9 ? seconds = "0" + seconds : seconds = seconds;
    minutes < 9 ? minutes = "0" + minutes : minutes = minutes;
    hours < 9 ? hours = "0" + hours : hours = hours;
    newResult = `<div class="newresult">Result ${counter})  ${hours} : ${minutes} : ${seconds} : ${milliseconds}</div>`
    newResults.innerHTML += newResult;
    clearFields();
    interval = setInterval(startTimer, 10);

})

function startTimer() {
    milliseconds++;
    milliseconds < 10 ? millisecondsOut.innerHTML = "0" + milliseconds : millisecondsOut.innerHTML = milliseconds;
    if (milliseconds > 99) {
        seconds++;
        milliseconds = 0;
        millisecondsOut.innerHTML = milliseconds;
    }
    seconds < 9 ? secondsOut.innerHTML = "0" + seconds : secondsOut.innerHTML = seconds;

    if (seconds > 59) {
        minutes++;
        seconds = 0;
        secondsOut.innerHTML = seconds;
    }
    minutes < 9 ? minutesOut.innerHTML = "0" + minutes : minutesOut.innerHTML = minutes;
    if (minutes > 59) {
        hours++;
        minutes = 0;
        minutesOut.innerHTML = minutes;
    }
    hours < 9 ? hoursOut.innerHTML = "0" + hours : hoursOut.innerHTML = hours;
}

function clearFields() {
    hours = 00;
    minutes = 00;
    seconds = 00;
    milliseconds = 00;
    hoursOut.innerHTML = hours + "0";
    minutesOut.innerHTML = minutes + "0";
    secondsOut.innerHTML = seconds + "0";
    millisecondsOut.innerHTML = milliseconds + "0";
}