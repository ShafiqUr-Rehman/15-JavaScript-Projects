let sidebar = document.querySelector(".sidebar");
let sidebarToggle = document.querySelector(".sidebar-icon i");

sidebarToggle.addEventListener("click", () => {
    if (sidebar.style.transform === "translateX(-270px)") {
        sidebar.style.transform = "translateX(0)";
        sidebarToggle.classList.add("bx-x")
        sidebarToggle.classList.remove("bx-menu")
    } else {
        sidebar.style.transform = "translateX(-270px)";
        sidebarToggle.classList.add("bx-menu")
        sidebarToggle.classList.remove("bx-x")
    }
});
