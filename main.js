let display = document.querySelector('.display')

function displaynum(value) {
    display.value += value
}

function clearnum (){
     display.value = ""
}

function calculate(){
    if(display.value == "")
        alert("expresion,emty")

    else{
        display.value = eval(display.value)
    }
}