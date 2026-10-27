
function mostrarTemas() {
    let temas = document.getElementById("temas");
    let boton = document.querySelector(".enlace");

    if (temas.style.display === "none" || temas.style.display === "") {
        temas.style.display = "block";
        boton.textContent = "Ocultar los temas ↑";
    } else {
        temas.style.display = "none";
        boton.textContent = "Ver los temas ↓";
    }
}