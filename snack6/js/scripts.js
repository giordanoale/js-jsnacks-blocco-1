// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

do {
  var numero = parseInt(prompt("Inserisci un numero"));
} while (isNaN(numero);)

for (var i = 1; i < numero; numero--) {
  console.log( Math.pow(numero, 3) );
}
