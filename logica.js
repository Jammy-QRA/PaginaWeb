// -------------------- MENÚ HAMBURGUESA --------------------
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav ul");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// -------------------- LOGIN --------------------
const loginForm = document.getElementById("loginForm");
const loginMensaje = document.getElementById("mensaje");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
      loginMensaje.textContent = "Por favor, completa todos los campos.";
      loginMensaje.style.color = "red";
      return;
    }

    // Simulación de login exitoso
    if (email === "usuario@ejemplo.com" && password === "123456") {
      loginMensaje.textContent = "¡Bienvenido/a! Inicio de sesión exitoso.";
      loginMensaje.style.color = "green";
    } else {
      loginMensaje.textContent = "Correo o contraseña incorrectos.";
      loginMensaje.style.color = "red";
    }
  });
}

// -------------------- REGISTRO --------------------
const registroForm = document.getElementById("registrarseForm");
const registroMensaje = document.createElement("p"); 
if (registroForm) {
  registroForm.parentNode.insertBefore(registroMensaje, registroForm.nextSibling);

  registroForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("contraseña").value;
    const confirmPassword = document.getElementById("confirmarcontraseña").value;

    if (!nombre || !email || !password || !confirmPassword) {
      registroMensaje.textContent = "Por favor, completa todos los campos.";
      registroMensaje.style.color = "red";
      return;
    }

    if (password !== confirmPassword) {
      registroMensaje.textContent = "Las contraseñas no coinciden.";
      registroMensaje.style.color = "red";
      return;
    }

    if (password.length < 6) {
      registroMensaje.textContent = "La contraseña debe tener al menos 6 caracteres.";
      registroMensaje.style.color = "red";
      return;
    }

    // Simulación de registro exitoso
    registroMensaje.textContent = `¡Bienvenido/a, ${nombre}! Tu cuenta ha sido creada.`;
    registroMensaje.style.color = "green";
    registroForm.reset();
  });
}

// -------------------- MODALES DE VIDEO --------------------
function abrirVideo(id) {
  const modal = document.getElementById(`modalVideo${id}`);
  if (modal) modal.style.display = "flex";
}

function cerrarVideo(id) {
  const modal = document.getElementById(`modalVideo${id}`);
  if (modal) modal.style.display = "none";
}

// Ejemplo de uso en HTML:
// <a href="#" onclick="abrirVideo(1)">Ver tutorial</a>
// <span class="cerrar" onclick="cerrarVideo(1)">&times;</span>
