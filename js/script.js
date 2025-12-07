document.addEventListener("DOMContentLoaded", () => {

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
