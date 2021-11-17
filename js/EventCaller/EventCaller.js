import { increaseNumber, decreaseNumber , resetNumber } from "../counter/counter.js";
import { increaseNumberCounter, decreaseNumberCounter , resetNumberCounter } from "../counter/counter2.js";
import { digitalClock } from "../chronometer/chronometer.js";
import { Timer } from "../timer/timer.js";
import { showMeCounter, showMeTime, convertTextColor, convertTextInInput } from "../functions/functions.js";
import { increaseNumberDecimal, decreaseNumberDecimal , resetNumberDecimal } from "../counter/counterChronometer.js";



export function eventCaller() {
    let buttonIdIncrease = document.getElementById("increaseButton")
    buttonIdIncrease.addEventListener("click", increaseNumber)

    let buttonIdDecrease = document.getElementById("decreaseButton")
    buttonIdDecrease.addEventListener("click", decreaseNumber)


    let buttonIdReset = document.getElementById("resetButton")
    buttonIdReset.addEventListener("click", resetNumberDecimal)

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

    let mouseOverSeconds = document.getElementById("spanText")
    mouseOverSeconds.addEventListener("click", convertTextInInput )




    mouseOverSeconds.addEventListener("mouseover", convertTextColor )

    let mouseOverMinutes = document.getElementById("spanText-minutes")
    mouseOverMinutes.addEventListener("mouseover", convertTextColor )
    mouseOverMinutes.addEventListener("click", convertTextInInput )

    let mouseOverOurs = document.getElementById("spanText-centecimal")
    mouseOverOurs.addEventListener("mouseover", convertTextColor )
    mouseOverOurs.addEventListener("click", convertTextInInput )

    digitalClock("#playChronometer","#stopChronometer", "#resetButton", "#countChronometer", "#EraseCounterChronometer")

    Timer("#playTimer","#stopChronometer", "#resetButton", "#resetTempo" )
}


