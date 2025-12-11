function verEvento(eventId) {
    // Guardar el evento seleccionado en localStorage
    localStorage.setItem('selectedEvent', eventId);
    // Redirigir a la página de detalle
    window.location.href = './eventos-detalle.html';
}

document.querySelectorAll('.enlace-interno').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();                    // evita comportamiento por defecto
        window.location.href = this.getAttribute('href');
    });
});