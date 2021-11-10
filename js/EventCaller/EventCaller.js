import { increaseNumber, decreaseNumber , resetNumber } from "../counter/counter.js";
import { digitalClock } from "../chronometer/chronometer.js";
import { Timer } from "../timer/timer.js";


export function eventCaller() {
    let buttonIdIncrease = document.getElementById("increaseButton")
    buttonIdIncrease.addEventListener("click", increaseNumber)

    let buttonIdDecrease = document.getElementById("decreaseButton")
    buttonIdDecrease.addEventListener("click", decreaseNumber)


    let buttonIdReset = document.getElementById("resetButton")
    buttonIdReset.addEventListener("click", resetNumber)

    digitalClock("#playChronometer","#stopChronometer", "#resetButton", "#countChronometer", "#EraseCounterChronometer")

    Timer("#playTimer","#stopChronometer", "#resetButton" )
}


