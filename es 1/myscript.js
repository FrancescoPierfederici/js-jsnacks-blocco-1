var primaParola = prompt("Inserisci la prima parola");
var secondaParola = prompt("Inserisci la seconda parola");
var paraS ="";
var paraM ="";

if(!Number.isNaN(parseInt(primaParola)) || !Number.isNaN(parseInt(secondaParola))) {
    alert("non va bene");

}

if (primaParola.length < secondaParola.length) {
    console.log("La parola " +secondaParola + " è maggiore di " + primaParola);

} else if (secondaParola.length < primaParola.length) {
    console.log("La parola " + primaParola + " è maggiore di " + secondaParola);

} else if (primaParola.length == secondaParola.length) {
    console.log("le due parole sono di lunghezza uguale");
  
} 


