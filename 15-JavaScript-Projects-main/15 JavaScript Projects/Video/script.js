document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('myVideo');
    var toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', function () {
        if (toggleButton.textContent === "PLAY") {
            video.play();
            toggleButton.textContent = "PAUSE";
            toggleButton.style.backgroundColor = "#273c75"
        } else {
            video.pause();
            toggleButton.textContent = "PLAY";
            toggleButton.style.backgroundColor = "#487eb0"
        }
    });
});
