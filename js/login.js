const contenedor = document.querySelector(".contenedor"); // cambia entre login y registro
const btnSingIn = document.getElementById("btn-sing-in");
const btnSingUp = document.getElementById("btn-sing-up");

btnSingIn.addEventListener("click", () => {
    contenedor.classList.remove("toggle");
});

btnSingUp.addEventListener("click", () => {
    contenedor.classList.add("toggle");
});

function showMessage(element, text, type) {
    element.style.display = "block";
    element.textContent = text; // FUNCIONES PARA MOSTRAR MENSAJES
    element.className = "message " + type;

    setTimeout(() => {
        element.style.display = "none";
    }, 1100);
}

//  REGISTRO
const registerForm = document.getElementById("registerForm");
const registerMessage = document.getElementById("registerMessage");

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const pass = document.getElementById("regPass").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.some(u => u.email === email);

    if (exists) {
        showMessage(registerMessage, " Este correo ya está registrado", "error");
        return;
    }

    users.push({ name, email, pass });
    localStorage.setItem("users", JSON.stringify(users));

    showMessage(registerMessage, " Registro exitoso", "success");

    registerForm.reset();

    setTimeout(() => {
        contenedor.classList.remove("toggle");
    }, 1000);
});

//          INICIAR SESIÓN
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const pass = document.getElementById("loginPass").value;

        // ---- validar entrada del admin ----
        if (email === "juandaadmin@gmail.com" && pass === "1234") {
            const adminData = {
                name: "Administrador",
                email: email,
                pass: pass
            };

            localStorage.setItem("activeUser", JSON.stringify(adminData));

            showMessage(loginMessage, " Bienvenido Administrador", "success");

            setTimeout(() => {
                window.location.href = "./dashboard.html";
            }, 1500);

            return; // Para poder para o detener
        }

        // VAlida si el usario es usuario o admin
        let users = JSON.parse(localStorage.getItem("users")) || [];

        const userFound = users.find(u => u.email === email && u.pass === pass);

        if (!userFound) {
            showMessage(loginMessage, " Correo o contraseña incorrectos", "error");
            return;
        }

        localStorage.setItem("activeUser", JSON.stringify(userFound));

        showMessage(loginMessage, " Bienvenido " + userFound.name, "success");

        setTimeout(() => {
            window.location.href = "../index.html";
        }, 1500);
    });

});

