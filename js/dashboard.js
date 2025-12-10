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

    // Renderizar tabla
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

    // Buscar
    document.getElementById("btnBuscar").onclick = () => {
        const txt = document.getElementById("busqueda").value.toLowerCase();
        const filtrados = users.filter(u =>
            u.name.toLowerCase().includes(txt) ||
            u.email.toLowerCase().includes(txt)
        );
        render(filtrados);
    };

    // Limpiar
    document.getElementById("btnLimpiar").onclick = () => {
        document.getElementById("busqueda").value = "";
        render(users);
    };

    // Mostrar todos
    document.getElementById("verTodos").onclick = () => render(users);

    // Logout
    document.getElementById("logoutBtn").onclick = () => {
        localStorage.removeItem("activeUser");
        window.location.href = "../html/login.html";
    };

});
