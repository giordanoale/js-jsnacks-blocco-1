//L’utente inserisce due numeri in successione, con due prompt.

var numero1 = parseInt(prompt("Inserisci il primo numero"));

if (isNaN(numero1)) {

  alert("Ricarica la pagina e inserisci un numero");

} else {

  var numero2 = parseInt(prompt("Inserisci il secondo numero"));

  if (isNaN(numero2)) {

    alert("Ricarica la pagina e inserisci un numero");

  }
}



//Il software stampa il maggiore.

if (numero1 > numero2) {
  document.getElementById('risposta').innerHTML = numero1;
}

if (numero1 < numero2) {
  document.getElementById('risposta').innerHTML = numero2;
}

if (numero1 == numero2) {
  document.getElementById('risposta').innerHTML = "I numeri sono uguali";
}
