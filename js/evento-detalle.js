// Eventos quemados para eentos
const eventosBase = {
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
        descripcion: 'El mejor show electrónico llega a Colombia.',
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

// Cargar eventos en dasboard
let eventosLS2 = JSON.parse(localStorage.getItem("eventos")) || {};

// Unir ambos
const eventos = { ...eventosBase, ...eventosLS2 };

// Obtener ID enviado 
const id = localStorage.getItem("selectedEvent");
const data = eventos[id];

// Mostrar información
if (data) {
    document.getElementById("titulo").textContent = data.titulo;
    document.getElementById("imagen").src = data.imagen;
    document.getElementById("descripcion").textContent = data.descripcion;

    const priceTag = document.createElement("p");
    priceTag.id = "precio-evento";
    priceTag.style.color = "#a879ff";
    priceTag.style.fontSize = "22px";
    priceTag.style.fontWeight = "700";
    priceTag.style.marginTop = "10px";
    priceTag.textContent = `Precio: $${data.precio.toLocaleString()}`;

    document.getElementById("comprar").before(priceTag);
}

// Comprar
const botonComprar = document.getElementById("comprar");
const mensaje = document.getElementById("mensaje-compra");

botonComprar.addEventListener("click", () => {
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    if (!activeUser) {
        alert("Debes iniciar sesión para comprar.");
        window.location = "../html/login.html";
        return;
    }

    const compras = JSON.parse(localStorage.getItem("compras")) || [];

    compras.push({
        usuario: activeUser.name,
        email: activeUser.email,
        evento: data.titulo,
        precio: data.precio,
        fecha: new Date().toLocaleString()
    });

    localStorage.setItem("compras", JSON.stringify(compras));

    mensaje.textContent = '¡Compra exitosa!';
    mensaje.style.display = 'block';
    mensaje.style.opacity = 0;
    mensaje.style.transition = 'opacity 0.3s';
    setTimeout(() => mensaje.style.opacity = 1, 10);

    setTimeout(() => {
        mensaje.style.opacity = 0;
        setTimeout(() => mensaje.style.display = 'none', 300);
    }, 3000);
});