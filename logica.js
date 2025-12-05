//menu hamburguesa 
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });



  //login-inicio de sesion
    const form = document.getElementById('loginForm');
    const mensaje = document.getElementById('mensaje');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita recargar la página

      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;

      // Validación básica
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

      // Aquí podrías guardar datos en localStorage o enviarlos a un backend en el futuro
      // localStorage.setItem("usuario", JSON.stringify({nombre, email}));
    });