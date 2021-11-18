// Function get element

let getElementByIdFunc = (id) => {
    document.getElementById(id)
    return id
}

let traetUnElem = getElementByIdFunc("spanText-hours")

console.log(traetUnElem);


// Función para saber si tiene clase on o no la tiene
let isClassOn = ( id ) => {
    let turnOnButton = document.getElementById(id)
        console.log(turnOnButton.classList);
        turnOnButton.classList.contains("on") ? console.log("siga, siga") :
        turnOnButton.classList.add("on");
        turnOnButton.classList.contains("off")? turnOnButton.classList.remove("off"):
        console.log("esta todo bien");
    
}

let isClassof = ( id ) => {
    let turnOffButton = document.getElementById(id)
        console.log(turnOffButton.classList);
        turnOffButton.classList.contains("off") ? console.log("siga, siga") :
        turnOffButton.classList.add("off")
        turnOffButton.classList.contains("on")? turnOffButton.classList.remove("on"):
        console.log("esta todo bien");
}


let visibilityOn = ( id ) => {
    let visibilityOnB = document.getElementById(id)
    visibilityOnB.classList.contains("visibilityOn") ? console.log("siga, siga") :
    visibilityOnB.classList.add("visibilityOn");
    visibilityOnB.classList.contains("visibilityOff")? visibilityOnB.classList.remove("visibilityOff"):
    console.log("esta todo bien");
}

let visibilityOff = ( id ) => {
    let visibilityOffB = document.getElementById(id)
    visibilityOffB.classList.contains("visibilityOff") ? console.log("siga, siga") :
    visibilityOffB.classList.add("visibilityOff")
    visibilityOffB.classList.contains("visibilityOn")? visibilityOffB.classList.remove("visibilityOn"):
    console.log("esta todo bien");
}


