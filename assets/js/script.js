const alumnos = [
    "jose",
    "kaleff",
    "marlon",
    "marc",
    "alejo",
    "julia",
    "cesar"
]

const lista = document.getElementById("lista");
lista.textContent = alumnos;

const agregar_alumnos = "aaaaaa"
const agregar_primero = "bbbbb"

const eultimo = document.getElementById("Eultimo");
const aultimo = document.getElementById("Aultimo");
const eprimero = document.getElementById("Eprimero");
const aprimero = document.getElementById("Aprimero");


eultimo.addEventListener("click", () => {

    alumnos.pop();
    lista.textContent = alumnos;

})
aultimo.addEventListener("click", () => {


    alumnos.push(agregar_alumnos);
    // alumnos[alumnos.length] = agregar_alumnos;
    lista.textContent = alumnos;

})

eprimero.addEventListener("click", () => {

    alumnos.shift();
    lista.textContent = alumnos;
})

aprimero.addEventListener("click", () => {
    console.log("aprimero")
    alumnos.unshift(agregar_primero);
    lista.textContent = alumnos;
})