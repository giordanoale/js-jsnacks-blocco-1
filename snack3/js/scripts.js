// Il software deve chiedere per 10 volte all’utente di inserire un numero.

var risultato = 0;

for (var i = 0; i < 10; i++ ) {
  var numero = parseInt(prompt("inserisci un numero"));
  risultato = risultato + numero;
}

//Il programma stampa la somma di tutti i numeri inseriti.

if (isNaN(risultato)){
  alert("Ricarica la pagina e inserisci un numero");
}

document.getElementById("risposta").innerHTML = risultato;
