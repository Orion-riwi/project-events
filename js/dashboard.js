document.addEventListener("DOMContentLoaded", () => {

    // quemo el dato del admin
    const adminEmail = "juandaadmin@gmail.com";
    const adminPass = "1234";

    const activeUser = JSON.parse(localStorage.getItem("activeUser"));

    // Si NO es admin → no entra
    if (!activeUser || activeUser.email !== adminEmail || activeUser.pass !== adminPass) {
        alert("Acceso denegado. Solo administradores.");
        window.location.href = "../html/login.html";
        return;
    }

    // Cargar usuarios en la taba
    const usuariosTable = document.getElementById("usuariosTable");
    let users = JSON.parse(localStorage.getItem("users")) || [];

    function mostrarUsuarios() {
        usuariosTable.innerHTML = "";

        users.forEach((u, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${u.name}</td>
                <td>${u.email}</td>
                <td>
                    <button class="deleteBtn" data-index="${index}">Eliminar</button>
                </td>
            `;

            usuariosTable.appendChild(row);
        });

        // boton eliminar
        document.querySelectorAll(".deleteBtn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const i = e.target.dataset.index;
                users.splice(i, 1);
                localStorage.setItem("users", JSON.stringify(users));
                mostrarUsuarios();
            });
        });
    }

    mostrarUsuarios();

    // Cerrar sesión
    document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("activeUser");
        window.location.href = "../html/login.html";
    });

});
