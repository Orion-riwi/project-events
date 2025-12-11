document.addEventListener("DOMContentLoaded", () => {

    const adminEmail = "juandaadmin@gmail.com";
    const adminPass = "1234";

    const active = JSON.parse(localStorage.getItem("activeUser"));

    // Protección admin
    if (!active || active.email !== adminEmail || active.pass !== adminPass) {
        alert("Acceso denegado");
        window.location.href = "./html/login.html";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const tbody = document.getElementById("tbody");

    // Render tabla usuarios
    function render(lista) {
        tbody.innerHTML = "";

        lista.forEach((u, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${u.name}</td>
                <td>${u.email}</td>
                <td>${u.tipo || "Usuario"}</td>
                <td>
                    <button class="deleteRow" data-index="${index}">
                        Eliminar
                    </button>
                </td>
            `;

            tbody.appendChild(row);
        });

        document.querySelectorAll(".deleteRow").forEach(btn => {
            btn.addEventListener("click", e => {
                const i = e.target.dataset.index;
                users.splice(i, 1);
                localStorage.setItem("users", JSON.stringify(users));
                render(users);
            });
        });
    }

    render(users);

    // Limpiar búsqueda
    document.getElementById("btnLimpiar").onclick = () => {
        document.getElementById("busqueda").value = "";
        render(users);
    };

    // Mostrar todos 
    document.getElementById("verTodosUsuarios").onclick = () => {
    crudEventos.style.display = "none"; // Oculta eventos
    render(users);                      // Muestra registros de usuarios
    window.scrollTo(0, 0);  
};


    // Logout
    document.getElementById("logoutBtn").onclick = () => {
        localStorage.removeItem("activeUser");
        window.location.href = "../index.html";
    };

    // muestra en la compra de los usuarios
    const tbodyCompras = document.getElementById("tbodyCompras");

    function renderCompras() {
        const compras = JSON.parse(localStorage.getItem("compras")) || [];
        tbodyCompras.innerHTML = "";

        compras.forEach(c => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${c.usuario}</td>
                <td>${c.email}</td>
                <td>${c.evento}</td>
                <td>$${Number(c.precio).toLocaleString()}</td>
                <td>${c.fecha}</td>
            `;
            tbodyCompras.appendChild(row);
        });
    }

    renderCompras();

    const btnLimpiarCompras = document.getElementById("btnLimpiarCompras");
    if (btnLimpiarCompras) {
        btnLimpiarCompras.addEventListener("click", () => {
            if (!confirm("¿Seguro que quieres eliminar todo el historial de compras?")) return;
            localStorage.removeItem("compras");
            renderCompras();
            alert("Historial de compras eliminado.");
        });
    }

    //Creacion de eventos 
    let eventosLS = JSON.parse(localStorage.getItem("eventos")) || {};

    const crudEventos = document.getElementById("crudEventos");
    const tbodyEventos = document.getElementById("tbodyEventos");
    const formEvento = document.getElementById("formEvento");

    const tituloInput = document.getElementById("tituloEvento");
    const descInput = document.getElementById("descripcionEvento");
    const imgInput = document.getElementById("imagenEvento");
    const precioInput = document.getElementById("precioEvento");
    const editId = document.getElementById("editId");

    // Render tabla de eventos
    function renderEventos() {
        tbodyEventos.innerHTML = "";

        Object.keys(eventosLS).forEach(id => {
            const ev = eventosLS[id];

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${ev.titulo}</td>
                <td>$${ev.precio.toLocaleString()}</td>
                <td>
                    <button class="btn-edit" onclick="editarEvento('${id}')">Editar</button>
                    <button class="btn-delete" onclick="eliminarEvento('${id}')">Eliminar</button>
                </td>
            `;

            tbodyEventos.appendChild(row);
        });
    }

    renderEventos();

    // Crear o actualizar evento
    formEvento.addEventListener("submit", e => {
        e.preventDefault();

        const id = editId.value || tituloInput.value.toLowerCase().replace(/ /g, "-");

        eventosLS[id] = {
            titulo: tituloInput.value,
            descripcion: descInput.value,
            imagen: imgInput.value,
            precio: Number(precioInput.value)
        };

        localStorage.setItem("eventos", JSON.stringify(eventosLS));

        formEvento.reset();
        editId.value = "";
        renderEventos();

        alert("Evento guardado correctamente");
    });

    // Editar
    window.editarEvento = function(id) {
        const ev = eventosLS[id];

        editId.value = id;
        tituloInput.value = ev.titulo;
        descInput.value = ev.descripcion;
        imgInput.value = ev.imagen;
        precioInput.value = ev.precio;
    };

    // Eliminar
    window.eliminarEvento = function(id) {
        if (!confirm("¿Eliminar este evento?")) return;

        delete eventosLS[id];
        localStorage.setItem("eventos", JSON.stringify(eventosLS));
        renderEventos();
    };

    const btnActualizarEventos = document.getElementById("btnActualizarEventos");
    const btnEliminarEventos = document.getElementById("btnEliminarEventos");

    function mostrarCRUD() {
        crudEventos.style.display = "block";
        window.scrollTo(0, document.body.scrollHeight);
    }

    if (btnActualizarEventos) btnActualizarEventos.onclick = mostrarCRUD;
    if (btnEliminarEventos) btnEliminarEventos.onclick = mostrarCRUD;
    if (btnCrearEventos) btnCrearEventos.onclick = mostrarCRUD;

});
