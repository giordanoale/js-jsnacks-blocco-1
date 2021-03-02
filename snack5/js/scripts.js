//Crea un array vuoto.

var insieme = [];

// Chiedi per 6 volte all’utente di inserire un numero

for (var i = 0; i < 6; i++) {

  var numero = parseInt(prompt("Inserisci un numero"));
  console.log(numero);

// se è dispari inseriscilo nell’array.

  if (numero % 2 == 1) {
    insieme.push(numero);
  }

}

console.log(insieme);
