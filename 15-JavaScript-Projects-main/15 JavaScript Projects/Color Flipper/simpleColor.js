const colors = [
    "red", "green", "blue", "yellow", "purple", "orange", "pink", "brown", "cyan", "magenta",
    "lime", "teal", "indigo", "violet", "maroon", "navy", "olive", "coral", "turquoise", "salmon",
    "khaki", "plum", "gold", "sienna", "orchid", "slateblue", "peru", "darkgreen", "tomato", "steelblue"
];

const btn = document.querySelector(".btn")
const color = document.querySelector(".color")

btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}