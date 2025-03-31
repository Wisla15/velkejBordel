// // let zmacknuti = function(){
// //     alert("zmacknuto")
// }

    let isBlue = false
    let tlacitko2 = document.querySelector(".tlacitko2")
    tlacitko2.addEventListener("click",()=>{
        if(isBlue){
            tlacitko2.style.backgroundColor = "blue"
            isBlue = false
        }else{tlacitko2.style.backgroundColor = "red"
            isBlue = true
        }})