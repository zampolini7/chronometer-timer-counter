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

           let li = d.createElement("li")
           li.setAttribute("class", "li-class")
           let span = d.createElement("span")
           span.setAttribute("class", "li-span-class")
           
           

           let spanText = d.createTextNode(` ${valueOfTextMinutes} : ${ valueOfTextSeconds} ` )
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

                    
                

                    let li2 = d.createElement("li")
                    li2.setAttribute("class", "li-class")
                    let span2 = d.createElement("span")
                    span2.setAttribute("class", "li-span-class")

                    if (valueOfTextMinutes > 0) {
                                           
                      if (valueOfTextMinutes > 0  && númber1SplitOfLastChild !== valueOfTextMinutes )  {
                        let resultadoRestaDeTiemposMin = (valueOfTextMinutes -  valueOfTextMinutes) 
                        let resultadoRestaDeTiemposSec = (( 60 + valueOfTextSeconds   ) - númber1SplitOfLastChild2) 
                        console.log(resultadoRestaDeTiemposSec);
    
    
                        let spanText2 = d.createTextNode(` Time diference- ${resultadoRestaDeTiemposMin}  : ${resultadoRestaDeTiemposSec } ` )
                        let elementoVueltas2 = d.getElementById(id2)
    
    
                        elementoVueltas2.appendChild(li2)
                        li2.appendChild(span2)
                        span2.appendChild(spanText2)
                        console.log(resultadoRestaDeTiemposSec);
                            
                        } else {

                            let resultadoRestaDeTiemposMin = (valueOfTextMinutes -  númber1SplitOfLastChild) 
                            let resultadoRestaDeTiemposSec = (  valueOfTextSeconds - númber1SplitOfLastChild2) 
        
        
                            let spanText2 = d.createTextNode(` Time diference- ${resultadoRestaDeTiemposMin}  : ${resultadoRestaDeTiemposSec } ` )
                            let elementoVueltas2 = d.getElementById(id2)
        
                            console.log(resultadoRestaDeTiemposSec);
                            elementoVueltas2.appendChild(li2)
                            li2.appendChild(span2)
                            span2.appendChild(spanText2)

                        }

                        
                    
                        
                    } else{
                        let resultadoRestaDeTiemposMin = (valueOfTextMinutes -  númber1SplitOfLastChild) 
                        let resultadoRestaDeTiemposSec = ( númber1SplitOfLastChild2 - valueOfTextSeconds) 
    
    
                        let spanText2 = d.createTextNode(` Time diference- ${resultadoRestaDeTiemposMin}  : ${resultadoRestaDeTiemposSec } ` )
                        let elementoVueltas2 = d.getElementById(id2)
    
    
                        elementoVueltas2.appendChild(li2)
                        li2.appendChild(span2)
                        span2.appendChild(spanText2)

                    }
                    
                   

           }

           

}







export { getElementByIdFunc, isClassOn, isClassof, diferenceBetweenTimes, visibilityOn, visibilityOff }




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