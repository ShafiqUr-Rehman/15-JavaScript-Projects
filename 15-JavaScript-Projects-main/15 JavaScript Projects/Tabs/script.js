let buttons = document.querySelectorAll(".btn");
let contents = document.querySelectorAll(".content");

buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {

        buttons.forEach((button) => {
            button.classList.remove("active");
        });

        contents.forEach((content) => {
            content.classList.remove("active");
        });

        btn.classList.add("active");
        contents[index].classList.add("active");
    });
});
