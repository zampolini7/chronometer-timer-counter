import { getElementByIdFunc, isClassOn, isClassof } from "../functions/functions.js";

// Inicio Incrementar número del dom
const increaseNumberCounter = (e, increaseNumber) => {

    
    let valueOfTextCounter = document.getElementById("spanRegularCounter")
    let valueOfCounter = parseInt(valueOfTextCounter.textContent)
    let valueModifiedOfCounter = valueOfCounter + 1;
    valueOfTextCounter.innerText = valueModifiedOfCounter;

    console.log(valueOfMinutes)
    console.log(valueOfTextInt)
    console.log(valueModifiedOfText);




}
// Fin Incrementar número del dom

// Inicio Decrementar número del dom 
function decreaseNumberCounter(e) {
    
   
    let valueOfTextCounter = document.getElementById("spanRegularCounter")
    let valueOfCounter = parseInt(valueOfTextCounter.textContent)
    let valueModifiedOfCounter = valueOfCounter - 1 ;
    valueOfTextCounter.innerText = valueModifiedOfCounter;

    
}

// Fin Decrementar número del dom 

// Inicio resetear contador
const resetNumberCounter = (e) => {
  
    let valueOfTextCounter = document.getElementById("spanRegularCounter")
    let valueModifiedOfCounter = 0;
    valueOfTextCounter.innerText = valueModifiedOfCounter;
    
  
}

// Inocop resetear contador

export { increaseNumberCounter, decreaseNumberCounter , resetNumberCounter }