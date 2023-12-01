document.addEventListener("DOMContentLoaded", function () {
  const cardsContainer = document.getElementById("cards-container_T3");
  const jsonFilePath = document.querySelector(".carousel_T3").dataset.jsonPath;

  fetch(jsonFilePath)
      .then(response => response.json())
      .then(data => {
          data.cards.forEach(cardData => {
              const card = document.createElement('div');
              card.classList.add('card_T3');
              card.innerHTML = `
                  <img src="${cardData.imagePath}" alt="Card Image">
                  <h2>${cardData.title}</h2>
                  <p>Fecha: ${cardData.date}</p>
                  <p>${cardData.text}</p>
              `;
              cardsContainer.appendChild(card);
          });
          setCarruselT3();
      })
      .catch(error => console.error('Error loading JSON data:', error));


      const setCarruselT3 = function () {
        const cards = document.querySelectorAll(".card_T3");
        const prev = document.querySelector(".prev");
        const next = document.querySelector(".next");

        let index = 0;

        function layout() {
          const xOffsetStep = 5;
          const count = cards.length;
          const scaleStep = 0.5;
          const opacityStep = 0.5;

          for (let i = 0; i < cards.length; i++) {
            img = cards[i];
            const sign = Math.sign(i - index);

            let xOffset = (i - index) * xOffsetStep;
            if (i !== index) {
              xOffset = xOffset + 80 * sign;
            }
            const scale = scaleStep ** Math.abs(i - index);
            const rotateY = i === index ? 0 : 30 * -sign;
            img.style.transform = `perspective(200px) translateX(${xOffset}px) scale(${scale}) rotateY(${rotateY}deg)`;

            let opacity = opacityStep ** Math.abs(i - index);
            if (Math.abs(i - index) > 2) {
              opacity = 0;
            }
            img.style.opacity = opacity;

            img.style.zIndex = count - Math.abs(index - i);
          }
        }
        layout();

        next.addEventListener("click", () => {
          index++;
          if (index > cards.length - 1) {
            index = cards.length - 1;
          }
          layout();
        });

        prev.addEventListener("click", () => {
          index--;
          if (index < 0) {
            index = 0;
          }
          layout();
        });
      };

});

