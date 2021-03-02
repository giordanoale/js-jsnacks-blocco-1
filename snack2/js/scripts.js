//L’utente inserisce due parole in successione, con due
//prompt.

var parola1 = prompt("Insersci la prima parola");

var parola2 = prompt("Inserisci la seconda parola");

//Il software stampa prima la parola più corta, poi la
//parola più lunga.

if (parola1.length > parola2.length) {
  document.getElementById("risposta").innerHTML = parola1 + " " + parola2;
} else if (parola1.length < parola2.length) {
  document.getElementById("risposta").innerHTML = parola2 + " " + parola1;
} else {
  document.getElementById("risposta").innerHTML = "le due parole hanno la stessa lunghezza";
}
