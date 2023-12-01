document.addEventListener('DOMContentLoaded', function () {
    // Configuración de desplazamiento horizontal suave
    const cardCarousel = document.querySelector('.card-carousel');
    cardCarousel.scrollLeft = 0;

    // Manejo del desplazamiento horizontal suave
    cardCarousel.addEventListener('wheel', function (e) {
        e.preventDefault();
        cardCarousel.scrollLeft += e.deltaY;
    });
});