let diferenceBetweenTimes = (id1, id2,  ) => {
  


    let d = document;
    console.log("Llegamos");

            
            let textSeconds= document.getElementById("spanText")
            let valueOfTextSeconds = parseInt(textSeconds.textContent)
            console.log(valueOfTextSeconds);
            let textMinutes= document.getElementById("spanText-minutes")
            let valueOfTextMinutes = parseInt(textMinutes.textContent)
            console.log(valueOfTextMinutes);

            let valueOfTextCentecimal = document.getElementById("spanText-centecimal")
            let valueOfCentecimal = parseInt(valueOfTextCentecimal.textContent)

           let li = d.createElement("li")
           li.setAttribute("class", "li-class")
           let span = d.createElement("span")
           span.setAttribute("class", "li-span-class")
           
           

           let spanText = d.createTextNode(` ${valueOfTextMinutes}  : ${ valueOfTextSeconds} : ${valueOfCentecimal}` )
           let elementoVueltas = d.getElementById(id1)

           elementoVueltas.appendChild(li)
           li.appendChild(span)
           span.appendChild(spanText)

           


           let innerSpan = d.getElementById("span-vueltasMarcadas")
           innerSpan.innerText = ` Vueltas Marcadas ` 


           let olQuerySelector = d.getElementById(id1)
           console.log(olQuerySelector.lastElementChild);
           
           let lastChildOlSel = olQuerySelector.lastElementChild;

            let lastPreviousChild = lastChildOlSel.previousElementSibling;

            console.log(lastPreviousChild);

           
            


           if ( lastPreviousChild === null) {

                    let olQuerySelector = d.getElementById(id1)
                    console.log(olQuerySelector.lastElementChild);
                
                    let lastChildOlSel = olQuerySelector.lastElementChild;

                    let lastPreviousChild = lastChildOlSel.previousElementSibling;

                    console.log(lastPreviousChild);

                    let lastChildOfOl = lastChildOlSel.querySelector(".li-span-class")
                    console.log(lastChildOfOl.textContent)

                    let split1OfLastChild = lastChildOfOl.textContent;

                    let objectSplitLastChild = split1OfLastChild.split(":")

                    let númber1SplitOfLastChild = objectSplitLastChild[0]
                    console.log(númber1SplitOfLastChild);

                    let númber1SplitOfLastChild2 = objectSplitLastChild[1]
                    console.log(númber1SplitOfLastChild2);
                

                    let li2 = d.createElement("li")
                    li2.setAttribute("class", "li-class")
                    let span2 = d.createElement("span")
                    span2.setAttribute("class", "li-span-class")
                    
                    
                    let resultadoRestaDeTiemposMin = (valueOfTextMinutes ) 
                    let resultadoRestaDeTiemposSec = (valueOfTextSeconds ) 


                    // let spanText2 = d.createTextNode(` - ${resultadoRestaDeTiemposMin}  : ${resultadoRestaDeTiemposSec } ` )
                    let spanText2 = d.createTextNode(` - There is not diference in time ` )
                   
                    let elementoVueltas2 = d.getElementById(id2)


                    elementoVueltas2.appendChild(li2)
                    li2.appendChild(span2)
                    span2.appendChild(spanText2)
                    

                    // elementoVueltas2.addEventListener("click", openSpan())

                    // let openSpan = () => {
                    //     console.log("llegamos al evento open");
                    //     // let createSpan = document.createElement("input")
                    //     // createSpan.setAttribute("type", "text")
                    //     // createSpan.setAttribute("class", "span-li-dont-Me-LaCountIt")
                        
                        
                    // }
                    
                    // let addEventListenerCharged = document.querySelectorAll(".li-span-class")
                    // addEventListenerCharged.addEventListener("click", openSpan)
               
           } else  {

                    let olQuerySelector = d.getElementById(id1)
                    console.log(olQuerySelector.lastElementChild);
                
                    let lastChildOlSel = olQuerySelector.lastElementChild;

                    let lastPreviousChild = lastChildOlSel.previousElementSibling;

                    console.log(lastPreviousChild);

                    // let lastChildOfOl = lastChildOlSel.querySelector(".li-span-class")
                    console.log(lastPreviousChild.textContent)

                    let split1OfLastChild = lastPreviousChild.textContent;

                    let objectSplitLastChild = split1OfLastChild.split(":")

                    let númber1SplitOfLastChild = parseInt(objectSplitLastChild[0])
                    console.log(númber1SplitOfLastChild);

                    let númber1SplitOfLastChild2 = parseInt(objectSplitLastChild[1])
                    console.log(númber1SplitOfLastChild2);

                    let númber1SplitOfLastChild3 = parseInt(objectSplitLastChild[2])
                    console.log(númber1SplitOfLastChild3);

                    

                    
                

                    let li2 = d.createElement("li")
                    li2.setAttribute("class", "li-class")
                    let span2 = d.createElement("span")
                    span2.setAttribute("class", "li-span-class")

                    
                        let tiempoEnMinutosASegundosDelCronometro = (valueOfTextMinutes * 60)  
                        let tiempoEnMinutosASegundosDelUltimoChild = (númber1SplitOfLastChild  * 60)
                        let sumaDeSegundosTotalesCronometro = tiempoEnMinutosASegundosDelCronometro + valueOfTextSeconds
                        let sumaDeSegundosTotalesChilds = tiempoEnMinutosASegundosDelUltimoChild  +  númber1SplitOfLastChild2

                        let resultadoDeTiempoEnSegundos = sumaDeSegundosTotalesCronometro - sumaDeSegundosTotalesChilds
                        let minutosAStrinig = String(resultadoDeTiempoEnSegundos / 60)
                        console.log( minutosAStrinig);
                        let resultadoAMinutos = minutosAStrinig.split(".", 1)
                        let segundosAString = String(resultadoDeTiempoEnSegundos % 60)
                        let resultadosSegundos = segundosAString.split(".", 1)
                        let resultadoRestaDeTiemposCent = valueOfCentecimal > númber1SplitOfLastChild3? (valueOfCentecimal - númber1SplitOfLastChild3):     (númber1SplitOfLastChild3 - valueOfCentecimal);
                        //     console.log(resultadoRestaDeTiemposCent);

                        let spanText2 = d.createTextNode(` Time diference- ${resultadoAMinutos}  : ${resultadosSegundos } : ${resultadoRestaDeTiemposCent}` )
                        let elementoVueltas2 = d.getElementById(id2)
    
    
                        elementoVueltas2.appendChild(li2)
                        li2.appendChild(span2)
                        span2.appendChild(spanText2)
                        // console.log(resultadoRestaDeTiemposSec);
        
                            

                    // if (valueOfTextMinutes > 0) {                       
                    //   if (valueOfTextMinutes > 0  && númber1SplitOfLastChild !== valueOfTextMinutes )  {
                        
                    //     let resultadoRestaDeTiemposMin = (valueOfTextMinutes -  valueOfTextMinutes) 
                    //     let resultadoRestaDeTiemposSec = (valueOfTextSeconds > númber1SplitOfLastChild2) ? (( 60 +númber1SplitOfLastChild2 ) - valueOfTextSeconds): ( ( 60 + valueOfTextSeconds    ) - númber1SplitOfLastChild2) 
                        



                    //     if (valueOfTextMinutes > 0  && númber1SplitOfLastChild !== valueOfTextMinutes && númber1SplitOfLastChild > 0 || valueOfTextMinutes > 0  && númber1SplitOfLastChild !== valueOfTextMinutes && númber1SplitOfLastChild  0 ) {
                    //         resultadoRestaDeTiemposMin = númber1SplitOfLastChild > valueOfTextMinutes ? númber1SplitOfLastChild - valueOfTextMinutes : valueOfTextMinutes - númber1SplitOfLastChild; 
                    //         resultadoRestaDeTiemposSec = valueOfTextSeconds > númber1SplitOfLastChild2 ? valueOfTextSeconds - númber1SplitOfLastChild2 :  númber1SplitOfLastChild2 - valueOfTextSeconds
                            
                            
                    //     }
                    
                        
                    //     let resultadoRestaDeTiemposCent = (99 - valueOfCentecimal ) > númber1SplitOfLastChild3?  ((99 - valueOfCentecimal ) - númber1SplitOfLastChild3): ( númber1SplitOfLastChild3 - (99 - valueOfCentecimal ) )
                    //     console.log(resultadoRestaDeTiemposCent);
    
    
                    //     let spanText2 = d.createTextNode(` Time diference- ${resultadoRestaDeTiemposMin}  : ${resultadoRestaDeTiemposSec } : ${resultadoRestaDeTiemposCent}` )
                    //     let elementoVueltas2 = d.getElementById(id2)
    
    
                    //     elementoVueltas2.appendChild(li2)
                    //     li2.appendChild(span2)
                    //     span2.appendChild(spanText2)
                    //     console.log(resultadoRestaDeTiemposSec);
                            
                    //     } else {


                    //         let resultadoRestaDeTiemposMin = valueOfTextMinutes >  númber1SplitOfLastChild ? (valueOfTextMinutes -  númber1SplitOfLastChild): (númber1SplitOfLastChild - valueOfTextMinutes ) ; 
                    //         let resultadoRestaDeTiemposSec = valueOfTextSeconds > númber1SplitOfLastChild2 ? (valueOfTextSeconds - númber1SplitOfLastChild2) :(númber1SplitOfLastChild2 - valueOfTextSeconds )  
                    //         let resultadoRestaDeTiemposCent = valueOfCentecimal  > númber1SplitOfLastChild3 ? (valueOfCentecimal  - númber1SplitOfLastChild3) : (númber1SplitOfLastChild3 - valueOfCentecimal )

                    //         console.log(resultadoRestaDeTiemposCent);
        
                    //         let spanText2 = d.createTextNode(` Time diference- ${resultadoRestaDeTiemposMin}  : ${resultadoRestaDeTiemposSec } : ${resultadoRestaDeTiemposCent}` )
                    //         let elementoVueltas2 = d.getElementById(id2)
        
                    //         console.log(resultadoRestaDeTiemposSec);
                    //         elementoVueltas2.appendChild(li2)
                    //         li2.appendChild(span2)
                    //         span2.appendChild(spanText2)

                    //     }

                        
                    
                    // }    
                    // } else{
                    //     // let resultadoRestaDeTiemposMin = (valueOfTextMinutes -  númber1SplitOfLastChild) 
                    //     // let resultadoRestaDeTiemposSec = ( númber1SplitOfLastChild2 - valueOfTextSeconds) 
                    //     // let resultadoRestaDeTiemposCent = (valueOfCentecimal  - númber1SplitOfLastChild3)
                    //     // console.log(resultadoRestaDeTiemposCent);

                    //     let resultadoRestaDeTiemposMin = valueOfTextMinutes >  númber1SplitOfLastChild ? (valueOfTextMinutes -  númber1SplitOfLastChild): (númber1SplitOfLastChild - valueOfTextMinutes ) ; 
                    //     let resultadoRestaDeTiemposSec = valueOfTextSeconds > númber1SplitOfLastChild2 ? (valueOfTextSeconds - númber1SplitOfLastChild2) :(númber1SplitOfLastChild2 - valueOfTextSeconds )  
                    //     let resultadoRestaDeTiemposCent = valueOfCentecimal  > númber1SplitOfLastChild3 ? (valueOfCentecimal  - númber1SplitOfLastChild3) : (númber1SplitOfLastChild3 - valueOfCentecimal )
    
                    //     let spanText2 = d.createTextNode(` Time diference- ${resultadoRestaDeTiemposMin}  : ${resultadoRestaDeTiemposSec } : ${resultadoRestaDeTiemposCent}` )
                    //     let elementoVueltas2 = d.getElementById(id2)
    
    
                    //     elementoVueltas2.appendChild(li2)
                    //     li2.appendChild(span2)
                    //     span2.appendChild(spanText2)

                    // }
                    
                   

        }

           

}

