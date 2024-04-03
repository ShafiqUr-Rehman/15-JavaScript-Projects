let openPopUp = document.querySelector(".btn");
let popup = document.querySelector(".popUp");
let closePopUp = document.querySelector(".sm-btn");

openPopUp.addEventListener("click", () => {
    popup.classList.add("active");
});

closePopUp.addEventListener("click", () => {
    popup.classList.remove("active");
});
