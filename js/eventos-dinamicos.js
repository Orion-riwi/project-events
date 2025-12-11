const eventosQuemados = {
    'gigantes-del-rock': {
        titulo: 'GIGANTES DEL ROCK',
        imagen: '../img/eventos/eventos1.jpg',
        descripcion: 'El evento musical más esperado del año llega a Colombia.',
        precio: 120000
    },
    'duki-ameri-tour': {
        titulo: 'DUKI - AMERI TOUR IN BOGOTÁ',
        imagen: '../img/eventos/eventos2.jpg',
        descripcion: 'Duki regresa con su gira AMERI.',
        precio: 180000
    },
    'remate-del-ano': {
        titulo: 'EL REMATE DEL AÑO ALCOLIRYKOZ MEDELLIN',
        imagen: '../img/eventos/eventos3.jpg',
        descripcion: 'El Remate del Año de Alcolirykoz en Medellín.',
        precio: 80000
    },
    'tomorrowland': {
        titulo: 'Tomorrowland',
        imagen: '../img/eventos/eventos4.jpg',
        descripcion: 'El mejor show de música electrónica llega a Colombia.',
        precio: 250000
    },
    'j-balvin-medellin': {
        titulo: 'J Balvin en Medellín',
        imagen: '../img/eventos/eventos5.jpg',
        descripcion: 'J Balvin regresa a la casa.',
        precio: 220000
    },
    'andres-cepeda': {
        titulo: 'Andres Cepeda',
        imagen: '../img/eventos/eventos6.jpg',
        descripcion: 'Concierto de Andrés Cepeda en Bogotá.',
        precio: 90000
    },
    'imagine-dragons': {
        titulo: 'Imagine Dragons Colombia 2025',
        imagen: '../img/eventos/eventos7.jpeg',
        descripcion: 'Imagine Dragons regresa este 17 de octubre.',
        precio: 240000
    },
    'blessd': {
        titulo: 'BLESSD 2025',
        imagen: '../img/eventos/eventos8.jpg',
        descripcion: 'Blessd llega a La Macarena.',
        precio: 75000
    }
};

// Cargar eventos creados por el admin
let eventosLS = JSON.parse(localStorage.getItem("eventos")) || {};

// agrega nuevos eventos
const eventosFinal = { ...eventosQuemados, ...eventosLS };

const contenedor = document.getElementById("listaEventos");
contenedor.innerHTML = "";

// Nuestra y guarda
Object.keys(eventosFinal).forEach(id => {
    const e = eventosFinal[id];

    contenedor.innerHTML += `
        <div class="card">
            <img src="${e.imagen}">
            <h3>${e.titulo}</h3>
            <p>${e.descripcion}</p>
            <button onclick="verEvento('${id}')">Ver más</button>
        </div>
    `;
});
