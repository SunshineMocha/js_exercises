// 1) Scrivere una funzione che prenda in input un array di numeri e restituisca un array di stringhe in logica FizzBuzz (stringa vuota con elemento non fizz non buzz)

/* const numbers = [3, 5, 15, 8, 12, 2];
function convertArrayInFizzBuzz(array){
    const tempArray = [];
     for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element % 3 === 0 && element % 5 === 0) {
            tempArray[i] = 'FizzBuzz';
        }
        else if (element % 3 === 0) {
            tempArray[i] = 'Fizz';
        }
        else if (element % 5 === 0) {
            tempArray[i] = 'Buzz';
        }
        else{
            tempArray[i] = "" + element;
        }
     }
     return tempArray;
 }
 console.log(convertArrayInFizzBuzz(numbers)); // ['Fizz','Buzz','FizzBuzz','8','Fizz','2'] */

// 2) scrivere una funzione che prende in input un array di numeri e restituisce un array di numeri in cui i positivi sono trasformati in negativi e viceversa

/* let numbers1 = [-2,-4, 8, -3, -5];
    function invertNumbers(array) {
    const tempArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const risultato = element * -1;
        tempArray.push(risultato);
    }
    return tempArray;
}
console.log(invertNumbers(numbers1)); */

//3) Scrivere una funzione che prende in input un array di stringhe e restituisce un array di numeri con la lunghezza delle stringhe

/* const strings = ['pippo', 'pluto', 'qui'];

function lengthOfElements(array){
    const tempArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
           tempArray.push(element.length);
    }
    return tempArray;
}

console.log(lengthOfElements(strings)); //[5, 5, 3] */

// 4) Scrivere una funzione che prende in input un array di stringhe e restituisce solo quelle che contengono la lettera z
/*
const strings2 = ['pippo', 'pluto', 'qui', 'zapotec', 'zara', 'pozac'];

function onlyElementsWithZ(array){
    const tempArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        for (let j = 0; j < element.length; j++) {
            const check = element[j];
            if(check === 'z'){
                tempArray.push(element);
            }
        }
    }
    return tempArray;
}

console.log(onlyElementsWithZ(strings2)); // ['zapotec']
*/

// 5) Scrivere una funzione che prende in input un array di numeri e restituisce tutti i numeri pari
/*
const numbers2 = [-3, 5, 15, -8, 12, 2, 0, 18];

function onlyEven(array){
    const tempArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element % 2 === 0){
            tempArray.push(element);
        }
    }
    return tempArray;
}

console.log(onlyEven(numbers2));
*/

//6) Scrivere una funzione che dato un array di stringhe restituisce una stringa composta dalle iniziali
/*
const strings3 = ['pippo', 'osvaldo', 'paperino'];

function sumFirstChar(array){
    let tempArray = '';
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        tempArray = tempArray + element[0];
    }
    return tempArray;
}

console.log(sumFirstChar(strings3)); // pop
*/

// 7) Scrivere una funzione che prende in input un array di numeri e restituisce il maggiore 
/*
const numbers3 = [-3, 5, 15, -8, 12, 2, 0, 20];

function maxElement(array){
    let tempArray = '';
    for (let i = 0; i < array.length; i++){
        const element = array[i];
        if(element > tempArray){
            tempArray = element;
        }
    }
    return tempArray;
}

console.log(maxElement(numbers3)); //15
*/

/*
function range(start, end) {
    let tempArray = [];
    for (let i = end; i >= start; i--) {
        tempArray.push(end-i);

    }        
    return tempArray;
}

function sum(array) {
    let tempNumber = 0;
     for (let i = 0; i < array.length; i++) {
         const element = array[i];
         tempNumber = tempNumber + element;
     }
     return tempNumber;    
}

console.log(sum(range(0,3))); 
*/

/*
let letters=['a','b','c','d'];

function reverse(array) {
    let tempArray = [];
    for (let i = array.length; i >= 0 ; i--){
        const element = array[i];
        tempArray.push(element);
    }
    return tempArray;
}

console.log(reverse(letters));
*/