let showMeCounter = () => {
    isClassof("spanText-centecimal")
    isClassof("spanText-minutes")
    isClassof("spanText")
    isClassOn("spanRegularCounter")
    isClassof("playChronometer")
    isClassof("playTimer")
    isClassof("spanBasticSimple")
    isClassof("spanBasticDoble")
    visibilityOff("playTimer")
    visibilityOff("playChronometer")
    visibilityOff("decreaseButton")
    visibilityOff("resetButton")
    visibilityOff("increaseButton")
    visibilityOn("decreaseButton1")
    visibilityOn("resetButton1")
    visibilityOn("increaseButton1")
}

let showMeTime = () => {
    isClassOn("spanText-centecimal")
    isClassOn("spanText-minutes")
    isClassOn("spanText")
    isClassof("spanRegularCounter")
    isClassOn("spanBasticSimple")
    isClassOn("spanBasticDoble")


    visibilityOn("playTimer")
    visibilityOn("playChronometer")

    visibilityOff("decreaseButton1")
    visibilityOff("resetButton1")
    visibilityOff("increaseButton1")
    visibilityOn("decreaseButton")
    visibilityOn("resetButton")
    visibilityOn("increaseButton")
}

let convertTextColor = (event) => {

    console.log("llegamos al mouse over");
    event.target.style.color = "#424242";

    setTimeout(function() {
    event.target.style.color = "";
    }, 500);
}


