import { getElementByIdFunc, isClassOn, isClassof } from "../functions/functions.js";

// Inicio Incrementar número del dom
const increaseNumber = (e, increaseNumber) => {
    let valueOfText = document.getElementById("spanText")
    let valueOfTextInt = parseInt(valueOfText.textContent)
    let valueModifiedOfText = valueOfText.innerText = valueOfTextInt + 1;

    let valueOfTextMinutes = document.getElementById("spanText-minutes")
    let valueOfMinutes = parseInt(valueOfTextMinutes.textContent)
    
    
    let valueOfTextCentecimal = document.getElementById("spanText-minutes")
    let valueOfCentecimal = parseInt(valueOfTextCentecimal.textContent)
    // let valueModifiedOfText = valueOfText.innerText = valueOfTextInt + 1;

    console.log(valueOfMinutes)
    console.log(valueOfTextInt)
    console.log(valueModifiedOfText);

    if (valueModifiedOfText > 0 || valueOfTextInt > 0) {
        isClassOn("playChronometer")
        isClassOn("playTimer")
        
    } else if (valueModifiedOfText === 0 ) {
        isClassof("playChronometer")
        isClassof("playTimer")
    } ;
    
    if (valueModifiedOfText >= 60) {
        valueOfTextInt = 0
        valueOfText.innerHTML = valueOfTextInt
        valueOfTextMinutes.innerHTML = valueOfMinutes + 1
        // increaseNumber()
    }

    if (valueOfCentecimal > 99) {
        valueOfText.innerText = valueOfTextInt + 1;
    }




}
// Fin Incrementar número del dom

// Inicio Decrementar número del dom 
function decreaseNumber(e) {
    
    let valueOfText = document.getElementById("spanText");
    let valueOfTextInt = parseInt(valueOfText.textContent);
    let valueOfTextMinutes = document.getElementById("spanText-minutes")
    let valueOfMinutes = parseInt(valueOfTextMinutes.textContent)
    let valueModifiedOfText= valueOfText.innerText = valueOfTextInt - 1;
    


    if (valueModifiedOfText === 0 && valueOfMinutes > 0) {
        valueOfTextInt = 60
        valueOfText.innerHTML = valueOfTextInt
        valueOfTextMinutes.innerHTML = valueOfMinutes - 1
        // increaseNumber()
    }

    if (valueModifiedOfText <= 0 && valueOfMinutes === 0) {
        isClassof("playChronometer")
        isClassof("playTimer")
    } 

    if (valueOfMinutes > 0 && valueOfTextInt === 0 ) {
        valueOfTextInt = 60
        valueOfText.innerHTML = valueOfTextInt
        valueOfTextMinutes.innerHTML = valueOfMinutes - 1
    } 

    

    
}

// Fin Decrementar número del dom 

// Inicio resetear contador
const resetNumber = (e) => {
    console.log("tamo bien");
    let valueOfTextSeconds= document.getElementById("spanText")
    let valueModifiedOfTextSeconds = valueOfTextSeconds.innerText = 0;
    let valueOfTextMinutes= document.getElementById("spanText-minutes")
    let valueModifiedOfText= valueOfTextMinutes.innerHTML = 0

   
    
    if (valueModifiedOfText === 0 && valueModifiedOfTextSeconds === 0) {
        isClassof("playChronometer")
    } 
  
}

// Inocop resetear contador

export { increaseNumber, decreaseNumber , resetNumber }