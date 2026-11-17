const Nodo = require("../src/Node.js");

const attention1 = new Nodo ({
    fecha:"02/02",
    motivo:"Vacunación",
    veterinario:"Dra. Ríos",
    costo:85000,
})

const attention2 = new Nodo ({
    fecha:"15/03",
    motivo:"control de peso",
    veterinario:"Dr. Gómez",
    costo:40000,
})

const attention3 = new Nodo ({
    fecha:"20/05",
    motivo:"limpieza dental",
    veterinario:"Dra. Ríos,",
    costo:150000,
})

attention1.siguientes = attention2;
attention2.siguientes = attention3;
attention3.siguientes = null;

const cabeza = attention1;

let actual = cabeza;

while (actual !== null ){
    console.log ('Nodo:', actual);
    actual = actual.siguientes;
}

let i = 0;
actual = cabeza;

while (actual !== null){
    i += actual.dato.costo;
    actual = actual.siguientes;
}

console.log('Costo total de atenciones: $', i);
