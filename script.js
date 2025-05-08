// // SNACK 1
// // Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// // Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile.
// // Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

// // Funzione Dichiarativa
// console.log(sommaDichiarativa(3, 5));

// function sommaDichiarativa(numero1, numero2) {
//     return numero1 + numero2;
// }

// // Funzione Anonima
// const sommaAnonima = function (numero1, numero2) {
//     return numero1 + numero2;
// }

// console.log(sommaAnonima(2, 4));

// // Arrow Function
// const sommaArrow = (numero1, numero2) => numero1 + numero2;

// console.log(sommaArrow(1, 2));



// // SNACK 2
// // Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
// const quadrato = (numero) => numero * numero;

// console.log(quadrato(5));



// // SNACK 3
// // Definisci una funzione eseguiOperazione che accetta tre parametri:
// // due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.
// const sottrazione = (numero1, numero2) => numero1 - numero2;
// const resto = (numero1, numero2) => numero1 % numero2;

// const eseguiOperazione = (numero1, numero2, operazione) => {
//     return operazione(numero1, numero2);
// }

// console.log(eseguiOperazione(4, 2, sottrazione));
// console.log(eseguiOperazione(5, 2, resto));



// // SNACK 4
// // Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
// const creaTimer = (tempo) => {
//     setTimeout(() => {
//         console.log("Tempo scaduto!")
//     }, tempo)
// }

// creaTimer(1000);



// // SNACK 5
// // Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
// // Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.
// const messaggioTemporizzato = (messaggio) => {
//     setInterval(() => {
//         console.log(messaggio)
//     }, 1000)
// }

// messaggioTemporizzato("Snack 5");



// // SNACK 6
// // Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo
// // e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.
// const creaContatoreAutomatico = (tempo) => {
//     let contatore = 0;
//     const id = setInterval(() => {
//         if (contatore < 3) {    // Stoppa dopo 3 iterazioni
//             contatore++
//             console.log(contatore)
//         } else {
//             clearInterval(id)
//         }
//     }, tempo)
// }

// creaContatoreAutomatico(1000);



// // SNACK 7
// // Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop.
// // Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
// const eseguiEferma = (messaggio, intervallo, tempoStop) => {
//     let tempoAttuale = 0;
//     const id = setInterval(() => {
//         if (tempoAttuale < tempoStop) {
//             console.log(messaggio)
//             tempoAttuale += 1000
//         } else {
//             clearInterval(id)
//         }
//     }, intervallo)
// }

// eseguiEferma("Snack 7", 1000, 3000);



// // SNACK 8
// // Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero.
// // Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.
// const contoAllaRovescia = (numero) => {
//     const id = setInterval(() => {
//         if (numero > 0) {
//             console.log(numero)
//             numero--;
//         } else {
//             clearInterval(id)
//             console.log("Tempo scaduto!")
//         }
//     }, 1000)
// }

// contoAllaRovescia(5);



// // SNACK 9
// // Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.
// // Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
// const sequenzaOperazioni = (operazioni, intervallo) => {
//     operazioni.forEach((operazione, indice) => {
//         setTimeout(() => {
//             operazione();
//         }, intervallo * indice)
//     })
// }

// const operazioni = [
//     () => console.log("Operazione 1"),
//     () => console.log("Operazione 2"),
//     () => console.log("Operazione 3")
// ];

// sequenzaOperazioni(operazioni, 1000);



// // SNACK 10
// // Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.
// // Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.
// function creaThrottler(callback, limite) {

//     let ultimaEsecuzione = 0;

//     return function (...args) {

//         const ora = Date.now();

//         if (ora - ultimaEsecuzione >= limite) {
//             ultimaEsecuzione = ora;
//             callback(...args);
//         }
//     }
// }

// const throttledLog = creaThrottler(() => console.log
//     ("Eseguito!"), 2000)

// throttledLog();
// throttledLog();
// setTimeout(throttledLog, 2500);



// // CODE QUESTION 1
// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = 'Double Cheese Burger';
// secondBurger.weight = 500;

