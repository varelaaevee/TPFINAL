
function mostrarTemas() {
    let temas = document.getElementById("temas");
    let boton = document.querySelector(".enlace");

    if (!temas || !boton) {
        return;
    }

    if (temas.style.display === "none" || temas.style.display === "") {
        temas.style.display = "block";
        boton.textContent = "Ocultar los temas ↑";
        sessionStorage.setItem("temasAbiertos", "si");
    } else {
        temas.style.display = "none";
        boton.textContent = "Ver los temas ↓";
        sessionStorage.setItem("temasAbiertos", "no");
    }
}

window.addEventListener("DOMContentLoaded", function() {
    let temas = document.getElementById("temas");
    let boton = document.querySelector(".enlace");

    if (temas && boton) {
        if (sessionStorage.getItem("temasAbiertos") === "si") {
            temas.style.display = "block";
            boton.textContent = "Ocultar los temas ↑";
        } else {
            temas.style.display = "none";
            boton.textContent = "Ver los temas ↓";
        }
    }

    let posicion = sessionStorage.getItem("posicionPagina");

    if (posicion !== null) {
        window.scrollTo(0, Number(posicion));
    }
});

window.addEventListener("beforeunload", function() {
    sessionStorage.setItem("posicionPagina", window.scrollY);
});
