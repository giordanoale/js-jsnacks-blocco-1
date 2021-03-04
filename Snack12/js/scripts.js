// Crea un array di numeri interi e fai la somma di tutti gli
// elementi che sono in posizione dispari

var numeri = ["4", "8", "15", "16", "23", "42", "56", "Pippo", "89", "102"];

console.log(numeri);

var somma = 0;

var i = 0;

while (i < numeri.length) {
  if (i % 2 == 1 && !isNaN(numeri[i])) {
    somma += parseInt(numeri[i]);
  }
  i++
}

console.log(somma);
