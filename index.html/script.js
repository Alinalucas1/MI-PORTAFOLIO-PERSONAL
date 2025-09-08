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
        bar.style.width = target;
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
window.addEventListener("load", checkSkills);

// ===== SCROLL SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ===== VALIDACIÓN EN TIEMPO REAL (solo borde verde/rojo) =====
const form = document.getElementById("contact-form");
if (form) {
    const inputs = form.querySelectorAll("input, textarea");

    inputs.forEach(input => {
        input.addEventListener("input", () => {
            input.style.borderColor = input.validity.valid ? "green" : "red";
        });
    });

    // NO bloqueamos el envío real, Formspree lo maneja
}

// ===== REDES SOCIALES =====
const SOCIALS = {
    linkedin: "https://www.linkedin.com/in/alina-ibarra-8330482b0/",
    tiktok: "https://www.tiktok.com/@teamotaylorswift13_",
    instagram: "https://www.instagram.com/alinasdiary13/?next=%2F"
};

const UTM = "?utm_source=portfolio&utm_medium=link&utm_campaign=social";

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-network]").forEach(el => {
        const key = el.getAttribute("data-network");
        if (SOCIALS[key]) {
            el.href = SOCIALS[key] + UTM;
            el.setAttribute("target", "_blank");
            el.setAttribute("rel", "noopener noreferrer");
        }
    });
});
