import { getElementByIdFunc, isClassOn, isClassof, diferenceBetweenTimes, visibilityOff, visibilityOn } from "../functions/functions.js";
import { decreaseNumber, increaseNumber } from "../counter/counter.js";
import { increaseNumberDecimal, decreaseNumberDecimal , resetNumberDecimal } from "../counter/counterChronometer.js";
import { showMeCounter, showMeTime, convertTextColor, convertTextInInput } from "../functions/functions.js";


export function Timer(btnPlay, btnStop, reset, resetTempo, count, eraseCount) {
    const d = document;
    let chronometer;
    let changeColor;
    d.addEventListener("click", e=>{
        
        if(e.target.matches(btnPlay)) {
            chronometer = setInterval(() => {
                decreaseNumberDecimal()
                isClassOn("stopChronometer")
                isClassof("playChronometer")
                isClassof("countChronometer")
                isClassof("regularCounter")

                isClassof("playTimer")
                visibilityOff("playChronometer")
                // isClassof("countChronometer")
                // visibilityOff("countChronometer")
                stopCounter()

                let mouseOverOurs = document.getElementById("spanText-centecimal")
                let mouseOverSeconds = document.getElementById("spanText")
                let mouseOverMinutes = document.getElementById("spanText-minutes")

                mouseOverSeconds.removeEventListener("click", convertTextInInput, false )
                mouseOverMinutes.removeEventListener("click", convertTextInInput, false )
                mouseOverOurs.removeEventListener("click", convertTextInInput, false )

            }, 10.5);  
            
            
            function stopCounter(e) {
            
                let valueOfText = document.getElementById("spanText");
                let valueOfTextInt = parseInt(valueOfText.textContent)

                let valueOfTextMinutes = document.getElementById("spanText-minutes")
                let valueOfMinutes = parseInt(valueOfTextMinutes.textContent)

                let valueOfTextCentecimal = document.getElementById("spanText-centecimal")
                let valueOfCentecimal = parseInt(valueOfTextCentecimal.textContent)

            
    
                valueOfTextCentecimal.addEventListener("click", convertTextInInput )
                valueOfText.addEventListener("click", convertTextInInput )
                valueOfTextMinutes.addEventListener("click", convertTextInInput )
                
                

                
                // visibilityOn("playChronometer")
               
            
                if (valueOfTextInt === 0 && valueOfMinutes === 0 && valueOfCentecimal === 0) {
                    clearInterval(chronometer)
                    // isClassOn("playChronometer")
                    isClassof("stopChronometer")

                    visibilityOff("playChronometer")
                    visibilityOff("countChronometer")
                    visibilityOff("playTimer")
                    visibilityOff("decreaseButton")                    
                    visibilityOff("increaseButton")
                    visibilityOff("resetButton")
                    // visibilityOff("decreaseButton")
                    // visibilityOff("increaseButton")
                    visibilityOn("resetTempo")

                    isClassof("stopChronometer")
                    isClassof("playChronometer")
                    isClassof("countChronometer")
                    isClassof("playTimer")                   
                    isClassof("decreaseButton")
                    isClassof("increaseButton")
                    isClassof("resetButton")
                    isClassOn("resetTempo")
                
                    

                    changeColor = setInterval(() => {
                        let redColor= "#D50000"
                        document.body.style.backgroundColor = redColor;
                        

                        


                        setTimeout(() => {
                            document.body.style.backgroundColor = "";
                        }, 1000);
                        
                    }, 2000);

                    let clearCounter = document.getElementById("vueltasMarcadas")
                    clearCounter.innerHTML = `
                    <div id="vueltasMarcadas" >
                    <div class="container-h3-button-vueltasMarcadas"> 
                        <h3 id="span-vueltasMarcadas"></h3>
                        <button id="EraseCounterChronometer" class="button cyt count off"> Borrar vueltas </button>
                    </div>
                    <div class="container-ul-vueltasMarcadas">
                        <ol id="ul-vueltasMarcadas">
                            
                        </ol>
                        <ol id="ul-vueltasMarcadas-diferencia">
                            
                        </ol>
                    </div>
                    `

                    
                    
                }
            }
           

        }

        if(e.target.matches(btnStop)) {
            clearInterval(chronometer)
            

            isClassOn("playChronometer")
            isClassof("stopChronometer")
            isClassOn("regularCounter")

            
        }

        if(e.target.matches(reset)) {
            clearInterval(chronometer)
            clearInterval(changeColor)
            
            isClassof("stopChronometer")
            isClassof("playChronometer")
            isClassof("countChronometer")
            isClassof("playTimer")
            visibilityOn("playTimer")
            visibilityOn("increaseButton")
            visibilityOn("decreaseButton")
            isClassOn("decreaseButton")
            isClassOn("increaseButton")
            let clearCounter = document.getElementById("vueltasMarcadas")
            clearCounter.innerHTML = `
            <div id="vueltasMarcadas" >
            <div class="container-h3-button-vueltasMarcadas"> 
                <h3 id="span-vueltasMarcadas"></h3>
                <button id="EraseCounterChronometer" class="button cyt count off"> Borrar vueltas </button>
            </div>
            <div class="container-ul-vueltasMarcadas">
                <ol id="ul-vueltasMarcadas">
                    
                </ol>
                <ol id="ul-vueltasMarcadas-diferencia">
                    
                </ol>
            </div>
            `

            let mouseOverOurs = document.getElementById("spanText-centecimal")
            let mouseOverSeconds = document.getElementById("spanText")
            let mouseOverMinutes = document.getElementById("spanText-minutes")

            mouseOverSeconds.addEventListener("click", convertTextInInput )
            mouseOverMinutes.addEventListener("click", convertTextInInput )
            mouseOverOurs.addEventListener("click", convertTextInInput )
        }
        if(e.target.matches(resetTempo)) {
            clearInterval(chronometer)
            clearInterval(changeColor)
            isClassof("stopChronometer")
            isClassof("playChronometer")
            isClassof("countChronometer")
            isClassof("playTimer")
            visibilityOn("playTimer")
            visibilityOn("increaseButton")
            visibilityOn("decreaseButton")
            visibilityOn("resetButton")
            visibilityOn("playChronometer")
            isClassOn("decreaseButton")
            isClassOn("increaseButton")
            isClassof("resetTempo")

      

            let clearCounter = document.getElementById("vueltasMarcadas")
            clearCounter.innerHTML = `
            <div id="vueltasMarcadas" >
            <div class="container-h3-button-vueltasMarcadas"> 
                <h3 id="span-vueltasMarcadas"></h3>
                <button id="EraseCounterChronometer" class="button cyt count off"> Borrar vueltas </button>
            </div>
            <div class="container-ul-vueltasMarcadas">
                <ol id="ul-vueltasMarcadas">
                    
                </ol>
                <ol id="ul-vueltasMarcadas-diferencia">
                    
                </ol>
            </div>
            `

            let mouseOverOurs = document.getElementById("spanText-centecimal")
            let mouseOverSeconds = document.getElementById("spanText")
            let mouseOverMinutes = document.getElementById("spanText-minutes")

            mouseOverSeconds.addEventListener("click", convertTextInInput )
            mouseOverMinutes.addEventListener("click", convertTextInInput )
            mouseOverOurs.addEventListener("click", convertTextInInput )
        }

        if(e.target.matches(count)) {
            diferenceBetweenTimes("ul-vueltasMarcadas", "ul-vueltasMarcadas-diferencia")
            let visibleEraserCounter = document.getElementById("EraseCounterChronometer")
            isClassOn("EraseCounterChronometer")


         
            
        }

        if(e.target.matches(eraseCount)) {
            let clearCounter = document.getElementById("vueltasMarcadas")
            clearCounter.innerHTML = `
            <div id="vueltasMarcadas" >
            <div class="container-h3-button-vueltasMarcadas"> 
                <h3 id="span-vueltasMarcadas"></h3>
                <button id="EraseCounterChronometer" class="button cyt count off"> Borrar vueltas </button>
            </div>
            <div class="container-ul-vueltasMarcadas">
                <ol id="ul-vueltasMarcadas">
                    
                </ol>
                <ol id="ul-vueltasMarcadas-diferencia">
                    
                </ol>
            </div>
            `      


            
        }


    })
}

