// ../js/evento-detalle.js

// Definir todos los eventos con su info y precio
const eventos = {
    'gigantes-del-rock': {
        titulo: 'GIGANTES DEL ROCK',
        imagen: '../img/eventos/eventos1.jpg',
        descripcion: 'El evento musical más esperado del año llega a Colombia: Gigantes del Rock. Este espectacular concierto reunirá a legendarias figuras del rock el 2 de enero en Medellín.',
        precio: 120000
    },
    'duki-ameri-tour': {
        titulo: 'DUKI - AMERI TOUR IN BOGOTÁ',
        imagen: '../img/eventos/eventos2.jpg',
        descripcion: 'El artista argentino DUKI regresa por tercera vez a la capital del país con su gira mundial AMERI.',
        precio: 180000
    },
    'remate-del-ano': {
        titulo: 'EL REMATE DEL AÑO ALCOLIRYKOZ MEDELLIN',
        imagen: '../img/eventos/eventos3.jpg',
        descripcion: 'El Remate del Año de Alcolirykoz llega a Medellín.',
        precio: 80000
    },
    'tomorrowland': {
        titulo: 'Tomorrowland',
        imagen: '../img/eventos/eventos4.jpg',
        descripcion: 'TOMORROWLAND ESTA AQUI PARA DARLE EL MEJOR SHOW A COLOMBIA',
        precio: 250000
    },
    'j-balvin-medellin': {
        titulo: 'J Balvin en Medellín',
        imagen: '../img/eventos/eventos5.jpg',
        descripcion: 'J Balvin regresa en concierto a la casa con un show imperdible el 2025 en el Estadio Atanasio Girardot.',
        precio: 220000
    },
    'andres-cepeda': {
        titulo: 'Andres Cepeda',
        imagen: '../img/eventos/eventos6.jpg',
        descripcion: 'El cantante y compositor Andrés Cepeda anunció el regreso a los escenarios más emblemáticos de Colombia con Bogotá.',
        precio: 90000
    },
    'imagine-dragons': {
        titulo: 'Imagine Dragons Colombia 2025',
        imagen: '../img/eventos/eventos7.jpeg',
        descripcion: 'Imagine Dragons confirma su regreso a Bogotá este 17 de octubre de 2025 para lo que será su concierto más grande en nuestro país.',
        precio: 240000
    },
    'blessd': {
        titulo: 'BLESSD 2025',
        imagen: '../img/eventos/eventos8.jpg',
        descripcion: '¡Prepárate para una noche inolvidable! Blessd llega a la Plaza de Toros La Macarena.',
        precio: 75000
    }
};

// Obtener el evento seleccionado desde localStorage
const selectedId = localStorage.getItem('selectedEvent');
const evento = eventos[selectedId];

// Actualizar HTML con info del evento
if (evento) {
    const tituloEl = document.getElementById('titulo');
    const imagenEl = document.getElementById('imagen');
    const descripcionEl = document.getElementById('descripcion');

    tituloEl.textContent = evento.titulo;
    imagenEl.src = evento.imagen;
    descripcionEl.textContent = evento.descripcion;

    // Mostrar precio (si no existe ya)
    const existingPrice = document.getElementById('precio-evento');
    if (!existingPrice) {
        const precioTag = document.createElement("p");
        precioTag.id = "precio-evento";
        precioTag.style.color = "#a879ff";
        precioTag.style.fontSize = "22px";
        precioTag.style.fontWeight = "700";
        precioTag.style.marginTop = "10px";
        precioTag.textContent = `Precio: $${evento.precio.toLocaleString()}`;
        // Insertar antes del botón Comprar
        const comprarBtn = document.getElementById('comprar');
        comprarBtn.parentNode.insertBefore(precioTag, comprarBtn);
    }
}

// Mensaje de compra
const botonComprar = document.getElementById('comprar');
const mensaje = document.getElementById('mensaje-compra');

if (botonComprar) {
    botonComprar.addEventListener('click', () => {
        if (!evento) return;

        // Requerir usuario logueado
        const activeUser = JSON.parse(localStorage.getItem('activeUser'));
        if (!activeUser) {
            alert("Debes iniciar sesión para comprar.");
            window.location.href = "../html/login.html";
            return;
        }

        // Leer compras, añadir la nueva
        const compras = JSON.parse(localStorage.getItem("compras")) || [];

        compras.push({
            usuario: activeUser.name || activeUser.email || "Anon",
            email: activeUser.email || "",
            evento: evento.titulo,
            precio: evento.precio,
            fecha: new Date().toLocaleString()
        });

        localStorage.setItem("compras", JSON.stringify(compras));

        // Mensaje visual (fade)
        mensaje.textContent = '¡Compra exitosa! Revisa tu e-mail (simulado).';
        mensaje.style.display = 'block';
        mensaje.style.opacity = 0;
        mensaje.style.transition = 'opacity 0.3s';
        setTimeout(() => mensaje.style.opacity = 1, 10);

        // Ocultar mensaje después de 3 segundos
        setTimeout(() => {
            mensaje.style.opacity = 0;
            setTimeout(() => mensaje.style.display = 'none', 300);
        }, 3000);

        // También guardamos un log en la consola
        console.log(`Compra registrada: ${activeUser.email} - ${evento.titulo} - $${evento.precio}`);
    });
}

document.querySelectorAll('.enlace-interno').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();                    // evita comportamiento por defecto
        window.location.href = this.getAttribute('href');
    });
});
