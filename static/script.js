const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
    });
});
