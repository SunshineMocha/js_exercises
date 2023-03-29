let arrayOfNumbers = [3, 5, 15, 8, 10, 9, 4, 0, -5, -3];
let arrayOfStrings = ['pippo', 'pluto', 'qui', 'zapotec', 'zara', 'pozac', 'osvaldo', 'paperino'];

// 1) Scrivere una funzione che prenda in input un array di numeri e restituisca un array di stringhe in logica FizzBuzz (stringa vuota con elemento non fizz non buzz)
console.log(arrayOfNumbers.map( n => n % 3 === 0 && n % 5 === 0 ? 'FizzBuzz' : n % 3 === 0 ? 'Fizz' : n % 5 === 0 ? 'Buzz' : ''+ n));
// 2) scrivere una funzione che prende in input un array di numeri e restituisce un array di numeri in cui i positivi sono trasformati in negativi e viceversa
console.log(arrayOfNumbers.map((element) => element === 0 ? element : element *-1));
// 3) Scrivere una funzione che prende in input un array di stringhe e restituisce un array di numeri con la lunghezza delle stringhe
console.log(arrayOfStrings.map((element) => element.length));
// 4) Scrivere una funzione che prende in input un array di stringhe e restituisce solo quelle che contengono la lettera z
console.log(arrayOfStrings.filter((element) => element.includes('z')));
// 5) Scrivere una funzione che prende in input un array di numeri e restituisce tutti i numeri pari
console.log(arrayOfNumbers.filter((element) => element % 2 === 0));
// 6) Scrivere una funzione che dato un array di stringhe restituisce una stringa composta dalle iniziali
console.log(arrayOfStrings.reduce((accumulator, element) => accumulator += element[0], ''));
// 7) Scrivere una funzione che prende in input un array di numeri e restituisce il maggiore 
console.log(arrayOfNumbers.reduce((accumulator, current) => accumulator > current ? accumulator : current));
