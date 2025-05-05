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

// SNACK 2
// Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
const quadrato = (numero) => numero * numero;

console.log(quadrato(5));

// SNACK 3
// Definisci una funzione eseguiOperazione che accetta tre parametri:
// due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.
const sottrazione = (numero1, numero2) => numero1 - numero2;
const resto = (numero1, numero2) => numero1 % numero2;

const eseguiOperazione = (numero1, numero2, operazione) => {
    return operazione(numero1, numero2);
}

console.log(eseguiOperazione(4, 2, sottrazione));
console.log(eseguiOperazione(5, 2, resto));

// SNACK 4
// Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
const creaTimer = (tempo) => {
    setTimeout(() => {
        console.log("Tempo scaduto!")
    }, tempo)
}

creaTimer(1000);

// SNACK 5
// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
// Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.
const messaggioTemporizzato = (messaggio) => {
    setInterval(() => {
        console.log(messaggio)
    }, 1000)
}

messaggioTemporizzato("Snack 5");

// SNACK 6
// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo
// e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.
const creaContatoreAutomatico = (tempo) => {
    let contatore = 0;
    const id = setInterval(() => {
        if (contatore < 3) {    // Stoppa dopo 3 iterazioni
            contatore++
            console.log(contatore)
        } else {
            clearInterval(id)
        }
    }, tempo)
}

creaContatoreAutomatico(1000);

// SNACK 7
// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop.
// Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
const eseguiEferma = (messaggio, intervallo, tempoStop) => {
    let tempoAttuale = 0;
    const id = setInterval(() => {
        if (tempoAttuale < tempoStop) {
            console.log(messaggio)
            tempoAttuale += 1000
        } else {
            clearInterval(id)
        }
    }, intervallo)
}

eseguiEferma("Snack 7", 1000, 3000);