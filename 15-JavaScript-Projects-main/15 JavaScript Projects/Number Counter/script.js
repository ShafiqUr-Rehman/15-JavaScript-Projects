let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let output = document.querySelector("h1")

btn1.addEventListener("click", () => {
    let currentValue = parseInt(output.innerHTML)
    output.innerHTML = currentValue - 1;
    updateColor();
})

btn2.addEventListener("click", () => {
    output.innerHTML = 0;
    updateColor();
})

btn3.addEventListener("click", () => {
    let currentValue = parseInt(output.innerHTML)
    output.innerHTML = currentValue + 1;
    updateColor();
})

function updateColor(){
    let currentValue = parseInt(output.innerHTML)
    
    if(currentValue < 0)
    {
        output.style.color = "red"
    }
    else if(currentValue => 0)
    {
        output.style.color = "black"
    }
}