let convertTextInInput = (e) => {
    let getTextOfDom = document.getElementById(e.target.id)
    let textOfDom = getTextOfDom.textContent = e.target.value

    // textOfDom.setAttribute("class", "off")
    console.log(e.target.id);

    let createInputElement = document.createElement("input")
    createInputElement.setAttribute("type", "number")
    // createInputElement.classList.add("required" )
    // createInputElement.setAttribute("required", "" )

    
    // createInputElement.setAttribute("min", "1")
    // createInputElement.setAttribute("max", "60")
    // createInputElement.setAttribute("minlength", "1")



    // createInputElement.setAttribute("id", "seconds-Id")
    switch(getTextOfDom.id) {
        case 'spanText':
            createInputElement.setAttribute("id", "seconds-Id")
          break;
        case 'spanText-minutes':
            createInputElement.setAttribute("id", "minutes-Id")
          break;
        case 'spanText-centecimal':
            createInputElement.setAttribute("id", "centecimal-Id")
          break;
      }

    createInputElement.value= 0;
    console.log(createInputElement.value);
 
    createInputElement.setAttribute("class", "span-cyt-input")
    getTextOfDom.appendChild(createInputElement)
    console.log( getTextOfDom);
    getTextOfDom.removeEventListener("click", convertTextInInput, false )
    getTextOfDom.addEventListener("change", createNewTextAfterInput)
    
    

}

