// Function get element

let getElementByIdFunc = (id) => {
    document.getElementById(id)
    return id
}

let traetUnElem = getElementByIdFunc("spanText-hours")




// Función para saber si tiene clase on o no la tiene
let isClassOn = ( id ) => {
    let turnOnButton = document.getElementById(id)
       
        turnOnButton.classList.contains("on") ? console.log("siga, siga") :
        turnOnButton.classList.add("on");
        turnOnButton.classList.contains("off")? turnOnButton.classList.remove("off"):
        console.log("esta todo bien");
    
}

let isClassof = ( id ) => {
    let turnOffButton = document.getElementById(id)
        
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
    

            
            let textSeconds= document.getElementById("spanText")
            let valueOfTextSeconds = parseInt(textSeconds.textContent)
         
            let textMinutes= document.getElementById("spanText-minutes")
            let valueOfTextMinutes = parseInt(textMinutes.textContent)
            

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
        //    console.log(olQuerySelector.lastElementChild);
           
           let lastChildOlSel = olQuerySelector.lastElementChild;

            let lastPreviousChild = lastChildOlSel.previousElementSibling;

            // console.log(lastPreviousChild);

           
            


           if ( lastPreviousChild === null) {

                    let olQuerySelector = d.getElementById(id1)
                    // console.log(olQuerySelector.lastElementChild);
                
                    let lastChildOlSel = olQuerySelector.lastElementChild;

                    let lastPreviousChild = lastChildOlSel.previousElementSibling;

                    // console.log(lastPreviousChild);

                    let lastChildOfOl = lastChildOlSel.querySelector(".li-span-class")
                    // console.log(lastChildOfOl.textContent)

                    let split1OfLastChild = lastChildOfOl.textContent;

                    let objectSplitLastChild = split1OfLastChild.split(":")

                    let númber1SplitOfLastChild = objectSplitLastChild[0]
                    // console.log(númber1SplitOfLastChild);
// 
                    let númber1SplitOfLastChild2 = objectSplitLastChild[1]
                    // console.log(númber1SplitOfLastChild2);
                

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
                    li2.setAttribute("id", "valueofvuelt")
                    let input = d.createElement("input")
                    input.setAttribute("class", "input off")
                    li2.appendChild(input)
                    // li2.addEventListener("click", console.log("Llegamos al input gua8"))

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
                    // console.log(olQuerySelector.lastElementChild);
                
                    let lastChildOlSel = olQuerySelector.lastElementChild;

                    let lastPreviousChild = lastChildOlSel.previousElementSibling;

                    // console.log(lastPreviousChild);

                    // let lastChildOfOl = lastChildOlSel.querySelector(".li-span-class")
                    // console.log(lastPreviousChild.textContent)

                    let split1OfLastChild = lastPreviousChild.textContent;

                    let objectSplitLastChild = split1OfLastChild.split(":")

                    let númber1SplitOfLastChild = parseInt(objectSplitLastChild[0])
                    // console.log(númber1SplitOfLastChild);

                    let númber1SplitOfLastChild2 = parseInt(objectSplitLastChild[1])
                    // console.log(númber1SplitOfLastChild2);

                    let númber1SplitOfLastChild3 = parseInt(objectSplitLastChild[2])
                    // console.log(númber1SplitOfLastChild3);

                    

                    
                

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
                      
                        let resultadoAMinutos = minutosAStrinig.split(".", 1)
                        let segundosAString = String(resultadoDeTiempoEnSegundos % 60)
                        let resultadosSegundos = segundosAString.split(".", 1)
                        let resultadoRestaDeTiemposCent = valueOfCentecimal > númber1SplitOfLastChild3? (valueOfCentecimal - númber1SplitOfLastChild3):     (númber1SplitOfLastChild3 - valueOfCentecimal);
                        

                        let spanText2 = d.createTextNode(` Time diference- ${resultadoAMinutos}  : ${resultadosSegundos } : ${resultadoRestaDeTiemposCent}` )
                        let elementoVueltas2 = d.getElementById(id2)
    
    
                        elementoVueltas2.appendChild(li2)
                        li2.appendChild(span2)
                        span2.appendChild(spanText2)
                       
                        let input = d.createElement("input")
                        input.setAttribute("class", "input off")
                        li2.appendChild(input)
                        
                        
                        let log = () => {
                            console.log("llegaste al input");
                            input.setAttribute("class", "input on")
                        }
                        
                        li2.addEventListener("click", log)
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
    isClassof("countChronometer")
    isClassof("vueltasMarcadas")
    isClassof("stopChronometer")
    isClassof("countChronometer")

    
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
    isClassOn("vueltasMarcadas")
    isClassOn("countChronometer")
    


    visibilityOn("playTimer")
    visibilityOn("playChronometer")

    visibilityOff("decreaseButton1")
    visibilityOff("resetButton1")
    visibilityOff("increaseButton1")
    visibilityOn("decreaseButton")
    visibilityOn("resetButton")
    visibilityOn("increaseButton")

    let mouseOverSeconds = document.getElementById("spanText")
    let valueOfSeconds = mouseOverSeconds.textContent
    

    let mouseOverMinutes = document.getElementById("spanText-minutes")
    let valueOfMinutes = mouseOverMinutes.textContent
    

    let mouseOverOurs = document.getElementById("spanText-centecimal")
    let valueOfOurs = mouseOverOurs.textContent
    if (valueOfOurs !== 0 || valueOfMinutes !== 0 ||  valueOfSeconds !== 0) {
        visibilityOn("playTimer")
        visibilityOn("playChronometer")
        isClassOn("playChronometer")
        isClassOn("playTimer")
    }
}

let convertTextColor = (event) => {

    event.target.style.color = "#424242";

    setTimeout(function() {
    event.target.style.color = "";
    }, 500);
}


let convertTextInInput = (e) => {
    let getTextOfDom = document.getElementById(e.target.id)
    // Number.isNaN(getTextOfDom) ? getTextOfDom.textContent = 0:console.log("acá no hay nan");

    // let textOfDom = getTextOfDom.textContent = e.target.value
    let textOfDom = getTextOfDom.textContent = "";

    let getSpamWithValueOfDom = getTextOfDom.lastChild
    // console.log(getSpamWithValueOfDom);
    // getSpamWithValueOfDom.setAttribute("class", "off")
    // textOfDom.setAttribute("class", "off")
    // console.log(e.target.id);

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
    // console.log(createInputElement.value);
 
    createInputElement.setAttribute("class", "span-cyt-input")
    getTextOfDom.appendChild(createInputElement)
    // console.log( getTextOfDom);
    getTextOfDom.removeEventListener("click", convertTextInInput, false )
    getTextOfDom.addEventListener("change", createNewTextAfterInput)
    createInputElement.focus()

    // getTextOfDom.addEventListener("focusin", blurEvent )
    createInputElement.addEventListener("focusout", blurEvent )
    // getTextOfDom.addEventListener("focusout", blurEvent )
    

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

      let mouseOverSeconds = document.getElementById("spanText")
        let valueOfSeconds = mouseOverSeconds.textContent
        
        
        let mouseOverMinutes = document.getElementById("spanText-minutes")
        let valueOfMinutes = mouseOverMinutes.textContent
        

        let mouseOverOurs = document.getElementById("spanText-centecimal")
        let valueOfOurs = mouseOverOurs.textContent
        if ( valueOfSeconds === "0" && valueOfMinutes === "0" && valueOfOurs === "0") {
            isClassof("playChronometer")
            isClassof("playTimer") 
            // visibilityOn("playTimer")
            visibilityOn("playChronometer")
            isClassof("countChronometer")
            // visibilityOff("spanRegularCounter")
  
  
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

        if ( valueOfSeconds === "0" && valueOfMinutes === "0" && valueOfOurs === "0") {
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

let blurEvent = (e) =>{
    console.log("llegamos al evento blur");
    let getTextOfDomValueInput = document.getElementById(e.target.id)
    // console.log(getTextOfDomValueInput.id);
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

      let mouseOverSeconds = document.getElementById("spanText")
      let valueOfSeconds = mouseOverSeconds.textContent
      console.log(valueOfSeconds);
      
      let mouseOverMinutes = document.getElementById("spanText-minutes")
      let valueOfMinutes = mouseOverMinutes.textContent
      

      let mouseOverOurs = document.getElementById("spanText-centecimal")
      let valueOfOurs = mouseOverOurs.textContent
      

      if ( valueOfSeconds === "0" && valueOfMinutes === "0" && valueOfOurs === "0") {
          isClassof("playChronometer")
          isClassof("playTimer") 
          // visibilityOn("playTimer")
          visibilityOn("playChronometer")
          isClassof("countChronometer")
          // visibilityOff("spanRegularCounter")


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

        if ( valueOfSeconds === "0" && valueOfMinutes === "0" && valueOfOurs === "0") {
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

    
        let mouseOverSeconds = document.getElementById("spanText")
    
        mouseOverSeconds.addEventListener("click", convertTextInInput )
        
        let mouseOverMinutes = document.getElementById("spanText-minutes")
          
        mouseOverMinutes.addEventListener("click", convertTextInInput )
    
        let mouseOverOurs = document.getElementById("spanText-centecimal")
    
        mouseOverOurs.addEventListener("click", convertTextInInput )

      
        let valueOfSeconds = mouseOverSeconds.textContent
        let valueOfMinutes = mouseOverMinutes.textContent
        let valueOfOurs = mouseOverOurs.textContent
        console.log(valueOfOurs);
        console.log(valueOfSeconds);
        console.log(valueOfMinutes);

    

        if ( valueOfSeconds == 0 && valueOfMinutes == 0 && valueOfOurs == 0) {
            isClassof("playChronometer")
            isClassof("playTimer") 
            // visibilityOn("playTimer")
            visibilityOn("playChronometer")
            isClassof("countChronometer")
            // visibilityOff("spanRegularCounter")
  
  
        }
    
        
    }


    return getTextOfDom
}



export { getElementByIdFunc, isClassOn, isClassof, diferenceBetweenTimes, visibilityOn, visibilityOff, 
    showMeCounter, showMeTime, convertTextColor, convertTextInInput, blurEvent}


