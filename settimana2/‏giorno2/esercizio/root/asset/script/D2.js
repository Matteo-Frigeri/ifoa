/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.*/
 let numero1=55;
 let numer2=56;
 if(numero1<numer2){console.log('numero2 è più grande')}else{console.log('numero1 è più grande')};


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let numero3=56;
if(numero3===5){console.log('equal')}else{console.log('not equal')};

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let numero4=50;
if(numero4%5==0){console.log('divisibile')}else{console.log('non divisibile')};

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let numero5=45;
let numero6=55;
if(numero5==8 || numero6==8){console.log('uguale a 8')}else{console.log('diverso da 8')};
if(numero5+numero6==8 || numero5-numero6==8){console.log('uguale a 8')}else{console.log('diverso da 8')}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart=49;
if(totalShoppingCart>50){console.log('hai diritto alla spedizione gratuita!')}else{console.log('la spedizione ha un costo fisso pari a',totalShoppingCart+10)};

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let totalBlack=totalShoppingCart-(totalShoppingCart*0.20);
console.log(totalBlack);
if(totalBlack>50){console.log('hai diritto alla spedizione gratuita!')}else{console.log('la spedizione ha un costo fisso pari a',totalBlack+10)};

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let numero7=1;
let numero8=2;
let numero9=3;
if (numero7<numero8<numero9){console.log(numero7, numero8,numero9)}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let variabile1=55;
let variabile2='sono una stringa';
document.write('Tipo della variabile1: '+typeof(variabile1)+ '<br>');
document.write('Tipo della variabile1: '+typeof(variabile2)+ '<br>');

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let numero10=20;
if(numero10%2==0){console.log('è pari')}else{console.log('è dispari')};

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 6 o maggiore");
    };

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};
me.city='Toronto';
console.log(me.city);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log(me.lastName);

/* ESERCIZIO 13 no
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14 no
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15 no
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
