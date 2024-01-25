const add = `<button class="prev-button">&#8249;</button>
<button class="next-button">&#8250;</button>`;

document.addEventListener("DOMContentLoaded", function () {
    var small_image = document.querySelectorAll('.small-image');

    small_image.forEach(function (image) {
        image.addEventListener('click', function () {
            this.classList.toggle('expandida');
            this.parentNode.classList.toggle("parent");
            this.innerHTML = add;
        });
    });

});
