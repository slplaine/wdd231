// timestamp
document.addEventListener("DOMContentLoaded", () => {
  const timestampField = document.getElementById("timestamp");
  if (timestampField) {
    timestampField.value = new Date().toISOString();
  }
});
const params = new URLSearchParams(window.location.search);

document.getElementById("results").innerHTML = `
  <p><strong>First Name:</strong> ${params.get("firstName")}</p>
  <p><strong>Last Name:</strong> ${params.get("lastName")}</p>
  <p><strong>Email:</strong> ${params.get("email")}</p>
  <p><strong>Phone:</strong> ${params.get("phone")}</p>
  <p><strong>Business:</strong> ${params.get("business")}</p>
  <p><strong>Date:</strong> ${params.get("timestamp")}</p>
`;