// Obtén elementos del DOM
const menuToggle = document.querySelector(".menu-toggle");
const menuMobile = document.querySelector(".menu-mobile");
const closeMenu = document.querySelector(".close-menu");
const menuOverlay = document.querySelector(".menu-overlay");

// Abre el menú lateral al hacer clic en el botón de menú
menuToggle.addEventListener("click", () => {
    menuMobile.classList.add("right");
    menuOverlay.classList.add("left");
});

// Cierra el menú lateral y el overlay al hacer clic en el botón de cierre
closeMenu.addEventListener("click", () => {
    menuMobile.classList.remove("right");
    menuOverlay.classList.remove("left");
});