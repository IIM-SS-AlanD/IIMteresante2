document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const dotsContainer = document.querySelector(".carousel-dots");

  const jsonPath = carousel.getAttribute("data-json-path");

  // Reemplaza 'contenidos.json' con la ruta de tu archivo JSON
  fetch(jsonPath)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((contenido) => {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        const imagen = document.createElement("img");
        imagen.src = contenido.imagePath;
        const text = document.createElement("div");
        const enlace = document.createElement("a");
        enlace.href = contenido.url;
        enlace.appendChild(imagen);
        /*if(contenido.text.length > 0){
            text.innerText = contenido.text;
            text.classList.add("slide-text");
            enlace.classList.add(contenido.textPosition);
            enlace.appendChild(text);
        }*/
        carouselItem.appendChild(enlace);
        carousel.appendChild(carouselItem);
      });

      const carouselItems = document.querySelectorAll(".carousel .carousel-item");

      // Agrega puntos de navegación
      carouselItems.forEach(() => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dotsContainer.appendChild(dot);
      });

      // Maneja la navegación a través de los puntos
      dotsContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("dot")) {
          const dotIndex = Array.from(
            dotsContainer.querySelectorAll(".dot")
          ).indexOf(event.target);
          currentIndex = dotIndex;
          updateCarousel();
          restartAutoPlay();
        }
      });

      // Inicia el carrusel con auto-desplazamiento
      startAutoPlay();
    })
    .catch((error) => {
      console.error("Error al cargar el archivo JSON:", error);
    });

  let currentIndex = 0;

  function startAutoPlay() {
    const carouselItems = document.querySelectorAll(".carousel .carousel-item");
    autoPlayInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      updateCarousel();
    }, 6000); // Cambia la velocidad de desplazamiento aquí (en milisegundos)
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  function restartAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
  }

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Actualiza la clase "active" en los puntos de navegación
    const dots = Array.from(dotsContainer.querySelectorAll(".dot"));
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  // Maneja la navegación hacia la izquierda
  prevButton.addEventListener("click", function () {
    const carouselItems = document.querySelectorAll(".carousel .carousel-item");
    currentIndex =
      (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarousel();
    restartAutoPlay();
  });

  // Maneja la navegación hacia la derecha
  nextButton.addEventListener("click", function () {
    const carouselItems = document.querySelectorAll(".carousel .carousel-item");
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarousel();
    restartAutoPlay();
  });
});
