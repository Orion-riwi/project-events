document.addEventListener("DOMContentLoaded", () => {

    const userIcon = document.querySelector(".user-icon");
    const userDropdown = document.querySelector(".user-dropdown");
    const userNameDisplay = document.getElementById("userNameDisplay");
    const loginLogoutLink = document.getElementById("loginLogoutLink");
    const titulo = document.querySelector(".h1-title");

    // Gestión de sesión de usuario
    const getActiveUser = () => {
        const user = localStorage.getItem("activeUser");
        return user ? JSON.parse(user) : null;
    };

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("activeUser");
        updateNavbar();
        // Redirigir al inicio
        window.location.href = "../index.html";
    };

    const updateNavbar = () => {
        const user = getActiveUser();

        if (user) {
            userNameDisplay.textContent = user.name || user.email;
            loginLogoutLink.textContent = "Cerrar sesión";
            loginLogoutLink.href = "#";
            loginLogoutLink.removeEventListener("click", logout);
            loginLogoutLink.addEventListener("click", logout);
        } else {
            userNameDisplay.textContent = "";
            loginLogoutLink.textContent = "Iniciar sesión";
            loginLogoutLink.href = "./login.html";
            loginLogoutLink.removeEventListener("click", logout);
        }
    };

    // Inicializar navbar
    updateNavbar();

    // Menú desplegable del usuario
    userIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        userDropdown.style.display = userDropdown.style.display === "flex" ? "none" : "flex";
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".user-menu-container")) {
            userDropdown.style.display = "none";
        }
    });

    // === Efecto sticky + cambio de tamaño del título ===
    window.addEventListener("scroll", () => {
        titulo.classList.toggle("is-stuck", window.scrollY > 100);
    });
});

document.querySelectorAll('.enlace-interno').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();                    // evita comportamiento por defecto
        window.location.href = this.getAttribute('href');
    });
});