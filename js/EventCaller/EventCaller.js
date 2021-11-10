import { increaseNumber, decreaseNumber , resetNumber } from "../counter/counter.js";
import { increaseNumberCounter, decreaseNumberCounter , resetNumberCounter } from "../counter/counter2.js";
import { digitalClock } from "../chronometer/chronometer.js";
import { Timer } from "../timer/timer.js";
import { showMeCounter, showMeTime } from "../functions/functions.js";


export function eventCaller() {
    let buttonIdIncrease = document.getElementById("increaseButton")
    buttonIdIncrease.addEventListener("click", increaseNumber)

    let buttonIdDecrease = document.getElementById("decreaseButton")
    buttonIdDecrease.addEventListener("click", decreaseNumber)


    let buttonIdReset = document.getElementById("resetButton")
    buttonIdReset.addEventListener("click", resetNumber)

    let buttonIdIncrease1 = document.getElementById("increaseButton1")
    buttonIdIncrease1.addEventListener("click", increaseNumberCounter)

    let buttonIdDecrease1 = document.getElementById("decreaseButton1")
    buttonIdDecrease1.addEventListener("click", decreaseNumberCounter)


    let buttonIdReset1 = document.getElementById("resetButton1")
    buttonIdReset1.addEventListener("click", resetNumberCounter)


    let buttonIdResetTempo = document.getElementById("resetTempo")
    buttonIdResetTempo.addEventListener("click", resetNumber)

    let buttonRadioButtonCounter = document.getElementById("regularCounter")
    buttonRadioButtonCounter.addEventListener("click", showMeCounter)

    let buttonRadioButtonTime = document.getElementById("timeCounter")
    buttonRadioButtonTime.addEventListener("click", showMeTime)

    digitalClock("#playChronometer","#stopChronometer", "#resetButton", "#countChronometer", "#EraseCounterChronometer")

    Timer("#playTimer","#stopChronometer", "#resetButton", "#resetTempo" )
}


