
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".filters button");
    const courses = document.querySelectorAll("#course-list li");
    const totalCredits = document.getElementById("total-credits");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            // Remove 'active' de todos os botões
            buttons.forEach(btn => btn.classList.remove("active"));
            // Adiciona 'active' ao botão clicado
            button.classList.add("active");

            let visibleCourses = 0;

            courses.forEach(course => {
                if (filter === "all" || course.dataset.category === filter) {
                    course.style.display = "list-item";
                    visibleCourses++;
                } else {
                    course.style.display = "none";
                }
            });

            // Atualiza créditos (cada curso vale 2 créditos neste exemplo)
            totalCredits.textContent = `The total credits for courses listed above is ${visibleCourses * 2}`;
        });
    });

    // Define o botão "All" como ativo ao carregar
    document.querySelector('[data-filter="all"]').classList.add("active");
});
// Botão Hambúrguer para navegação móvel
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

