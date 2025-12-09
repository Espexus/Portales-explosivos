const form = document.getElementById("formulario");
const check = document.getElementById("checkbox");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!check.checked) {
        alert("Acepta tu juramento de pólvora por favor")
        return
    } 
    window.location.href = "html/principal.html";

})