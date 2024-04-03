let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let slides = document.querySelectorAll(".slide");

let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.transform = "translateX(0)";
        } else {
            slide.style.transform = "translateX(-100%)";
        }
    });

    // Hide or show buttons based on the current index
    prevBtn.style.display = currentIndex === 0 ? "none" : "block";
    nextBtn.style.display = currentIndex === slides.length - 1 ? "none" : "block";
}

prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

// Initially hide the "Previous" button
prevBtn.style.display = "none";

showSlide(currentIndex);
