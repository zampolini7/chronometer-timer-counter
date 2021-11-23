import { getElementByIdFunc, isClassOn, isClassof } from "../functions/functions.js";

// Inicio Incrementar número del dom
const increaseNumberDecimal = (e, increaseNumber) => {
    let valueOfText = document.getElementById("spanText")


    let valueOfTextInt = parseInt(valueOfText.textContent)
    // let valueModifiedOfText = valueOfTextInt + 1;

    // valueOfText.innerText = valueModifiedOfText;
    
    let valueOfTextMinutes = document.getElementById("spanText-minutes")
    let valueOfMinutes = parseInt(valueOfTextMinutes.textContent)
    
    // Number.isNaN(valueOfText) ? console.log("siga siga"):valueOfText.textContent = 0;
    // Number.isNaN(valueOfText) ? valueOfText.textContent = 0 :console.log("siga siga");
    
    let valueOfTextCentecimal = document.getElementById("spanText-centecimal")
    let valueOfCentecimal = parseInt(valueOfTextCentecimal.textContent)
    valueOfTextCentecimal.innerHTML = valueOfCentecimal + 1;
    // let valueModifiedOfTextCentecimal = valueOfTextCentecimal.innerText = valueOfCentecimal + 1;

    // console.log(valueOfMinutes)
    // console.log(valueOfTextInt)
    // console.log(valueModifiedOfText);

    if (valueOfMinutes > 0 || valueOfTextInt > 0 || valueOfCentecimal > 0 ) {
        isClassOn("playChronometer")
        isClassOn("playTimer")
        
    } else if (valueOfCentecimal === 0 ) {
        isClassof("playChronometer")
        isClassof("playTimer")
       
    } ;

    if (valueOfCentecimal >= 99) {

        valueOfText.innerText = valueOfTextInt + 1;
        valueOfTextCentecimal.innerHTML = 0;
        // console.log("aca si entro");

    }
    
    if (valueOfTextInt >= 60) {
        valueOfTextInt = 0
        valueOfText.innerHTML = valueOfTextInt
        valueOfTextMinutes.innerHTML = valueOfMinutes + 1
        // increaseNumber()
    }





}
// Fin Incrementar número del dom

// Inicio Decrementar número del dom 
function decreaseNumberDecimal(e) {
    
    let valueOfText = document.getElementById("spanText");
    let valueOfTextInt = parseInt(valueOfText.textContent);

    let valueOfTextMinutes = document.getElementById("spanText-minutes")
    let valueOfMinutes = parseInt(valueOfTextMinutes.textContent)
    
    
    let valueOfTextCentecimal = document.getElementById("spanText-centecimal")
    let valueOfCentecimal = parseInt(valueOfTextCentecimal.textContent)
    valueOfTextCentecimal.innerHTML = valueOfCentecimal - 1;

   

    if (valueOfMinutes >= 0 && valueOfTextInt === 0 && valueOfCentecimal === 0) {
        valueOfTextInt = 60
        valueOfText.innerHTML = valueOfTextInt
        valueOfTextMinutes.innerHTML = valueOfMinutes - 1
        // increaseNumber()
    }

    if (valueOfTextInt <= 0 && valueOfMinutes === 0) {
        isClassof("playChronometer")
        isClassof("playTimer")
    } 
    
    if (valueOfCentecimal === 0 && valueOfTextInt > 0) {
        
        valueOfText.innerText = valueOfTextInt -1;
        valueOfTextCentecimal.innerHTML = 99;
        // console.log("aca si entro");
        
    }
    
    
        // if (valueOfMinutes >= 0 && valueOfTextInt === 0 ) {
        //     valueOfTextInt = 60 
        //     valueOfText.innerHTML = valueOfTextInt
        //     valueOfTextMinutes.innerHTML = valueOfMinutes - 1
        // } 
    
}

// Fin Decrementar número del dom 

// Inicio resetear contador
const resetNumberDecimal = (e) => {
    // console.log("tamo bien");
    let valueOfTextSeconds= document.getElementById("spanText")
    let valueModifiedOfTextSeconds = valueOfTextSeconds.innerText = 0;
    let valueOfTextMinutes= document.getElementById("spanText-minutes")
    let valueModifiedOfText= valueOfTextMinutes.innerHTML = 0

    let valueOfTextCentecimal = document.getElementById("spanText-centecimal")
    valueOfTextCentecimal.innerHTML = 0
   
    
    if (valueModifiedOfText === 0 && valueModifiedOfTextSeconds === 0 && valueOfTextCentecimal === 0 ) {
        isClassof("playChronometer")
    } 
  
}

// Inocop resetear contador

export { increaseNumberDecimal, decreaseNumberDecimal , resetNumberDecimal }