// console.log(hamburger.name); // Double Cheese Burger
// console.log(secondBurger.name); // Double Cheese Burger

// // Viene creato un solo  oggetto in memoria



// // CODE QUESTION 2
// const hamburger = {
// 	name: "Cheese Burger",
// 	weight: 250,
// 	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
// };

// const secondBurger = {...hamburger};
// secondBurger.ingredients[0] = "Salad";

// console.log(hamburger.ingredients[0]); // Salad
// console.log(secondBurger.ingredients[0]); // Salad

// // Vengono creati 3 oggetti in memoria



// // CODE QUESTION 3
// const hamburger = {
// 	name: "Cheese Burger",
// 	weight: 250,
// 	maker: {
// 		name: "Anonymous Chef",
// 		restaurant: {
// 			name: "Hyur's Burgers",
// 			address: "Main Street, 123",
// 			isOpen: true,
// 		},
// 		age: 29
// 	}
// };

// const secondBurger = structuredClone(hamburger);
// const thirdBurger = structuredClone(hamburger);

// // Vengono creati 9 oggetti in memoria



// // CODE QUESTION 4
// const chef = {
//     name: "Chef Hyur",
//     age: 29,
//     makeBurger: (num = 1) => {
//         console.log(`Ecco ${num} hamburger per te!`);
//     },
// }

// const restaurant = {
//     name: "Hyur's Burgers",
//     address: {
//         street: 'Main Street',
//         number: 123,
//     },
//     openingDate: new Date(2025, 3, 11),
//     isOpen: false,
// };

// // Il miglior metodo per clonare l'oggetto chef è lo spread operator, perchè contiene una funzione e non ci sono oggetti annidati all'interno
// // Il miglior metodo per clonare l'oggetto restaurant è lo structured clone perchè è un oggetto con proprietà complesse ma privo di funzioni



// // CODE QUESTION 5
// const hamburger = {
//     name: "Cheese Burger",
//     weight: 250,
//     maker: {
//         name: "Anonymous Chef",
//         restaurant: {
//             name: "Hyur's Burgers",
//             address: "Main Street, 123",
//             isOpen: true,
//         },
//         age: 29
//     }
// };

// const newRestaurant = { ...hamburger.maker.restaurant };
// newRestaurant.name = "Hyur's II";
// newRestaurant.address = "Second Street, 12";
// const secondBurger = { ...hamburger };
// secondBurger.maker.restaurant = newRestaurant;
// secondBurger.maker.name = "Chef Hyur";

// console.log(hamburger.maker.name); // Chef Hyur
// console.log(secondBurger.maker.name); // Chef Hyur
// console.log(hamburger.maker.restaurant.name); // Hyur's II
// console.log(secondBurger.maker.restaurant.name); // Hyur's II

// // Vengono creati 5 oggetti



// // CODE QUESTION 6
// const chef = {
//     name: "Chef Hyur",
//     age: 29,
//     makeBurger: (num = 1) => {
//         console.log(`Ecco ${num} hamburger per te!`);
//     },
//     restaurant: {
//         name: "Hyur's Burgers",
//         welcomeClient: () => {
//             console.log("Benvenuto!");
//         },
//         address: {
//             street: 'Main Street',
//             number: 123,
//             showAddress: () => {
//                 console.log("Main Street 123");
//             }
//         },
//         isOpen: true,
//     }
// }

// const chefCopy = {
//     ...chef,
//     restaurant: {
//         ...chef.restaurant,
//         address: {
//             ...chef.restaurant.address
//         }
//     }
// }



// CODE QUESTION 7
const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}

function deepCopy(obj) {
    if (typeof obj !== "object") {
        return obj;
    }
    const copy = {};
    for (const key in obj) {
        const value = obj[key];
        if (typeof value !== "object") {
            copy[key] = value;
        } else {
            copy[key] = deepCopy(value);
        }
    }
    return copy;
}

const chefCopy = deepCopy(chef);