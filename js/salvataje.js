let increaseNumber = (e, increaseNumber) => {
    console.log("tamo bien");
    let valueOfText= document.getElementById("spanText")
    let val2 = parseInt(valueOfText.textContent)

    let valueOfTextMinutes= document.getElementById("spanText-minutes")
    let valueOfMinutes = parseInt(valueOfTextMinutes.textContent)
    console.log(valueOfMinutes);
    valueOfText.innerText = val2 + 1;
    
    console.log(val2); 
    
    if (val2 >= 60) {
        val2 = 0;
        valueOfText.innerHTML = val2
        valueOfTextMinutes.innerHTML = valueOfMinutes + 1
        increaseNumber();
    }

    if (val2 <= 0 ) {
    
        let turnOnButton = document.getElementById("playChronometer")
        console.log(turnOnButton.classList);
        turnOnButton.classList.contains("on") ? console.log("siga, siga") :
        turnOnButton.classList.remove("off")
        turnOnButton.classList.add("on")
    } 


}
let decreaseNumber = (e) => {
    console.log("tamo bien");
    let valueOfText= document.getElementById("spanText")
    let val2 = parseInt(valueOfText.textContent)
    valueOfText.innerText = val2 - 1;
    console.log(val2); 
    
    
    
    if (val2 <= 0 ) {
        let turnOnButton = document.getElementById("playChronometer")
        console.log(turnOnButton.classList);
        turnOnButton.classList.contains("off") ? console.log("siga, siga") :
        turnOnButton.classList.remove("on")
        turnOnButton.classList.add("off")
    } 
}

let resetNumber = (e) => {
    console.log("tamo bien");
    let valueOfText= document.getElementById("spanText")
    let val2 = valueOfText.innerText = 0;
    let valueOfTextMinutes= document.getElementById("spanText-minutes")
    valueOfTextMinutes.innerHTML = 0
    
    if (val2 === 0 ) {
        let turnOnButton = document.getElementById("playChronometer")
        console.log(turnOnButton.classList);
        turnOnButton.classList.contains("off") ? console.log("siga, siga") :
        turnOnButton.classList.remove("on")
        turnOnButton.classList.add("off")



    } 
  
}

// let playCronometer = ( ) =>{
//     chronometer = setInterval(() => {
//         increaseNumber()
//     }, 1000);

//     let turnOnButton = document.getElementById("playChronometer")
//     console.log(turnOnButton.classList);

//     turnOnButton.classList.remove("on")
//     turnOnButton.classList.add("off")

//     let turnOffButton = document.getElementById("stopChronometer")
//     console.log(turnOffButton.classList);

//     turnOffButton.classList.remove("off")
//     turnOffButton.classList.add("on")

    

// }

// let stopChronometerF = () => {
    
//     console.log(chronometer.value);
//     clearInterval(chronometer);

// }


const d = document;

function digitalClock(btnPlay, btnStop, reset) {
    let chronometer;
    d.addEventListener("click", e=>{
        
        if(e.target.matches(btnPlay)) {
            chronometer = setInterval(() => {
                increaseNumber()
            }, 100);
        
            let turnOnButton = document.getElementById("playChronometer")
            console.log(turnOnButton.classList);
            
            turnOnButton.classList.contains("off") ? console.log("siga, siga") :
            turnOnButton.classList.remove("on")
            turnOnButton.classList.add("off")
        
            let turnOffButton = document.getElementById("stopChronometer")
            console.log(turnOffButton.classList);
            turnOffButton.classList.contains("on") ? console.log("siga, siga") :
            turnOffButton.classList.remove("off")
            turnOffButton.classList.add("on")

            
        }

        if(e.target.matches(btnStop)) {
            clearInterval(chronometer)
            console.log("se escucha el evento");

            let turnOnButton = document.getElementById("playChronometer")
            console.log(turnOnButton.classList);

            turnOnButton.classList.contains("on") ? console.log("siga, siga") :
            turnOnButton.classList.remove("off")
            turnOnButton.classList.add("on")
        
            let turnOffButton = document.getElementById("stopChronometer")
            console.log(turnOffButton.classList);
            turnOffButton.classList.contains("off") ? console.log("siga, siga") :
            turnOffButton.classList.remove("on")
            turnOffButton.classList.add("off")
        }

        if(e.target.matches(reset)) {
            clearInterval(chronometer)
            console.log("se escucha el evento");

            let turnOnButton = document.getElementById("playChronometer")
            console.log(turnOnButton.classList);
            turnOnButton.classList.contains("on") ? console.log("siga, siga") :
            turnOnButton.classList.remove("off")
            turnOnButton.classList.add("on")
        
            let turnOffButton = document.getElementById("stopChronometer")
            console.log(turnOffButton.classList);
            turnOffButton.classList.contains("off") ? console.log("siga, siga") :
            turnOffButton.classList.remove("on")
            turnOffButton.classList.add("off")
        }
    })
}


let buttonIdIncrease= document.getElementById("increaseButton")
buttonIdIncrease.addEventListener("click", increaseNumber)

let buttonIdDecrease= document.getElementById("decreaseButton")
buttonIdDecrease.addEventListener("click", decreaseNumber)


let buttonIdReset= document.getElementById("resetButton")
buttonIdReset.addEventListener("click", resetNumber)


// let buttonPlayChronometer= document.getElementById("playChronometer")
// buttonPlayChronometer.addEventListener("click", digitalClock)


// let buttonStopChronometer = document.getElementById("stopChronometer")
// buttonStopChronometer.addEventListener("click", digitalClock)


digitalClock("#playChronometer","#stopChronometer", "#resetButton")