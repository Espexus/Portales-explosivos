const botonTema = document.getElementById("boton-tema");
botonTema.addEventListener("click", ()=> {
    const secciones = document.querySelectorAll(".seccion")
    secciones.forEach( seccion=> {
        if (seccion.classList.contains("fondo-verde")){
            seccion.classList.remove("fondo-verde");
        } else {
            seccion.classList.add("fondo-verde")
        }
    });

    const textos = document.querySelectorAll(".texto");
    textos.forEach(texto => {
        if(texto.classList.contains("texto-blanco")) {
            texto.classList.remove("texto-blanco");
        } else {
            texto.classList.add("texto-blanco");
        }
    })

    const titulos1 = document.querySelectorAll(".titulo-cafe, .titulo-blanco");
    titulos1.forEach(titulo => {
        titulo.classList.toggle("titulo-blanco");
        titulo.classList.toggle("titulo-cafe");
    })


})