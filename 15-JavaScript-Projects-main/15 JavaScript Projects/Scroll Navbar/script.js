let menuIcon = document.querySelector(".menu-icon i");
let navLinks = document.querySelector("#navLinks");
let nav = document.querySelector("nav");
let scrollToTop = document.querySelector(".fa-angle-up")

navLinks.style.maxHeight = 0;

menuIcon.addEventListener("click", () => {
    if (navLinks.style.maxHeight === "0px") {
        navLinks.style.maxHeight = "350px";
        menuIcon.classList.add("bx-x");
        menuIcon.classList.remove("bx-menu-alt-right");
    } else {
        navLinks.style.maxHeight = "0";
        menuIcon.classList.add("bx-menu-alt-right");
        menuIcon.classList.remove("bx-x");
    }
});

window.addEventListener("scroll", () => {
    // console.log(window.scrollY);
    if (window.scrollY > 200) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky")
    }
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollToTop.style.display = "block"
    }
    else {
        scrollToTop.style.display = "none"
    }
})

scrollToTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
})
