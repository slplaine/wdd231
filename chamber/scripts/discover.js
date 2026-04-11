import { places } from "../data/discover.mjs";

const container = document.querySelector("#discover-cards");

places.forEach(place => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="./images/${place.image}" alt="${place.name}" loading="lazy">
    </figure>
    <address>${place.address}</address>
    <p>Telefone: ${place.phone}</p>
    <p><a href="${place.website}" target="_blank">Visite o site</a></p>
    <button class="learn-more">Learn More</button>
  `;
  container.appendChild(card);

  // evento do botão
  card.querySelector(".learn-more").addEventListener("click", () => {
    const modalBody = document.querySelector("#modal-body");
    modalBody.innerHTML = `
      <h2>${place.name}</h2>
      <p><strong>Endereço:</strong> ${place.address}</p>
      <p><strong>Telefone:</strong> ${place.phone}</p>
      <p><strong>Website:</strong> <a href="${place.website}" target="_blank">${place.website}</a></p>
      <img src="./images/${place.image}" alt="${place.name}" style="width:100%;height:250px;object-fit:cover;">
    `;
    document.querySelector("#modal").style.display = "block";
  });
});

// fechar modal (com verificação)
const closeBtn = document.querySelector("#close-modal");
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    document.querySelector("#modal").style.display = "none";
  });
}

// fechar clicando fora
window.addEventListener("click", (event) => {
  const modal = document.querySelector("#modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

