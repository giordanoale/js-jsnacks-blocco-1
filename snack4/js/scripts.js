// In un array sono contenuti i nomi degli invitati alla festa del grande Inzaghi

var teamInzaghi = ["andrea", "tommaso", "alessandro", "samuele", "gianluca"];

//Chiedi all’utente il suo nome.

var utente = prompt("Inserisci il tuo nome");

console.log(utente);

//Comunicagli se può partecipare o no alla festa.

var corretto = false;

for (var i = 0; i < teamInzaghi.length; i++) {
  if (teamInzaghi[i] == utente) {
    corretto = true;
    console.log("Valido!");
  }
}

if (corretto == true) {
  document.getElementById("risposta").innerHTML = "Puoi entrare";
} else {
  document.getElementById("risposta").innerHTML = "You shall not pass!";
}
