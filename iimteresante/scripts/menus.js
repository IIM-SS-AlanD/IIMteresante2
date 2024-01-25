const menuHeaderGenerator = `
    <nav class="navigation-desktop">
        <div class="logo iimL">
            <a href="https://www.vinculacion.iim.unam.mx/iimteresante"><img src="/assets/images/IIMTERESANTE Logo - horizontal en blanco.png" alt="Logo iimteresante"></a>
        </div>
        <div class="logo unamL">
            <a href="https://www.unam.mx/"><img src="/assets/images/unam_logo_blanco-02.svg" alt="Logo UNAM"></a>
        </div>
        <div class="menu-item">
            <a  id="index" href="/index.html">INICIO</a>
        </div>
        <div class="menu-item">
            <li  class="boton_desplegador">
                <a href="/pages/seccion.html" class="arrow" id="seccion">SECCIONES ▼</a>
                <ul class="submenu">
                    <a id="Pitch" class="submenulink" href="/pages/pitch-cientifico.html">Ciencia en Corto</a>
                    <a id="Podcast" class="submenulink" href="/pages/Podcasts.html">Podcasts</a>
                    <a id="Infografia" class="submenulink" href="/pages/infografias.html">Infografías</a>
                    <a id="Efemerides" class="submenulink" href="/pages/efemerides.html">Efemerides Cientificas</a>
                    <a id="Efemerides" class="submenulink" href="/pages/efemerides.html">Hablemos de</a>
                </ul>   
            </li>
        </div>
        <div class="menu-item">
            <a id="BLOG" href="/pages/blog.html">BLOG</a>
        </div>
        <div class="menu-item">
            <a id="Red" href="/pages/red-cientifica.html">RED CIENTIFICA</a>
        </div>
        
        
        <div class="menu-item">
            <a id="GAL" href="/pages/galeria.html">GALERIA</a>
        </div>
        <div class="menu-item">
            <a id="Eventos" href="/pages/eventos.html">EVENTOS</a>
        </div>
        <div class="menu-item">
            <a id="contact" href="/pages/contacto.html">CONTACTO</a>
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
                <a href="/pages/recursos.html">RECURSOS</a>
            </div>
            <div class="menu-item">
                <a href="/pages/blog.html">BLOG</a>
            </div>
            <div class="menu-item">
                <a href="/pages/red-cientifica.html">RED CIENTIFICA</a>
            </div>
            <div class="menu-item">
                <a href="/pages/contacto.html">CONTACTO</a>
            </div>
            <div class="menu-item">
                <a href="/pages/proximamente.html">PROXIMAMENTE</a>
            </div>
            <div class="menu-item">
                <a href="/pages/galeria.html">GALERIA</a>
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
