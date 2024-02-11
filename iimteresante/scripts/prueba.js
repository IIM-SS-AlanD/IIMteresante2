
document.addEventListener("DOMContentLoaded", function () {
    const add = `<button class="prev-button">&#8249;</button>
    <button class="next-button">&#8250;</button>`;

    const small_images = document.querySelectorAll('.small-image');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    small_images.forEach(function (image) {
        image.addEventListener('click', function () {
            const imageSrc = this.getAttribute('src');
            const folderPath = imageSrc.substring(0, imageSrc.lastIndexOf('/')); // Obtiene la carpeta de la imagen
            const imagesInFolder = Array.from(document.querySelectorAll(`.small-image[src^="${folderPath}"]`));

            overlay.innerHTML = ''; // Limpia el contenido del overlay

            imagesInFolder.forEach((img, index) => {
                const imgContainer = document.createElement('div');
                imgContainer.classList.add('image-container');
                imgContainer.style.display = 'none';

                const imgElement = document.createElement('img');
                imgElement.src = img.src;

                imgContainer.appendChild(imgElement);
                overlay.appendChild(imgContainer);

                if (img.src === imageSrc) {
                    imgContainer.style.display = 'block';
                    currentIndex = index;
                }
            });

            overlay.innerHTML += add;
            overlay.style.display = 'flex';

            const closeButton = overlay.querySelector('.close-button');
            const prevButton = overlay.querySelector('.prev-button');
            const nextButton = overlay.querySelector('.next-button');

            closeButton.addEventListener('click', () => {
                overlay.style.display = 'none';
            });

            prevButton.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + imagesInFolder.length) % imagesInFolder.length;
                showImage(currentIndex);
            });

            nextButton.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % imagesInFolder.length;
                showImage(currentIndex);
            });
        });
    });

    function showImage(index) {
        const images = Array.from(document.querySelectorAll('.image-container'));
        images.forEach((img, idx) => {
            if (idx === index) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    }
});
