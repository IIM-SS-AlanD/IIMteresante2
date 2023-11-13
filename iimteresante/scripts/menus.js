const menuHeaderGenerator = `
    <nav class="navigation-desktop">
        <div class="logo iimL">
            <a href="https://www.vinculacion.iim.unam.mx/iimteresante"><img src="/assets/images/IIMTERESANTE Logo - horizontal.png" alt="Logo iimteresante"></a>
        </div>
        <div class="logo unamL">
            <a href="https://www.unam.mx/"><img src="/assets/images/Escudo-UNAM-escalable.svg" alt="Logo UNAM"></a>
        </div>
        <div class="menu-item">
            <a href="/index.html">Inicio</a>
        </div>
        <div class="menu-item">
            <a href="/pages/servicios.html">Recursos</a>
        </div>
        <div class="menu-item">
            <a href="/pages/investigacion.html">Blog</a>
        </div>
        <div class="menu-item">
            <a href="/pages/patentes.html">Red Cientifica</a>
        </div>
        <div class="menu-item">
            <a href="/pages/convenios.html">Contacto</a>
        </div>
        <div class="menu-item">
            <a href="/pages/innovacion.html">Proximamente</a>
        </div>
        <div class="menu-item">
            <a href="/pages/normatividad.html">Galeria</a>
        </div>
        <div class="menu-toggle-container">
            <button class="menu-toggle">☰</button>
        </div>
    </nav>
`;

const menuMobileGenerator = `
    <aside class="menu-mobile">
        <div class="menu-overlay"></div>
        <nav class="navigation-mobile">
            <button class="close-menu">✕</button>
            <div class="menu-item">
                <a href="/index.html">INICIO</a>
            </div>
            <div class="menu-item">
                <a href="/pages/servicios.html">SERVICIOS</a>
            </div>
            <div class="menu-item">
                <a href="/pages/investigacion.html">INVESTIGACI&#211;N</a>
            </div>
            <div class="menu-item">
                <a href="/pages/patentes.html">PATENTES</a>
            </div>
            <div class="menu-item">
                <a href="/pages/convenios.html">CONVENIOS</a>
            </div>
            <div class="menu-item">
                <a href="/pages/innovacion.html">INNOVACI&#211;N</a>
            </div>
            <div class="menu-item">
                <a href="/pages/normatividad.html">NORMATIVIDAD</a>
            </div>
            <div class="menu-item">
                <a href="/pages/gestionCalidad.html">GESTI&#211;N DE LA CALIDAD</a>
            </div>
        </nav>
    </aside>
`;

document.addEventListener("DOMContentLoaded", () => {
  const headerElement = document.querySelector("header");
  headerElement.innerHTML = menuHeaderGenerator;
  headerElement.insertAdjacentHTML("afterend", menuMobileGenerator);
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
});
