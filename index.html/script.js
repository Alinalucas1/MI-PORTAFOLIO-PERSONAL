// ===== MENÚ HAMBURGUESA =====
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");
});

// ===== ANIMACIÓN DE BARRAS DE PROGRESO =====
const progressBars = document.querySelectorAll(".progress-bar span");

function fillBars() {
    progressBars.forEach(bar => {
        const target = bar.getAttribute("data-width");
        bar.style.width = target; // se llena hasta el % definido en HTML
    });
}

const skillsSection = document.getElementById("skills");
let skillsSeen = false;

function checkSkills() {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos && !skillsSeen) {
        fillBars();
        skillsSeen = true;
    }
}

window.addEventListener("scroll", checkSkills);
window.addEventListener("load", checkSkills); // <-- nuevo

// ===== SCROLL SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ===== VALIDACIÓN EN TIEMPO REAL =====
const form = document.getElementById("contact-form");
const inputs = form.querySelectorAll("input, textarea");

inputs.forEach(input => {
    input.addEventListener("input", () => {
        if (input.validity.valid) {
            input.style.borderColor = "green";
        } else {
            input.style.borderColor = "red";
        }
    });
});

// ===== FORMULARIO MENSAJE =====
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        alert("✅ ¡Gracias por tu mensaje, Alina lo recibirá pronto!");
        form.reset();
        inputs.forEach(i => i.style.borderColor = "#ccc");
    } else {
        alert("❌ Por favor completa todos los campos.");
    }
});
