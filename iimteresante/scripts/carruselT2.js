document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel_t2');
    const dotsContainer = document.querySelector('.carousel-dots_t2');
    const jsonPath = carousel.getAttribute('data-json-path');
    let currentIndex = 0;

    // Reemplaza 'contenidos.json' con la ruta de tu archivo JSON
    fetch(jsonPath)
        .then(response => response.json())
        .then(data => {
            data.forEach(contenido => {
                const carouselItem = document.createElement('div');
                carouselItem.classList.add('carousel-item');
                const imagen = document.createElement('img');
                imagen.src = contenido.imagePath;
                const enlace = document.createElement('a');
                enlace.href = contenido.url;
                enlace.appendChild(imagen);
                carouselItem.appendChild(enlace);
                carousel.appendChild(carouselItem);

                // Crea un punto (dot) correspondiente a cada elemento del carrusel
                const dot = document.createElement('div');
                dot.classList.add('dot');
                dot.addEventListener('click', () => {
                    currentIndex = data.indexOf(contenido);
                    updateCarousel();
                });
                dotsContainer.appendChild(dot);
            });

            updateCarousel();
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Actualiza la clase "active" en los puntos de navegación
        const dots = Array.from(dotsContainer.querySelectorAll('.dot'));
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
});