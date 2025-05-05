// SNACK 1
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile.
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

// Funzione Dichiarativa
console.log(sommaDichiarativa(3, 5));

function sommaDichiarativa(numero1, numero2) {
    return numero1 + numero2;
}

// Funzione Anonima
const sommaAnonima = function (numero1, numero2) {
    return numero1 + numero2;
}

console.log(sommaAnonima(2, 4));

// Arrow Function
const sommaArrow = (numero1, numero2) => numero1 + numero2;

console.log(sommaArrow(1, 2));