//menu hamburguesa 
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav ul");

// Evento al hacer clic en el botón
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active"); // alterna la clase "active"
});




  //login-inicio de sesion
    const form = document.getElementById('loginForm');
    const mensaje = document.getElementById('mensaje');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita recargar la página

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;

      // Validación básica para que no se deje espacios en blanco 
      if (email === "" || password === "") {
        mensaje.textContent = "Por favor, completa todos los campos.";
        mensaje.style.color = "red";
        return;
      }

      // Simulación de login exitoso
      if (email === "usuario@ejemplo.com" && password === "123456") {
        mensaje.textContent = "¡Bienvenido/a! Inicio de sesión exitoso.";
        mensaje.style.color = "green";
      } else {
        mensaje.textContent = "Correo o contraseña incorrectos.";
        mensaje.style.color = "red";
      }
    });


    //registro
      const formulario = document.getElementById('registrarseForm');
    

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que se recargue la página

      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('contraseña').value;
      const confirmPassword = document.getElementById('confirmarcontraseña').value;

      // Validaciones básicas
      if (password !== confirmPassword) {
        mensaje.textContent = "Las contraseñas no coinciden.";   //vaidacion para que a la hora de registrarse la contraseña y su confirmacion sean iguales
        mensaje.style.color = "red";
        return;
      }

      if (password.length < 6) {
        mensaje.textContent = "La contraseña debe tener al menos 6 caracteres.";
        mensaje.style.color = "red";
        return;
      }

      // Simulación de registro exitoso
      mensaje.textContent = `¡Bienvenido/a, ${nombre}! Tu cuenta ha sido creada.`;
      mensaje.style.color = "green";

     
    });

// videos


function abrirVideo1(){ document.getElementById("modalVideo1").style.display="flex"; }
function cerrarVideo1(){ document.getElementById("modalVideo1").style.display="none"; }

function abrirVideo2(){ document.getElementById("modalVideo2").style.display="flex"; }
function cerrarVideo2(){ document.getElementById("modalVideo2").style.display="none"; }

function abrirVideo3(){ document.getElementById("modalVideo3").style.display="flex"; }
function cerrarVideo3(){ document.getElementById("modalVideo3").style.display="none"; }

function abrirVideo4(){ document.getElementById("modalVideo4").style.display="flex"; }
function cerrarVideo4(){ document.getElementById("modalVideo4").style.display="none"; }

function abrirVideo5(){ document.getElementById("modalVideo5").style.display="flex"; }
function cerrarVideo5(){ document.getElementById("modalVideo5").style.display="none"; }

function abrirVideo6(){ document.getElementById("modalVideo6").style.display="flex"; }
function cerrarVideo6(){ document.getElementById("modalVideo6").style.display="none"; }

