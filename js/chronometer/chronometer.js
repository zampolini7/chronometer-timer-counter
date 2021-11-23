import { getElementByIdFunc, isClassOn, isClassof, diferenceBetweenTimes, visibilityOn, visibilityOff } from "../functions/functions.js";
import { increaseNumber } from "../counter/counter.js";
import { showMeCounter, showMeTime, convertTextColor, convertTextInInput } from "../functions/functions.js";

import { increaseNumberDecimal, decreaseNumberDecimal , resetNumberDecimal } from "../counter/counterChronometer.js";


export function digitalClock(btnPlay, btnStop, reset, count, eraseCount) {
    const d = document;
    let chronometer;
    d.addEventListener("click", e=>{
        
        if(e.target.matches(btnPlay)) {
            chronometer = setInterval(() => {
                increaseNumberDecimal()

                isClassOn("stopChronometer")
                isClassof("playChronometer")
                isClassof("regularCounter")
                

                isClassOn("countChronometer")
                isClassof("playTimer")
                visibilityOff("playChronometer")

                
                let mouseOverOurs = document.getElementById("spanText-centecimal")
                let mouseOverSeconds = document.getElementById("spanText")
                let mouseOverMinutes = document.getElementById("spanText-minutes")

                mouseOverSeconds.removeEventListener("click", convertTextInInput, false )
                mouseOverMinutes.removeEventListener("click", convertTextInInput, false )
                mouseOverOurs.removeEventListener("click", convertTextInInput, false )

                
            }, 10.5);  
            
        }

        if(e.target.matches(btnStop)) {
            clearInterval(chronometer)
            

            isClassOn("playChronometer")
            isClassof("stopChronometer")
            isClassOn("playTimer")
            isClassOn("regularCounter")

            let mouseOverOurs = document.getElementById("spanText-centecimal")
            let mouseOverSeconds = document.getElementById("spanText")
            let mouseOverMinutes = document.getElementById("spanText-minutes")

            mouseOverSeconds.addEventListener("click", convertTextInInput )
            mouseOverMinutes.addEventListener("click", convertTextInInput )
            mouseOverOurs.addEventListener("click", convertTextInInput )
            
        }

        if(e.target.matches(reset)) {
            clearInterval(chronometer)
            
            isClassof("stopChronometer")
            isClassof("playChronometer")
            isClassof("countChronometer")
            visibilityOn("playChronometer")
            isClassOn("regularCounter")

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

            
            // new Promise((resolve, reject) => {
            //     diferenceBetweenTimes(() => resolve("resultado"))
            //   })
            // .finally(() => alert("Promesa lista"))
            // .then(result =>  openSpan = () => {
            //         let addEventListenerCharged = document.getElementsByClassName(".li-span-class")
                    
            //         addEventListenerCharged.classLis.contains(".li-span-class") ? addEventListenerCharged.addEventListener("click", openSpan) : 
            //         console.log("siga, siga") ;
                    
            //         console.log("llegamos al evento open");
            //         // let createSpan = document.createElement("input")
            //         // createSpan.setAttribute("type", "text")
            //         // createSpan.setAttribute("class", "span-li-dont-Me-LaCountIt")
                    
                    
            //     });


            // let openSpan = () => {
            //     let addEventListenerCharged = document.getElementsByClassName(".li-span-class")
                
            //     addEventListenerCharged.classLis.contains(".li-span-class") ? addEventListenerCharged.addEventListener("click", openSpan) : 
            //     console.log("siga, siga") ;
                
            //     console.log("llegamos al evento open");
            //     // let createSpan = document.createElement("input")
            //     // createSpan.setAttribute("type", "text")
            //     // createSpan.setAttribute("class", "span-li-dont-Me-LaCountIt")
                
                
            // }
            // openSpan()
            
         
            
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

