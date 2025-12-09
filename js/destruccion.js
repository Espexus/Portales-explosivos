const boton = document.getElementById("destruccion");
const espacio = document.getElementById("mensaje-destruccion")
boton.addEventListener("click", ()=> {
    console.log("hola");
    espacio.classList.remove("oculto");
    espacio.classList.add("centro");
    console.log(espacio.classList);

    cuentaRegresiva();
})

const cuenta = document.getElementById("cuenta");
function cuentaRegresiva() {
    let numero = 10;

    const intervalo = setInterval(() => {
    numero--;
    cuenta.textContent = numero;

    if (numero <= 0) {
        clearInterval(intervalo);
        const cuerpo = document.getElementById("body");
        cuerpo.classList.add("oculto");
    }
}, 1000);


}