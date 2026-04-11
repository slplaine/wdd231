import { places } from "../data/discover.mjs";

// Função para construir os cards
const container = document.querySelector("#discover-cards");

places.forEach(place => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="data/images/${place.image}" alt="${place.name}" loading="lazy">
    </figure>
    <address>${place.address}</address>
    <p>Telefone: ${place.phone}</p>
    <p><a href="${place.website}" target="_blank">Visite o site</a></p>
    <button>Learn More</button>
  `;
  container.appendChild(card);
});

// LocalStorage: mensagem de visita
const messageArea = document.querySelector("#visitor-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  messageArea.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (days < 1) {
    messageArea.textContent = "Back so soon! Awesome!";
  } else if (days === 1) {
    messageArea.textContent = "You last visited 1 day ago.";
  } else {
    messageArea.textContent = `You last visited ${days} days ago.`;
  }
}

localStorage.setItem("lastVisit", now);

