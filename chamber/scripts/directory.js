// Load members from JSON file
async function loadMembers() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) {
      throw new Error("Error loading members.json");
    }
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

// Display members dynamically on the page
function displayMembers(members) {
  const container = document.getElementById('members');
  container.innerHTML = '';
  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('member-card');
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;
    container.appendChild(card);
  });
}

// Toggle between Grid and List view
document.getElementById('grid').addEventListener('click', () => {
  const members = document.getElementById('members');
  members.classList.remove('list');
  members.classList.add('grid');
});

document.getElementById('list').addEventListener('click', () => {
  const members = document.getElementById('members');
  members.classList.remove('grid');
  members.classList.add('list');
});

// Initial load
loadMembers();

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
