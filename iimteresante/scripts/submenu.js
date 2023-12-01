// Obtén elementos del DOM
const submenuToggle = document.querySelector(".submenu-toggle");
const submenuMobile = document.querySelector(".submenu-mobile");
const subcloseMenu = document.querySelector(".subclose-menu");
const submenuOverlay = document.querySelector(".submenu-overlay");

// Abre el menú lateral al hacer clic en el botón de menú
submenuToggle.addEventListener("click", () => {
    submenuMobile.classList.add("right");
    submenuOverlay.classList.add("left");
});

// Cierra el menú lateral y el overlay al hacer clic en el botón de cierre
subcloseMenu.addEventListener("click", () => {
    submenuMobile.classList.remove("right");
    submenuOverlay.classList.remove("left");
});