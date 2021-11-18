
// let olQuerySelector = d.getElementById(id1)
//            console.log(olQuerySelector.lastElementChild);
           
//            let lastChildOlSel = olQuerySelector.lastElementChild;

//             let lastPreviousChild = lastChildOlSel.previousElementSibling;

//             console.log(lastPreviousChild);

//             let lastChildOfOl = lastChildOlSel.querySelector(".li-span-class")
//             console.log(lastChildOfOl.textContent)

//             let split1OfLastChild = lastChildOfOl.textContent;

//             let objectSplitLastChild = split1OfLastChild.split(":")

//             let númber1SplitOfLastChild = objectSplitLastChild[0]
//             console.log(númber1SplitOfLastChild);

//             let númber1SplitOfLastChild2 = objectSplitLastChild[1]
//             console.log(númber1SplitOfLastChild2);
           

//             let li2 = d.createElement("li")
//             li2.setAttribute("class", "li-class")
//             let span2 = d.createElement("span")
//             span2.setAttribute("class", "li-span-class")
            
//             let resultadoRestaDeTiemposMin = (valueOfTextMinutes -  númber1SplitOfLastChild) 
//             let resultadoRestaDeTiemposSec = (valueOfTextSeconds -  númber1SplitOfLastChild2) 


//             let spanText2 = d.createTextNode(` - ${resultadoRestaDeTiemposMin}  : ${resultadoRestaDeTiemposSec } ` )
//             let elementoVueltas2 = d.getElementById(id2)


//             elementoVueltas2.appendChild(li2)
//             li2.appendChild(span2)
//             span2.appendChild(spanText2)



// && númber1SplitOfLastChild !== númber1SplitOfLastLastChild

//                // Comienzo Last Last
//                let lastLastPreviousChild = lastPreviousChild.previousElementSibling;
//                console.log(lastLastPreviousChild);

//                let split1OfLastChild2 = lastLastPreviousChild.textContent;

//                let objectSplitLastLastChild = split1OfLastChild2.split(":")

//                let númber1SplitOfLastLastChild = parseInt(objectSplitLastLastChild[0])
//                console.log(númber1SplitOfLastChild);

//                let númber1SplitOfLastLastChild2 = parseInt(objectSplitLastLastChild[1])
//                console.log(númber1SplitOfLastChild2);


// if (valueOfTextMinutes > 0) {
                                           
//     if (valueOfTextMinutes > 0  && númber1SplitOfLastChild !== valueOfTextMinutes )  {

//       let resultadoRestaDeTiemposMin = númber1SplitOfLastChild > valueOfTextMinutes? (númber1SplitOfLastChild -  valueOfTextMinutes): ( valueOfTextMinutes -númber1SplitOfLastChild )

//       // console.log(Math.sign(resultadoRestaDeTiemposMin));


//       let resultadoRestaDeTiemposSec = (( 60 + valueOfTextSeconds   ) > númber1SplitOfLastChild2) ? (( 60 + valueOfTextSeconds   ) - númber1SplitOfLastChild2): ( númber1SplitOfLastChild2 -( 60 + valueOfTextSeconds   ) )
      
//       let resultadoRestaDeTiemposCent = (99 - valueOfCentecimal ) > númber1SplitOfLastChild3?  ((99 - valueOfCentecimal ) - númber1SplitOfLastChild3): ( númber1SplitOfLastChild3 - (99 - valueOfCentecimal ) )
//       console.log(resultadoRestaDeTiemposCent);



//       let spanText2 = d.createTextNode(` Time diference- ${resultadoRestaDeTiemposMin}  : ${resultadoRestaDeTiemposSec } : ${resultadoRestaDeTiemposCent}` )
//       let elementoVueltas2 = d.getElementById(id2)


//       elementoVueltas2.appendChild(li2)
//       li2.appendChild(span2)
//       span2.appendChild(spanText2)
//       console.log(resultadoRestaDeTiemposSec);
          
//       } else {

//           let resultadoRestaDeTiemposMin = valueOfTextMinutes >  númber1SplitOfLastChild ? (valueOfTextMinutes -  númber1SplitOfLastChild): (númber1SplitOfLastChild - valueOfTextMinutes ) ; 
//           let resultadoRestaDeTiemposSec = valueOfTextSeconds > númber1SplitOfLastChild2 ? (valueOfTextSeconds - númber1SplitOfLastChild2) :(númber1SplitOfLastChild2 - valueOfTextSeconds )  
//           let resultadoRestaDeTiemposCent = valueOfCentecimal  > númber1SplitOfLastChild3 ? (valueOfCentecimal  - númber1SplitOfLastChild3) : (númber1SplitOfLastChild3 - valueOfCentecimal )
//           console.log(resultadoRestaDeTiemposCent);
          
