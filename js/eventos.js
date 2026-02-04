document.addEventListener("DOMContentLoaded", () => {
    // --- Lógica del Menú Desplegable y Sesión de Usuario ---
    const userIcon = document.querySelector(".user-icon");
    const userDropdown = document.querySelector(".user-dropdown");
    const userNameDisplay = document.getElementById("userNameDisplay");
    const loginLogoutLink = document.getElementById("loginLogoutLink");

    // Función para obtener el usuario activo
    function getActiveUser() {
        const user = localStorage.getItem("activeUser");
        return user ? JSON.parse(user) : null;
    }

    // Función para cerrar sesión
    function logout() {
        localStorage.removeItem("activeUser");
        // Redireccionar o actualizar la interfaz
        window.location = "../index.html";
    }

    // Función para actualizar la interfaz del usuario
    function updateNavbar() {
        const activeUser = getActiveUser();

        if (activeUser) {
            // Usuario logueado
            userNameDisplay.textContent = activeUser.name;
            loginLogoutLink.textContent = "Cerrar sesión";
            loginLogoutLink.href = "#"; // Evita la navegación directa
            loginLogoutLink.removeEventListener("click", redirectToLogin); // Quita el listener de Iniciar Sesión
            loginLogoutLink.addEventListener("click", logout); // Agrega el listener de Cerrar Sesión
        } else {
            // Usuario no logueado
            userNameDisplay.textContent = ""; // Borra el nombre
            loginLogoutLink.textContent = "Iniciar sesión";
            loginLogoutLink.href = "./html/login.html"; // Vuelve al enlace de login
            loginLogoutLink.removeEventListener("click", logout); // Quita el listener de Cerrar Sesión
            loginLogoutLink.addEventListener("click", redirectToLogin); // Agrega el listener de Iniciar Sesión (opcional, ya está el href)
        }
    }

    // Listener para redirigir al login (solo para claridad, ya está en el href)
    function redirectToLogin(e) {
        if (loginLogoutLink.textContent === "Iniciar sesión") {
            // Permitir que el 'href' normal haga la navegación
        }
    }

    // Inicializar la navbar al cargar la página
    updateNavbar();

    // Icon menu despegable
    userIcon.addEventListener("click", () => {
        // Muestra el menu con el click
        userDropdown.style.display =
            userDropdown.style.display === "flex" ? "none" : "flex";
    });
});

document.querySelectorAll('.enlace-interno').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
        e.preventDefault();                    // evita comportamiento por defecto
        window.location.href = this.getAttribute('href');
    });
});