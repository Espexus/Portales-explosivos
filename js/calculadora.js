const formulario = document.getElementById("formulario-calculadora");
const respuesta = document.getElementById("respuesta-calculadora");
formulario.addEventListener("submit", (e)=> {
    e.preventDefault();
    const datos = new FormData(formulario);

    const nombre = datos.get("nombre");
    const tiempo = parseInt(datos.get("tiempo"));
    const cantidad = parseInt(datos.get("cantidad"));
    const reflejos = parseInt(datos.get("reflejos"));

    if (!nombre || !tiempo || !cantidad || !reflejos) {
        alert("Debes llenar todos los datos");
        return
    }

    const puntuacion = tiempo * cantidad * reflejos;

    switch (true) {
        case puntuacion <= 8:
            respuesta.textContent = `Ok, ${nombre} Lo más probable es que no pases del nivel 3 hijo, entrena más`;
            break;
        case puntuacion <= 36:
            respuesta.textContent = `Ok, ${nombre} Debemos reconocer tu potencial, eres un promesa para el futuro, pero por ahora tu suerte es escasa, nivel 7 máximo`;
            break;
        default:
            respuesta.textContent = `Ok, ${nombre} Eres uno de los elegidos, bienvenido a tu nuevo hogar, la bomba house. Ganarás el juego`;
            break;
    }
})