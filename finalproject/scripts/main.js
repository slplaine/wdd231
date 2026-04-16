// ====== Menu Hambúrguer ======
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.page-links');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// ====== Footer Dates ======
const yearSpan = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (lastModified) {
  lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

// ====== Dynamic Benefits (Arrays + map) ======
const benefits = [
  "Helps reduce stress",
  "Improves focus and patience",
  "Creates unique handmade gifts"
];

function renderBenefits() {
  const list = document.getElementById("benefitsList");
  if (list) {
    list.innerHTML = benefits.map(item => `<li>${item}</li>`).join("");
  }
}

renderBenefits();

// ====== Form Interaction (LocalStorage sem bloquear envio) ======
const nameForm = document.getElementById("nameForm");
const welcomeMessage = document.getElementById("welcomeMessage");

// Mensagem ao voltar
if (localStorage.getItem("visitorName") && welcomeMessage) {
  welcomeMessage.textContent = `Welcome back, ${localStorage.getItem("visitorName")}!`;
}

if (nameForm) {
  nameForm.addEventListener("submit", function () {

    const nameInput = document.getElementById("visitorName")?.value;
    const emailInput = document.getElementById("visitorEmail")?.value;
    const messageInput = document.getElementById("message")?.value;

    const visitor = {
      name: nameInput,
      email: emailInput,
      message: messageInput
    };

    if (visitor.name) {
      localStorage.setItem("visitorName", visitor.name);
    }

    console.log("Visitor object:", visitor);
  });
}

// ===== FETCH + DYNAMIC CONTENT (SÓ NA HOME) =====
async function loadProjects() {
  try {
    const response = await fetch("data/data.json");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    const container = document.createElement("section");
    container.innerHTML = "<h2>Crochet Projects</h2>";

    const cards = document.createElement("div");
    cards.classList.add("cards");

    cards.innerHTML = data.map(item => `
      <div class="card">
        <h3>${item.name}</h3>
        <p><strong>Difficulty:</strong> ${item.difficulty}</p>
        <p><strong>Time:</strong> ${item.time}</p>
        <p><strong>Material:</strong> ${item.material}</p>
      </div>
    `).join("");

    container.appendChild(cards);

    const main = document.querySelector("main");
    if (main) {
      main.appendChild(container);
    }

  } catch (error) {
    console.error("Error loading data:", error);
  }
}

// 👉 IMPORTANTE: só roda no index.html
if (document.body.classList.contains("home")) {
  loadProjects();
}

// ===== MODAL (seguro) =====
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

if (modal && modalText) {
  document.addEventListener("click", (e) => {
    const card = e.target.closest(".card");

    if (card) {
      const title = card.querySelector("h3")?.textContent;
      modalText.textContent = title || "Project details";
      modal.style.display = "block";
    }
  });
}

if (closeModal && modal) {
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}