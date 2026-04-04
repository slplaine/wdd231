// Espera o HTML carregar completamente
document.addEventListener("DOMContentLoaded", () => {

  // Timestamp
  const timestampField = document.getElementById("timestamp");
  if (timestampField) {
    timestampField.value = new Date().toISOString();
  }

  // Captura parâmetros da URL
  const params = new URLSearchParams(window.location.search);

  // Só executa se existir #results (evita erro!)
  const results = document.getElementById("results");
  if (results) {
    results.innerHTML = `
      <p><strong>First Name:</strong> ${params.get("firstName") || ""}</p>
      <p><strong>Last Name:</strong> ${params.get("lastName") || ""}</p>
      <p><strong>Email:</strong> ${params.get("email") || ""}</p>
      <p><strong>Phone:</strong> ${params.get("phone") || ""}</p>
      <p><strong>Business:</strong> ${params.get("business") || ""}</p>
      <p><strong>Date:</strong> ${params.get("timestamp") || ""}</p>
    `;
  }

  // Hamburger menu
  const button = document.querySelector("#menu-button");
  const nav = document.querySelector("#main-nav");

  if (button && nav) {
    button.addEventListener("click", () => {
      nav.classList.toggle("show");
      button.textContent = nav.classList.contains("show") ? "✖" : "☰";
    });
  }

});
