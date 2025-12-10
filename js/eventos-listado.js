function verEvento(eventId) {
    // Guardar el evento seleccionado en localStorage
    localStorage.setItem('selectedEvent', eventId);
    // Redirigir a la página de detalle
    window.location.href = '../html/eventos-detalle.html';
}