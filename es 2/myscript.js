// Compito svolto da me 


// var parolaUno = parseInt(prompt("Inserisci un numero"));
// var parolaDue = parseInt(prompt("Inserisci un numero"));
// var parolaTre = parseInt(prompt("Inserisci un numero"));
// var parolaQ = parseInt(prompt("Inserisci un numero"));
// var parolaC = parseInt(prompt("Inserisci un numero"));
// var parolaSei = parseInt(prompt("Inserisci un numero"));
// var parolaSette = parseInt(prompt("Inserisci un numero"));
// var parolaOtto = parseInt(prompt("Inserisci un numero"));
// var parolaNove = parseInt(prompt("Inserisci un numero"));
// var parolaD = parseInt(prompt("Inserisci un numero"));
// console.log(parolaUno + " + " + parolaDue + " + " + parolaTre + " + " + parolaQ + " + " + parolaC + " + " + parolaSei + " + " + parolaSette + " + " + parolaOtto + " + " + parolaNove + " + " + parolaD);


// var risultatoN = ( parolaUno + parolaDue + parolaTre + parolaQ + parolaC + parolaSei + parolaSette + parolaOtto + parolaNove + parolaD);

// if(Number.isNaN(parseInt(risultatoN))){
//     alert("puoi inserire solo numeri");
// }else {
//     console.log(risultatoN + " è la somma dei numeri scelti");
// }

// // // COMPITO SVOLTO DA FLORIAN

var numeriInseriti = []
var somma = 0;
// ciclo che si ripete 10 volte
for (var i = 0; i < 10; i++) {

    // numero inserito dall'utente
    var numero = parseInt(prompt("Inserisci un numero. Ne mancano:" + (10 - i)));
    if (Number.isNaN(numero)) {
        alert("Hai inserito un numero sbagliato");
        i--;
    } else {
        numeriInseriti.push(numero);


        somma = somma += numero;
    }
}
// fuori dal ciclo
console.log("La somma dei numeri è " + somma);
console.log("L'utente ha inserito i seguenti numeri: " + numeriInseriti.join(", "));