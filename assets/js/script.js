const alumnos = [
    "jose",
    "kaleff",
    "marlon",
    "marc",
    "alejo",
    "julia",
    "cesar"
]

const agregar_alumnos = "aaaaaa"
const agregar_primero = "bbbbb"

const eultimo = document.getElementById("Eultimo");
const aultimo = document.getElementById("Aultimo");
const eprimero = document.getElementById("Eprimero");
const aprimero = document.getElementById("Aprimero");


eultimo.addEventListener("click", () => {
    console.log("eultimo")
})

aultimo.addEventListener("click", () => {

    console.log("antes: ", alumnos)
    alumnos.push(agregar_alumnos);
    // alumnos[alumnos.length] = agregar_alumnos;
    console.log("despues: ", alumnos)

})

eprimero.addEventListener("click", () => {
    console.log("eprimero")
})

aprimero.addEventListener("click", () => {
    console.log("aprimero")
})