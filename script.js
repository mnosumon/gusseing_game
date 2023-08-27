let box_1 = document.querySelector(".box_1")
let box_2 = document.querySelector(".box_2")
let box_3 = document.querySelector(".box_3")
let box_4 = document.querySelector(".box_4")

let input_1 = document.querySelector(".input_1")
let input_2 = document.querySelector(".input_2")
let input_3 = document.querySelector(".input_3")
let input_4 = document.querySelector(".input_4")

let error_1 = document.querySelector(".error_1")
let error_2 = document.querySelector(".error_2")
let error_3 = document.querySelector(".error_3")
let error_4 = document.querySelector(".error_4")

let btn_1 = document.querySelector(".btn_1")
let btn_2 = document.querySelector(".btn_2")
let btn_3 = document.querySelector(".btn_3")
let btn_4 = document.querySelector(".btn_4")

let head_1 = document.querySelector(".head_1")
let head_2 = document.querySelector(".head_2")

let result = document.querySelector(".result")

let chance = 3
let chance_left = document.querySelector(".chance_left")

btn_1.addEventListener("click", function(){
    if (input_1.value == "") {
        error_1.innerHTML = "! Nothing to type"
    }else{
        error_1.innerHTML = ""
        box_1.style.display = "none"
        box_2.style.display = "block"
        head_1.innerHTML = input_1.value
    }
})

btn_2.addEventListener("click", function(){
    if (input_2.value > 0 && input_2.value <= 10) {
        box_2.style.display = "none"
        box_3.style.display = "block"
        error_2.innerHTML = ""
    }else{
        error_2.innerHTML = "! Enter a valid Number"
    }
})

btn_3.addEventListener("click", function(){
    if (input_3.value == "") {
        error_3.innerHTML = "! Type your valid name"
    }else{
        error_3.innerHTML = ""
        box_3.style.display = "none"
        box_4.style.display = "block"
        head_2.innerHTML = input_3.value
    }
})

btn_4.addEventListener("click", function(){
    if(input_2.value == input_4.value){
        result.innerHTML = `Player ${input_3.value} is Win`
        chance_left.style.display = "none"
    }else{
        let cha = chance --
        
        if (cha >= 1) {
            chance_left.innerHTML = `Chance left ${cha --}`
            
        }else{
            chance_left.innerHTML = `You have no chance`
            if (cha == 0) {
                result.innerHTML = `Player ${input_1.value} is Win And the correct number is ${input_2.value}`
            }
        }
        chance_left.style.display = "block"
    }
})