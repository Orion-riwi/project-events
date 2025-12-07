document.addEventListener("DOMContentLoaded", () => { // Carrucel
    const track = document.querySelector(".carrusel-inner");
    const slides = track.querySelectorAll("img");
    let index = 0;
    const total = slides.length;

    // Movimiento suave
    function move() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    function next() {
        index++;
        if (index >= total) index = 0;
        move();
    }
    // PAra que comience denuevo
    setInterval(next, 3000);
    // PAra que oueda moverse y comenzar
    move();
});

const userIcon = document.querySelector(".user-icon"); //Icon menu despegable
const userDropdown = document.querySelector(".user-dropdown");
userIcon.addEventListener("click", () => {
    // Muestra el menu con el clcick
    userDropdown.style.display =
        userDropdown.style.display === "flex" ? "none" : "flex";
});

// Cierra el menu con el clcik
document.addEventListener("click", (e) => {
    if (!e.target.closest(".user-menu-container")) {
        userDropdown.style.display = "none";
    }
});