let createNewTextAfterInput = (e) =>{
    
    let getTextOfDomValueInput = document.getElementById(e.target.id)
    console.log(getTextOfDomValueInput.id);
    let newValueOfTarget = e.target.value;
    let getTextOfDom;
    switch(getTextOfDomValueInput.id) {
        case 'seconds-Id':
            getTextOfDom = document.getElementById("spanText")  
          break;
        case 'minutes-Id':
             getTextOfDom = document.getElementById("spanText-minutes")
          break;
        case 'centecimal-Id':
            getTextOfDom = document.getElementById("spanText-centecimal")
          break;
      }


    // console.log(getTextOfDom);
      if (newValueOfTarget.length === 0) {
        getTextOfDom.textContent = 0;
        
        let mouseOverSeconds = document.getElementById("spanText")
        let valueOfSeconds = mouseOverSeconds.textContent
        mouseOverSeconds.addEventListener("click", convertTextInInput )
        
        let mouseOverMinutes = document.getElementById("spanText-minutes")
        let valueOfMinutes = mouseOverMinutes.textContent
        mouseOverMinutes.addEventListener("click", convertTextInInput )

        let mouseOverOurs = document.getElementById("spanText-centecimal")
        let valueOfOurs = mouseOverOurs.textContent
        mouseOverOurs.addEventListener("click", convertTextInInput )

        if ( valueOfSeconds == 0 && valueOfMinutes == 0 && valueOfOurs == 0) {
            isClassof("playChronometer")
            isClassof("playTimer") 
            // visibilityOn("playTimer")
            visibilityOn("playChronometer")
            isClassof("countChronometer")
            // visibilityOff("spanRegularCounter")


        }



        return getTextOfDom;
    } else {


        let newValueOfDomByPrompt = getTextOfDom.textContent = newValueOfTarget;
        isClassOn("playChronometer")
        isClassOn("playTimer")
        console.log(newValueOfDomByPrompt);
        // if (getTextOfDomValueInput.textContent === " "|| getTextOfDom.textContent === " ") {
        //     getTextOfDom.textContent = 0;        
        // }
        
        // let newValueOfText =parseInt(getTextOfDomValueInput.textContent);
        // let textOfDom = getTextOfDom.textContent = getTextOfDomValueInput.value;
        // console.log(typeof newValueOfText);
        // console.log( newValueOfText);
        
        
        // getTextOfDomValueInput.addEventListener("click", convertTextInInput)
        // mouseOverSeconds = getTextOfDomValueInput.value;
    
        let mouseOverSeconds = document.getElementById("spanText")
    
        mouseOverSeconds.addEventListener("click", convertTextInInput )
        
        let mouseOverMinutes = document.getElementById("spanText-minutes")
          
        mouseOverMinutes.addEventListener("click", convertTextInInput )
    
        let mouseOverOurs = document.getElementById("spanText-centecimal")
    
        mouseOverOurs.addEventListener("click", convertTextInInput )
    
        // let newValueOfText =getTextOfDom.textContent;
        // console.log(newValueOfText);
    }


    return getTextOfDom
}

// 



export { getElementByIdFunc, isClassOn, isClassof, diferenceBetweenTimes, visibilityOn, visibilityOff, showMeCounter, showMeTime, convertTextColor, convertTextInInput}




// else if (valueOfTextMinutes > 0 && númber1SplitOfLastChild > 0 )  {
//     let resultadoRestaDeTiemposMin = (valueOfTextMinutes -  valueOfTextMinutes) 
//     let resultadoRestaDeTiemposSec = (( 60 + valueOfTextSeconds   ) - númber1SplitOfLastChild2) 
//     console.log(resultadoRestaDeTiemposSec);


//     let spanText2 = d.createTextNode(` Time diference- ${resultadoRestaDeTiemposMin}  : ${resultadoRestaDeTiemposSec } ` )
//     let elementoVueltas2 = d.getElementById(id2)


//     elementoVueltas2.appendChild(li2)
//     li2.appendChild(span2)
//     span2.appendChild(spanText2)
//     console.log(resultadoRestaDeTiemposSec);
        

// }

// Esto si funciona pero lo pongo acá dee backup

// let convertTextInInput = (event) => {
//     let getTextOfDom = document.getElementById("spanText")
//     let textOfDom = getTextOfDom.textContent = ""

