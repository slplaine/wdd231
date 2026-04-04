const url = "data/members.json";

async function loadSpotlights() {
    const response = await fetch(url);
    const data = await response.json();

    const filtered = data.filter(member => member.membership === 2 || member.membership === 3);

    const shuffled = [...filtered].sort(() => Math.random() - 0.5);

    const selected = shuffled.slice(0, 3);

    displaySpotlights(selected);
}

function displaySpotlights(members) {
    const container = document.getElementById("spotlight-container");

    container.innerHTML = ""; // evita duplicação

    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("spotlight-card");

        card.innerHTML = `
            <h3>${member.name}</h3>
            <img src="images/${member.image}" alt="${member.name}">
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p><strong>${member.membership === 3 ? "Gold" : "Silver"} Member</strong></p>
        `;

        container.appendChild(card);
    });
}

loadSpotlights();
// Hamburger menu for mobile navigation
const button = document.querySelector("#menu-button");
const nav = document.querySelector("#main-nav");

button.addEventListener("click", () => { 
  nav.classList.toggle("show");

  if (nav.classList.contains("show")) {
    button.textContent = "✖";
  } else {
    button.textContent = "☰";
  }
});
