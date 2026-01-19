let alumnos = [
    "jose",
    "kaleff",
    "marlon",
    "marc",
    "alejo",
    "julia",
    "cesar"
]

const alumnos_desordenados = [
    "jose",
    "kaleff",
    "marlon",
    "marc",
    "alejo",
    "julia",
    "cesar"
];

const lista = document.getElementById("lista");
lista.textContent = alumnos;

const agregar_alumnos = "aaaaaa"
const agregar_primero = "bbbbb"

const eultimo = document.getElementById("Eultimo");
const aultimo = document.getElementById("Aultimo");
const eprimero = document.getElementById("Eprimero");
const aprimero = document.getElementById("Aprimero");
const ordenar = document.getElementById("ordenar");
const eliminar_quinto = document.getElementById("eliminar_quinto");
const replace_a = document.getElementById("replace_a");


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

ordenar.addEventListener("click", () => {
    console.log("ordenar")
    alumnos.sort((a, b) => b.localeCompare(a));//ordenarlo de mayor a menor 
    // alumnos.reverse();//ordenarlo de menor a mayor
    lista.textContent = alumnos;
});


ordenar.addEventListener("dblclick", () => {
    console.log("desordenar", alumnos_desordenados)
    alumnos = alumnos_desordenados;
    lista.textContent = alumnos;
})


// eliminar º5

eliminar_quinto.addEventListener("click", () => {
    alumnos.splice(4, 1);
    lista.textContent = alumnos;
})


replace_a.addEventListener("click", () => {
    alumnos[4] = alumnos[4].replace("a", "b");
    console.log("aqui", alumnos)
    lista.textContent = alumnos;
})
