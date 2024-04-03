document.addEventListener("DOMContentLoaded", function () {
    // Set the launch date and time
    const launchDate = new Date("2024-02-29T00:00:00Z").getTime();

    // Update the countdown every second
    const interval = setInterval(function () {
        const now = new Date().getTime();
        const timeDifference = launchDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Update the HTML elements with the countdown values
        document.querySelector(".lauch-time div:nth-child(1) p").textContent = formatTime(days);
        document.querySelector(".lauch-time div:nth-child(2) p").textContent = formatTime(hours);
        document.querySelector(".lauch-time div:nth-child(3) p").textContent = formatTime(minutes);
        document.querySelector(".lauch-time div:nth-child(4) p").textContent = formatTime(seconds);

        // If the countdown reaches zero, display a message and clear the interval
        if (timeDifference < 0) {
            clearInterval(interval);
            document.querySelector(".lauch-time").innerHTML = "<h1>Website is now live!</h1>";
        }
    }, 1000);

    // Function to format time values (add leading zeros)
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
});
