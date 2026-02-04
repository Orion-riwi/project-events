// login.js - Mejora con hash simple (no seguro para prod), validación extra
const contenedor = document.querySelector('.contenedor');
const btnSingIn = document.getElementById('btn-sing-in');
const btnSingUp = document.getElementById('btn-sing-up');

btnSingIn?.addEventListener('click', () => contenedor.classList.remove('toggle'));
btnSingUp?.addEventListener('click', () => contenedor.classList.add('toggle'));

const showMessage = (element, text, type) => {
    if (!element) return;
    element.style.display = 'block';
    element.textContent = text;
    element.className = `message ${type}`;
    setTimeout(() => element.style.display = 'none', 1100);
};

// Hash simple 
const simpleHash = (str) => btoa(str); // Base64 como demo

// Registro
const registerForm = document.getElementById('registerForm');
const registerMessage = document.getElementById('registerMessage');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const pass = simpleHash(document.getElementById('regPass').value);

    if (!name || !email || !pass) return showMessage(registerMessage, 'Campos requeridos', 'error');

    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(u => u.email === email)) return showMessage(registerMessage, 'Correo registrado', 'error');

    users.push({ name, email, pass });
    localStorage.setItem('users', JSON.stringify(users));
    showMessage(registerMessage, 'Registro exitoso', 'success');
    registerForm.reset();
    setTimeout(() => contenedor.classList.remove('toggle'), 1000);
});

// Login
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const pass = simpleHash(document.getElementById('loginPass').value);

    // Admin hardcode (mover a users en prod)
    if (email === 'juandaadmin@gmail.com' && pass === simpleHash('1234')) {
        const admin = { name: 'Admin', email, pass };
        localStorage.setItem('activeUser', JSON.stringify(admin));
        showMessage(loginMessage, 'Bienvenido Admin', 'success');
        setTimeout(() => window.location.href = '../html/dashboard.html', 1500);
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.pass === pass);
    if (!user) return showMessage(loginMessage, 'Credenciales incorrectas', 'error');

    localStorage.setItem('activeUser', JSON.stringify(user));
    showMessage(loginMessage, `Bienvenido ${user.name}`, 'success');
    setTimeout(() => window.location.href = '../index.html', 1500);
});