// ../js/dashboard.js

document.addEventListener("DOMContentLoaded", () => {

    const adminEmail = "juandaadmin@gmail.com";
    const adminPass = "1234";

    const active = JSON.parse(localStorage.getItem("activeUser"));

    // Protección para evitar que entren usuarios normales
    if (!active || active.email !== adminEmail || active.pass !== adminPass) {
        alert("Acceso denegado");
        window.location.href = "../html/login.html";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const tbody = document.getElementById("tbody");

    // Renderizar tabla de usuarios
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

        // Botón eliminar
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

    // Limpiar busqueda
    document.getElementById("btnLimpiar").onclick = () => {
        document.getElementById("busqueda").value = "";
        render(users);
    };

    // Mostrar todos 
    document.getElementById("verTodosUsuarios").onclick = () => render(users);

    // Logout
    document.getElementById("logoutBtn").onclick = () => {
        localStorage.removeItem("activeUser");
        window.location.href = "../html/index.html";
    };

    // RENDER COMPRAS EN DASHBOARD
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

    // Botón para limpiar historial de compras
    const btnLimpiarCompras = document.getElementById("btnLimpiarCompras");
    if (btnLimpiarCompras) {
        btnLimpiarCompras.addEventListener("click", () => {
            if (!confirm("¿Seguro que quieres eliminar todo el historial de compras?")) return;
            localStorage.removeItem("compras");
            renderCompras();
            alert("Historial de compras eliminado.");
        });
    }

});

// Mostrar alerta para botones de eventos
const btnEventos = document.getElementById("btnEventos");
const btnEliminarEventos = document.getElementById("btnEliminarEventos");

if (btnEventos) {
    btnEventos.addEventListener("click", () => {
        alert("Este apartado está en construcción ");
    });
}

if (btnEliminarEventos) {
    btnEliminarEventos.addEventListener("click", () => {
        alert("Este apartado está en construcción ");
    });
}