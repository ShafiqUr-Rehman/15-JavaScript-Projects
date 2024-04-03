const colors = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    let colorcode = "#";

    for (let i = 0; i < 6; i++) {
        let randomNumber = getRandomNumber();
        colorcode = colorcode + colors[randomNumber];
    }

    document.body.style.backgroundColor = colorcode
    color.innerHTML = colorcode
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}