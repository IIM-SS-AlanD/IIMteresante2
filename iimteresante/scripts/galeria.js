

// document.addEventListener("DOMContentLoaded", function () {
//     var small_image = document.querySelectorAll('.small-image');
//     const add = `<button class="antes1">&#8249;</button>
//     <button class="despues1">&#8250;</button>`;
//     small_image.forEach(function (image) {
//         image.addEventListener('click', function () {
//             this.innerHTML = add;
//             this.classList.toggle('expandida');
//             this.parentNode.classList.toggle("parent");

//         });
//     });

// });

// Seleccionar todas las imágenes pequeñas
const smallImages = document.querySelectorAll('.small-image');
const expandedView = document.querySelector('.parent');
const expandedImage = document.querySelector('.expandida img');

let currentImageIndex = 0;

// Función para expandir la imagen
// Función para expandir la imagen
function expandirImagen(index) {
    expandedView.style.display = 'flex';
    expandedImage.src = smallImages[index].src;
    currentImageIndex = index;

    // Agregar eventos de clic a los botones de navegación
    document.querySelector('.antes1').addEventListener('click', mostrarAnterior);
    document.querySelector('.despues1').addEventListener('click', mostrarSiguiente);
}


// Función para cerrar la vista expandida
function cerrarExpandida() {
    expandedView.style.display = 'none';
}

// Función para mostrar la imagen anterior
function mostrarAnterior() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        expandedImage.src = smallImages[currentImageIndex].src;
    }
}

// Función para mostrar la siguiente imagen
function mostrarSiguiente() {
    if (currentImageIndex < smallImages.length - 1) {
        currentImageIndex++;
        expandedImage.src = smallImages[currentImageIndex].src;
    }
}

// Asignar eventos a los botones de navegación
document.querySelector('.antes1').addEventListener('click', mostrarAnterior);
document.querySelector('.despues1').addEventListener('click', mostrarSiguiente);
