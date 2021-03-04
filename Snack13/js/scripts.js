// Crea due array che hanno un numero di elementi diversi.
//Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

var cose1 = ["penna", "34", "Giovanni", "Si", "Parigi"];
var cose2 = ["albero", "moffetta", "Equilibrio"];

var i = 0;

do {

  var utente = prompt("Scrivi qualcosa qui sotto");

  if (cose1.length < cose2.length) {
    cose1.push(utente);
  } else if (cose1.length > cose2.length) {
    cose2.push(utente);
  }

  i++
} while (cose1.length == cose2.length)

console.log(cose1);
console.log(cose2);
