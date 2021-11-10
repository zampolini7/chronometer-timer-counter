// Inicio Incrementar número del dom
const increaseNumber = (e, increaseNumber) => {
    let valueOfText = document.getElementById("spanText")
    let valueOfTextInt = parseInt(valueOfText.textContent)

    let valueOfTextMinutes = document.getElementById("spanText-minutes")
    let valueOfMinutes = parseInt(valueOfTextMinutes.textContent)
    console.log(valueOfMinutes)
    valueOfText.innerText = valueOfTextInt + 1

    console.log(valueOfTextInt)

    if (valueOfTextInt >= 60) {
        valueOfTextInt = 0
        valueOfText.innerHTML = valueOfTextInt
        valueOfTextMinutes.innerHTML = valueOfMinutes + 1
        increaseNumber()
    }

    if (valueOfTextInt >= 0) {

        let turnOnButton = document.getElementById("playChronometer")
        console.log(turnOnButton.classList)
        turnOnButton.classList.contains("on") ? console.log("siga, siga") :
            turnOnButton.classList.remove("off")
        turnOnButton.classList.add("on")
    }


}
// Fin Incrementar número del dom

// Inicio Decrementar número del dom 
function decreaseNumber(e) {
    console.log("tamo bien");
    let valueOfText = document.getElementById("spanText");
    let valueOfTextInt = parseInt(valueOfText.textContent);
    valueOfText.innerText = valueOfTextInt - 1;
    console.log(valueOfTextInt);



    if (valueOfTextInt <= 0) {
        let turnOnButton = document.getElementById("playChronometer");
        console.log(turnOnButton.classList);
        turnOnButton.classList.contains("off") ? console.log("siga, siga") :
            turnOnButton.classList.remove("on");
        turnOnButton.classList.add("off");
    }
}

// Fin Decrementar número del dom 

// Inocop resetear contador
const resetNumber = (e) => {
    console.log("tamo bien");
    let valueOfText= document.getElementById("spanText")
    let valueOfTextInt = valueOfText.innerText = 0;
    let valueOfTextMinutes= document.getElementById("spanText-minutes")
    valueOfTextMinutes.innerHTML = 0
    
    if (valueOfTextInt === 0 ) {
        let turnOnButton = document.getElementById("playChronometer")
        console.log(turnOnButton.classList);
        turnOnButton.classList.contains("off") ? console.log("siga, siga") :
        turnOnButton.classList.remove("on")
        turnOnButton.classList.add("off")

    } 
  
}

// Inocop resetear contador

export { increaseNumber, decreaseNumber , resetNumber }