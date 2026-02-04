# WAKA - Plataforma de Eventos Musicales.

"La energía de WAKA vibra contigo." - Plataforma especializada en la venta de eventos, conciertos, festivales y experiencias exclusivas en Colombia.

---

## Descripción del Proyecto.

**WAKA** es una plataforma web moderna e intuitiva diseñada para conectar a las personas con los mejores momentos de su vida musical. El proyecto ofrece una experiencia única para descubrir, explorar y gestionar eventos musicales, conciertos y festivales en Colombia.

### Características Principales.

- **Video Backgrounds**: Videos de fondo dinámicos en múltiples páginas.
- **Carrusel de Imágenes**: Carrusel automático con imágenes de eventos.
- **Sistema de Autenticación**: Inicio de sesión/Cierre de sesión con localStorage.
- **Búsqueda**: Funcionalidad de búsqueda en la navegación.
- **Galería**: Galería de imágenes de eventos con efectos hover.
- **Diseño Responsivo**: Adaptable a diferentes tamaños de pantalla.
- **Efectos Glassmorphism**: Diseño moderno con desenfoque de fondo.
- **Múltiples Páginas**: Home, Eventos, Convenios, Información, Login, Dashboard.

## Tecnologías Utilizadas.

| Tecnología | Propósito |
|------------|-----------|
| **HTML5** | Estructura semántica del sitio |
| **CSS3** | Estilos, animaciones y diseño responsivo |
| **JavaScript (ES6+)** | Interactividad y lógica del cliente |
| **localStorage** | Almacenamiento de sesión de usuario |
| **Font Awesome** | Iconos (integrado vía Google Fonts) |
| **Google Fonts** | Tipografías (Montserrat, Bitter, Cormorant) |

---

## Descripción de Páginas.

### **index.html** (Home).
- Video de fondo animado.
- Tarjeta de video con eslogan principal.
- Carrusel de imágenes automáticas.
- Secciones "Sobre Nosotros" y "Quiénes Somos".
- Galería de eventos.
- Footer con enlaces de navegación.

### **eventos.html** (Eventos).
- Listado de eventos disponibles.
- Búsqueda de eventos.
- Información detallada de cada evento.

### **eventos-detalle.html** (Detalle de Evento).
- Información completa de un evento específico.
- Fecha, hora, ubicación y precio.
- Opción de compra de tickets.

### **convenios.html** (Convenios).
- Alianzas con otros establecimientos.
- Beneficios exclusivos.
- Información de socios.

### **info.html** (Información).
- Preguntas frecuentes.
- Políticas de privacidad.
- Información de soporte.
- Sección de contacto.

### **login.html** (Inicio de Sesión).
- Formulario de autenticación.
- Validación de credenciales.
- Persistencia de sesión con localStorage.

### **dashboard.html** (Panel de Usuario).
- Perfil del usuario.
- Historial de eventos.
- Configuración de cuenta.

---

## Funcionalidades Clave.

### Sistema de Usuario

```javascript
// shared.js - Gestión de sesión
- localStorage.getItem('activeUser') // Obtener usuario activo
- localStorage.setItem('activeUser', JSON.stringify(user)) // Guardar usuario
- localStorage.removeItem('activeUser') // Cerrar sesión
```

### Effects Visuales.

- **Animaciones de entrada**: FadeIn suave al cargar.
- **Efecto hover**: Escala y sombras en imágenes.
- **Glassmorphism**: Desenfoque de fondo (backdrop-filter).
- **Transiciones**: Movimientos suaves entre estados.

### Diseño Responsivo.

- Grid adaptativo con `minmax()` y `auto-fit`.
- Media queries para diferentes dispositivos.
- Imágenes con `object-fit: cover`.

---

## Cómo Ejecutar.

1. **Clonar o descargar** el proyecto.
2. **Abrir** la carpeta del proyecto.
3. **Ejecutar** `index.html` en tu navegador preferido:
   - Doble clic en `index.html`.
   - O usar extensión "Live Server" en VSCode.
   - O servir con cualquier servidor web local.

```bash
# Ejemplo con Python
cd "HTML DS/Project Website Events (célula)/"
python -m http.server 8000
# Luego abrir http://localhost:8000
```

---

## Notas de Desarrollo.

- **Navegación**: Todas las páginas comparten estructura de header y footer.
- **Assets**: Los videos deben estar en `./img/vid/` con formatos MP4.
- **Imágenes**: Formatos soportados: JPG, PNG, AVIF, WebP.
- **CSS**: Usa variables CSS para colores principales.
- **JavaScript**: Funciones modulares por página.

### Colores Principales.

```css
--primary-color: #a879ff;    /* Púrpura principal */
--secondary-color: #d6c1ff;  /* Púrpura claro */
--background-dark: rgba(0, 0, 0, 0.4);
--text-light: #ffffff;
```

---

---

## Estructura del Proyecto.

```
Project Website Events (célula)/
├── index.html              # Página principal (Home)
├── html/
│   ├── eventos.html        # Listado de eventos
│   ├── eventos-detalle.html # Detalle de un evento específico
│   ├── convenios.html      # Página de convenios y alianzas
│   ├── info.html           # Información general
│   ├── login.html          # Página de inicio de sesión
│   └── dashboard.html      # Panel de usuario
├── js/
│   ├── shared.js           # Lógica compartida (menú de usuario, sesión)
│   ├── script.js           # Funcionalidad principal
│   ├── eventos.js          # Lógica de eventos
│   ├── eventos-listado.js  # Listado de eventos
│   ├── eventos-dinamicos.js # Carga dinámica de eventos
│   ├── evento-detalle.js   # Funcionalidad de detalle de evento
│   ├── login.js            # Lógica de autenticación
│   ├── info.js             # Funcionalidad de información
│   └── dashboard.js        # Lógica del dashboard
├── styles/
│   ├── styles.css          # Estilos principales
│   ├── eventos.css         # Estilos de eventos
│   ├── convenios.css       # Estilos de convenios
│   ├── login.css           # Estilos de login
│   ├── dashboard.css       # Estilos de dashboard
│   └── info.css            # Estilos de información
├── img/
│   ├── logo.png            # Logo de WAKA
│   ├── vid/                # Videos de fondo
│   ├── img-index/          # Imágenes del index
│   ├── sescion-img-index/  # Imágenes de sección
│   └── eventos/            # Imágenes de eventos
└── .git/                   # Control de versiones Git
```

---

<div align="center">

**WAKA • Música, energía y experiencias únicas**

*"La energía de WAKA vibra contigo"*

</div>