//     let createInputElement = document.createElement("input")
//     createInputElement.setAttribute("type", "text")
//     createInputElement.setAttribute("id", "seconds-Id")
//     // Node.removeChild(getTextOfDom)
//     createInputElement.setAttribute("class", "span-cyt-input")
//     getTextOfDom.appendChild(createInputElement)
//     console.log(createInputElement);
//     getTextOfDom.removeEventListener("click", convertTextInInput, false )
//     // getTextOfDom.removeEventListener("click", convertTextInInput, true )
//     getTextOfDom.addEventListener("change", createNewTextAfterInput)
//     let newValueOfText =getTextOfDom.textContent;
//     console.log(newValueOfText);

// }

// let createNewTextAfterInput = (e) =>{
//     let getTextOfDomValueInput = document.getElementById("seconds-Id")
//     let getTextOfDom = document.getElementById("spanText")
//     getTextOfDom.textContent = e.target.value;
//     let newValueOfText =getTextOfDomValueInput.textContent;
//     console.log(newValueOfText);
//     getTextOfDom.addEventListener("click", convertTextInInput)

// }

// let getTextOfDomValueInput; 
// switch(getTextOfDomValueInput) {
//     case 'spanText':
//         document.getElementById("seconds-Id")
//       break;
//     case 'spanText-minutes':
//         document.getElementById("minutes-Id")
//       break;
//     case 'spanText-hours':
//         document.getElementById("hours-Id")
//       break;
//   }

// eL BACKUP
// let convertTextInInput = (e) => {
//     let getTextOfDom = document.getElementById(e.target.id)
//     let textOfDom = getTextOfDom.textContent = 0

//     // textOfDom.setAttribute("class", "off")
//     console.log(e.target.id);

//     let createInputElement = document.createElement("input")
//     createInputElement.setAttribute("type", "number")
//     createInputElement.setAttribute("id", "seconds-Id")
//     switch(getTextOfDom) {
//         case 'spanText':
//             createInputElement.setAttribute("id", "seconds-Id")
//           break;
//         case 'spanText-minutes':
//             createInputElement.setAttribute("id", "minutes-Id")
//           break;
//         case 'spanText-hours':
//             createInputElement.setAttribute("id", "hours-Id")
//           break;
//       }
//     createInputElement.value= 0;
//     console.log(createInputElement.value);
//     // if (createInputElement.value= 0) {
//     //     textOfDom = getTextOfDom.textContent = 0
//     // }
    
//     // Node.removeChild(getTextOfDom)
//     createInputElement.setAttribute("class", "span-cyt-input")
//     getTextOfDom.appendChild(createInputElement)
//     console.log( getTextOfDom);
//     getTextOfDom.removeEventListener("click", convertTextInInput, false )
//     // getTextOfDom.removeEventListener("click", convertTextInInput, true )
//     getTextOfDom.addEventListener("change", createNewTextAfterInput)
    
//     let newValueOfText =getTextOfDom.textContent;
//     console.log(newValueOfText);

// }

// let createNewTextAfterInput = (e) =>{
    
//     let getTextOfDomValueInput = document.getElementById(e.target.id)
    
//     let getTextOfDom = document.getElementById(e.target.id)
    
//     // getTextOfDom.textContent = e.target.value;
//     // if (getTextOfDomValueInput.textContent === " "|| getTextOfDom.textContent === " ") {
//     //     getTextOfDom.textContent = 0;        
//     // }
    
//     let newValueOfText =parseInt(getTextOfDomValueInput.textContent);
//     let textOfDom = getTextOfDom.textContent = getTextOfDomValueInput.value;
//     console.log(typeof newValueOfText);
//     console.log( newValueOfText);
    
    
//     // getTextOfDomValueInput.addEventListener("click", convertTextInInput)
//     let mouseOverSeconds = document.getElementById("spanText")
//     // mouseOverSeconds = getTextOfDomValueInput.value;
//     mouseOverSeconds.addEventListener("click", convertTextInInput )

//     let mouseOverMinutes = document.getElementById("spanText-minutes")
    
//     mouseOverMinutes.addEventListener("click", convertTextInInput )

//     let mouseOverOurs = document.getElementById("spanText-hours")

//     mouseOverOurs.addEventListener("click", convertTextInInput )

// }