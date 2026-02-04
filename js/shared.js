// shared.js - Lógica centralizada para user menu y sesión
document.addEventListener('DOMContentLoaded', () => {
    const userIcon = document.querySelector('.user-icon');
    const userDropdown = document.querySelector('.user-dropdown');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const loginLogoutLink = document.getElementById('loginLogoutLink');

    if (!userIcon || !userDropdown) return; // Robustez

    const getActiveUser = () => {
        const user = localStorage.getItem('activeUser');
        return user ? JSON.parse(user) : null;
    };

    const logout = (e) => {
        e?.preventDefault();
        localStorage.removeItem('activeUser');
        updateNavbar();
        window.location = '../index.html'; // Unificar redirección
    };

    const updateNavbar = () => {
        const user = getActiveUser();
        if (user) {
            userNameDisplay.textContent = user.name || user.email.split('@')[0];
            loginLogoutLink.textContent = 'Cerrar sesión';
            loginLogoutLink.href = '#';
            loginLogoutLink.addEventListener('click', logout);
        } else {
            userNameDisplay.textContent = '';
            loginLogoutLink.textContent = 'Iniciar sesión';
            loginLogoutLink.href = './html/login.html';
            loginLogoutLink.removeEventListener('click', logout);
        }
    };

    updateNavbar();

    // Enlaces internos suaves
    document.querySelectorAll('.enlace-interno').forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = enlace.getAttribute('href');
        });
    });
});