
window.addEventListener("DOMContentLoaded", function() {
    mostrarPerfil();
});

function iniciarSesion(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let curso = document.getElementById("curso").value.trim();
    let anio = document.getElementById("anio").value.trim();

    if (nombre !== "" && curso !== "" && anio !== "") {

        localStorage.setItem("usuario", nombre);
        localStorage.setItem("curso", curso);
        localStorage.setItem("anio", anio);

       
        localStorage.setItem("sesionIniciada", "si");

      
        window.location.href = "paginaprincipal.html";

    } else {

        alert("Completá los tres campos para ingresar.");

    }
}

function mostrarPerfil() {

    let inicio = document.getElementById("inicioSesion");
    let perfil = document.getElementById("perfilUsuario");

    if (localStorage.getItem("sesionIniciada") === "si") {

      
        inicio.style.display = "none";
        perfil.style.display = "block";

 
        document.getElementById("nombreUsuario").textContent =
            localStorage.getItem("usuario") || "";

        document.getElementById("cursoUsuario").textContent =
            localStorage.getItem("curso") || "";

        document.getElementById("anioUsuario").textContent =
            localStorage.getItem("anio") || "";

    } else {

        inicio.style.display = "block";
        perfil.style.display = "none";
    }
}

function cerrarSesion() {

    localStorage.removeItem("sesionIniciada");

    document.getElementById("perfilUsuario").style.display = "none";
    document.getElementById("inicioSesion").style.display = "block";

    document.getElementById("nombre").value = "";
    document.getElementById("curso").value = "";
    document.getElementById("anio").value = "";
}
