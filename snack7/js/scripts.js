// Stampa le potenze di 2 fino a 1000.


var risultato;

for (var i = 0; i < 1000; i++) {
  risultato = Math.pow(2, i);
  if (risultato <= 1000) {
    console.log(risultato);
  }
}
