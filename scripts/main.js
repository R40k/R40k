/* --- Cambiar color de la barra cuando se hace scroll --- */
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* --- Inicializar AOS (animaciones) --- */
AOS.init({
  once: true,   // solo 1 vez por elemento
  duration: 800 // milisegundos
});


