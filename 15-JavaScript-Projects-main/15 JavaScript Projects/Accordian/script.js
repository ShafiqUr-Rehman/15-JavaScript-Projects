let questions = document.querySelectorAll(".question-title");
let answers = document.querySelectorAll(".question-text");

questions.forEach((question, index) => {
    question.addEventListener("click", () => {
        // Toggle the hide/show class on the corresponding answer
        answers[index].classList.toggle("question-text-hide");

        // Toggle the plus/minus icon
        const icon = question.querySelector("i");
        icon.classList.toggle("fa-square-plus");
        icon.classList.toggle("fa-square-minus");

        // Close other answers when opening one
        for (let i = 0; i < answers.length; i++) {
            if (i !== index && !answers[i].classList.contains("question-text-hide")) {
                answers[i].classList.add("question-text-hide");

                // Reset the icons for other questions
                const otherIcon = questions[i].querySelector("i");
                otherIcon.classList.remove("fa-square-minus");
                otherIcon.classList.add("fa-square-plus");
            }
        }
    });
});
