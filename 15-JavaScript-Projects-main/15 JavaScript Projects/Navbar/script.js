let menuIcon = document.querySelector(".menu-icon i")
let navLinks = document.querySelector("#navLinks")

navLinks.style.maxHeight = 0

menuIcon.addEventListener("click", () => {
    if (navLinks.style.maxHeight === "0px") {
        navLinks.style.maxHeight = "350px";
        menuIcon.classList.add("bx-x");
        menuIcon.classList.remove("bx-menu-alt-right");
    }
    else {
        navLinks.style.maxHeight = "0";
        menuIcon.classList.add("bx-menu-alt-right");
        menuIcon.classList.remove("bx-x");
    }
})