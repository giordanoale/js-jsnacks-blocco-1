// Generatore di “nomi cognomi” casuali: prendendo una lista
// di nomi e una lista di cognomi, Gatsby vuole generare una
// falsa lista di 3 invitati.

var cognomi = ["Bersani", "Cuperlo", "Civati", "Renzi", "Veltroni"];
var nomi = ["Pierluigi", "Gianni", "Giuseppe", "Matteo", "Walter"];
var i;
var j;

for (var k = 0; k < 3; k++ ) {

  i = Math.floor(Math.random() * cognomi.length);
  j = Math.floor(Math.random() * nomi.length);
  console.log(nomi[j] + " " + cognomi[i]);

}

//Il Metodo Madrigali

console.log("Il metodo Madrigali");

var cognomi = ["Bersani", "Cuperlo", "Civati", "Renzi", "Veltroni"];
var nomi = ["Pierluigi", "Gianni", "Giuseppe", "Matteo", "Walter"];
var iscritti = [];

for (var k = 0; k < 3; k++ ) {

  do {

    var i = Math.floor(Math.random() * cognomi.length);
    var j = Math.floor(Math.random() * nomi.length);
    var nomeCompleto = nomi[j] + " " + cognomi[i];

  } while(iscritti.includes(nomeCompleto));

  iscritti.push(nomi[j] + " " + cognomi[i]);

}

console.log(iscritti);
