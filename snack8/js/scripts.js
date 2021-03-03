// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.
var numero;

do {
  numero = prompt("Inserisci un numero di 4 cifre");
} while (numero.length != 4);

var risultato = 0;

for (i = 0; i < numero.length; i++) {

  risultato += parseInt(numero[i]);
  console.log(risultato);

}
