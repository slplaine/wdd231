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

// ====== Form Interaction (Objects + localStorage) ======
const nameForm = document.getElementById("nameForm");
const welcomeMessage = document.getElementById("welcomeMessage");

if (localStorage.getItem("visitorName") && welcomeMessage) {
  welcomeMessage.textContent = `Welcome back, ${localStorage.getItem("visitorName")}!`;
}

if (nameForm) {
  nameForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = document.getElementById("visitorName").value;
    const emailInput = document.getElementById("visitorEmail").value;
    const messageInput = document.getElementById("message").value;

    // Criamos objeto visitor
    const visitor = {
      name: nameInput,
      email: emailInput,
      message: messageInput
    };

    // Salva nome no localStorage
    localStorage.setItem("visitorName", visitor.name);

    // Mensagem personalizada
    if (welcomeMessage) {
      welcomeMessage.textContent = `Hello, ${visitor.name}! Thanks for your message.`;
    }

    // Simula envio (log no console)
    console.log("Visitor object:", visitor);

    // Limpa formulário
    nameForm.reset();
  });
}