//           console.log(Math.sign(resultadoRestaDeTiemposMin));
//           let spanText2 = d.createTextNode(` Time diference- ${resultadoRestaDeTiemposMin}  : ${resultadoRestaDeTiemposSec } : ${resultadoRestaDeTiemposCent}` )
//           let elementoVueltas2 = d.getElementById(id2)

//           console.log(resultadoRestaDeTiemposSec);
//           elementoVueltas2.appendChild(li2)
//           li2.appendChild(span2)
//           span2.appendChild(spanText2)

//       }

      
  
      
//   } else{
//     let resultadoRestaDeTiemposMin = valueOfTextMinutes >  númber1SplitOfLastChild ? (valueOfTextMinutes -  númber1SplitOfLastChild): (númber1SplitOfLastChild - valueOfTextMinutes ) ; 
//     let resultadoRestaDeTiemposSec = valueOfTextSeconds > númber1SplitOfLastChild2 ? (valueOfTextSeconds - númber1SplitOfLastChild2) :(númber1SplitOfLastChild2 - valueOfTextSeconds )  
//     let resultadoRestaDeTiemposCent = valueOfCentecimal  > númber1SplitOfLastChild3 ? (valueOfCentecimal  - númber1SplitOfLastChild3) : (númber1SplitOfLastChild3 - valueOfCentecimal )
//       console.log(resultadoRestaDeTiemposCent);


//       console.log(Math.sign(resultadoRestaDeTiemposMin));
//       let spanText2 = d.createTextNode(` Time diference- ${resultadoRestaDeTiemposMin}  : ${resultadoRestaDeTiemposSec } : ${resultadoRestaDeTiemposCent}` )
//       let elementoVueltas2 = d.getElementById(id2)


//       elementoVueltas2.appendChild(li2)
//       li2.appendChild(span2)
//       span2.appendChild(spanText2)

//   }







//   if (valueOfTextMinutes > 0) {
                                           
//     if (valueOfTextMinutes > 0  && númber1SplitOfLastChild !== valueOfTextMinutes )  {
      
//       let resultadoRestaDeTiemposMin = (valueOfTextMinutes -  valueOfTextMinutes) 
//       let resultadoRestaDeTiemposSec = (( 60 + valueOfTextSeconds   ) - númber1SplitOfLastChild2) 

//       if (resultadoRestaDeTiemposSec > 59 ) {
//           resultadoRestaDeTiemposSec = resultadoRestaDeTiemposSec - 60;
//           resultadoRestaDeTiemposMin = resultadoRestaDeTiemposMin + 1;
          
//       }
      
//       let resultadoRestaDeTiemposCent = ((99 - valueOfCentecimal ) - númber1SplitOfLastChild3)
//       console.log(resultadoRestaDeTiemposCent);


//       let spanText2 = d.createTextNode(` Time diference- ${resultadoRestaDeTiemposMin}  : ${resultadoRestaDeTiemposSec } : ${resultadoRestaDeTiemposCent}` )
//       let elementoVueltas2 = d.getElementById(id2)


//       elementoVueltas2.appendChild(li2)
//       li2.appendChild(span2)
//       span2.appendChild(spanText2)
//       console.log(resultadoRestaDeTiemposSec);
          
//       } else {

//           let resultadoRestaDeTiemposMin = (valueOfTextMinutes -  númber1SplitOfLastChild) 
//           let resultadoRestaDeTiemposSec = (  valueOfTextSeconds - númber1SplitOfLastChild2) 
//           let resultadoRestaDeTiemposCent = ( valueOfCentecimal  - númber1SplitOfLastChild3)
//           console.log(resultadoRestaDeTiemposCent);

//           let spanText2 = d.createTextNode(` Time diference- ${resultadoRestaDeTiemposMin}  : ${resultadoRestaDeTiemposSec } : ${resultadoRestaDeTiemposCent}` )
//           let elementoVueltas2 = d.getElementById(id2)

//           console.log(resultadoRestaDeTiemposSec);
//           elementoVueltas2.appendChild(li2)
//           li2.appendChild(span2)
//           span2.appendChild(spanText2)

//       }

      
  
      
//   } else{
//       let resultadoRestaDeTiemposMin = (valueOfTextMinutes -  númber1SplitOfLastChild) 
//       let resultadoRestaDeTiemposSec = ( númber1SplitOfLastChild2 - valueOfTextSeconds) 
//       let resultadoRestaDeTiemposCent = (valueOfCentecimal  - númber1SplitOfLastChild3)
//       console.log(resultadoRestaDeTiemposCent);

//       let spanText2 = d.createTextNode(` Time diference- ${resultadoRestaDeTiemposMin}  : ${resultadoRestaDeTiemposSec } : ${resultadoRestaDeTiemposCent}` )
//       let elementoVueltas2 = d.getElementById(id2)


//       elementoVueltas2.appendChild(li2)
//       li2.appendChild(span2)
//       span2.appendChild(spanText2)

//   }
  
 

// }
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
                    
                   
