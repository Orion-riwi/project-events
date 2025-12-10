// Definir todos los eventos con su info
const eventos = {
    'gigantes-del-rock': {
        titulo: 'GIGANTES DEL ROCK',
        imagen: '../img/eventos/eventos1.jpg',
        descripcion: 'El evento musical más esperado del año llega a Colombia: Gigantes del Rock. Este espectacular concierto reunirá a legendarias figuras del rock el 2 de enero en Medellín.'
    },
    'duki-ameri-tour': {
        titulo: 'DUKI - AMERI TOUR IN BOGOTÁ',
        imagen: '../img/eventos/eventos2.jpg',
        descripcion: 'El artista argentino DUKI regresa por tercera vez a Bogotá con su gira mundial AMERI.'
    },
    'remate-del-ano': {
        titulo: 'EL REMATE DEL AÑO ALCOLIRYKOZ MEDELLIN',
        imagen: '../img/eventos/eventos3.jpg',
        descripcion: 'El Remate del Año de Alcolirykoz llega a Medellín.'
    },
    'tomorrowland': {
        titulo: 'Tomorrowland',
        imagen: '../img/eventos/eventos4.jpg',
        descripcion: 'TOMORROWLAND ESTA AQUI PARA DARLE EL MEJOR SHOW A COLOMBIA'
    },
    'j-balvin-medellin': {
        titulo: 'J Balvin en Medellín',
        imagen: '../img/eventos/eventos5.jpg',
        descripcion: 'J Balvin regresa en concierto a la casa con un show imperdible el 2025 en el Estadio Atanasio Girardot.'
    },
    'andres-cepeda': {
        titulo: 'Andres cepeda',
        imagen: '../img/eventos/eventos6.jpg',
        descripcion: 'El cantante y compositor Andrés Cepeda anunció el regreso a los escenarios más emblemáticos de Colombia con Bogotá'
    },
    'imagine-dragons': {
        titulo: 'Imagine Dragons Colombia 2025',
        imagen: '../img/eventos/eventos7.jpeg',
        descripcion: 'La espera terminó! Imagine Dragons confirma su regreso a Bogotá este 17 de octubre de 2025 para lo que será su concierto más grande en nuestro país.'
    },
    'blessd': {
        titulo: 'BLESSD 2025',
        imagen: '../img/eventos/eventos8.jpg',
        descripcion: '¡Prepárate para una noche inolvidable llena de flow y buena música! El talentoso cantante Blessd llega a la Plaza de Toros La Macarena'
    },
};

// Obtener el evento seleccionado desde localStorage
const selectedId = localStorage.getItem('selectedEvent');
const evento = eventos[selectedId];

// Actualizar HTML con info del evento
if (evento) {
    document.getElementById('titulo').textContent = evento.titulo;
    document.getElementById('imagen').src = evento.imagen;
    document.getElementById('descripcion').textContent = evento.descripcion;
}

// Mensaje de compra
const botonComprar = document.getElementById('comprar');
const mensaje = document.getElementById('mensaje-compra');

botonComprar.addEventListener('click', () => {
    if (!evento) return;

    // Mostrar mensaje verde
    mensaje.textContent = '¡Compra exitosa!';
    mensaje.style.display = 'block';
    mensaje.style.opacity = 0;
    mensaje.style.transition = 'opacity 0.3s';
    setTimeout(() => mensaje.style.opacity = 1, 10);

    // Ocultar mensaje después de 3 segundos
    setTimeout(() => {
        mensaje.style.opacity = 0;
        setTimeout(() => mensaje.style.display = 'none', 300);
    }, 3000);

    // Opcional: alerta o redirección de compra
    console.log(`Redirigiendo a la compra de ${evento.titulo}`);
});
