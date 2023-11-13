//1 GIORNO 2 SETTIMANA//

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
//superfluo//
/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
var myName = "Matteo";
console.log(myName);
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
var somma = 12 + 20;
console.log(somma);
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
var x = 12;
console.log(x);
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
myName = "Frigeri";
const costante = "sono una costante";
//costante="provo a sostituire";//
console.log(myName);
console.log(costante);
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" sopra dichiarata (che contiene il numero 12).
*/
console.log(x - 4);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
var nome1 = "john"
var nome2 = "John"
if (nome1 === nome2) { console.log("sono uguali") }
else ("sono diversi tra loro");
/*if(nome1.toLocaleLowerCase===nome2.toLocaleLowerCase){console.log("sono uguali")}
else("sono diversi tra loro");*/


//----------------------------------------------------------------------------------//


//2 GIORNO 2 SETTIMANA//

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.*/
var numero1 = 15;
var numero2 = 20;
if (numero1 === numero2) { console.log("sono uguali") }
else if (numero1 < numero2) { console.log("numero1 minore di numero2") }
else if (numero1 > numero2) { console.log("numero1 maggiore di numero2") };
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
var numero3 = 26;
if (numero3 !== 5) { console.log("not equal") }
else (console.log("equal"));
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
var numero4 = 55;
if (numero4 % 5 === 0) { console.log("divisibile per 5") }
else { console.log("non divisibile per 5") };
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
var numero5 = 70;
var numero6 = 78;
if (numero5 === 8 || numero6 === 8 || (numero5 - numero6) === 8 || (numero5 + numero6) === 8 ||
    (numero6 - numero5) === 8 || (numero6 + numero5) === 8) { console.log("risulta 8") }
else { console.log("risulato diverso da 8") };
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
var totalShoppingCart = 50;
var costoSpedizione = 10;
if (totalShoppingCart > 50) { console.log("il totale da pagare è: ", totalShoppingCart + costoSpedizione) }
else { console.log("il totale da pagare è: ", totalShoppingCart) };
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
var sconto = totalShoppingCart * 0.80;
if (sconto > 50) { console.log("il totale da pagare è: ", sconto + costoSpedizione) }
else { console.log("il totale da pagare è: ", sconto) };
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
var numero7 = 98;
var numero8 = 567;
var numero9 = 56;
if (numero7 < numero8 && numero8 < numero9) { console.log(numero9, numero8, numero7) }
else if (numero7 > numero8 && numero8 < numero9 && numero9 < numero7) { console.log(numero7, numero9, numero8) }
else if (numero7 < numero8 && numero8 < numero9 && numero9 > numero7) { console.log(numero9, numero7, numero8) }
else if (numero7 < numero8 && numero8 > numero9 && numero9 < numero7) { console.log(numero8, numero7, numero9) }
else if (numero7 < numero8 && numero8 > numero9 && numero9 > numero7) { console.log(numero8, numero9, numero7) };
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
var variabile = "sono una stringa"
console.log("questa variabile è di tipo: ", typeof (variabile));
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
var numero10 = 45;
if (numero10 % 2 === 0) { console.log("numero pari") }
else { console.log("numero dispari") };
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
me.city = "tornonto";
console.log(me);
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log(me);
/* ESERCIZIO 13 
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
var ultimaPosizione = me.skills.length - 1;
delete me.skills[ultimaPosizione];
console.log(me);//si rimuove solo il valore ma la posizione rimane vuota//
me.skills.pop();
console.log(me);//si rimuove sia il valore cghe la posizione//
/* ESERCIZIO 14 
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
var array = [];
for (let i = 1; 11 > i; i++) {
    array.push(i);
};
console.log(array);
/* ESERCIZIO 15 
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
for (let i = 0; array.length > i; i++) {
    if (array[i] === 10) { array[i] = 100 };
};
console.log(array);
array.pop();
array.push(101)
console.log(array);


//----------------------------------------------------------------------------------//


//3 GIORNO 2 SETTIMANA//
const starWarsCharacters = [
    {
        name: "Luke Skywalker",
        height: 172,
        mass: 277,
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male"
    },
    {
        name: "C-3PO",
        height: 167,
        mass: 75,
        hair_color: "n/a",
        skin_color: "gold",
        eye_color: "yellow",
        birth_year: "112BBY",
        gender: "n/a"
    },
    {
        name: "R2-D2",
        height: 96,
        mass: 32,
        hair_color: "n/a",
        skin_color: "white, blue",
        eye_color: "red",
        birth_year: "33BBY",
        gender: "n/a"
    },
    {
        name: "Darth Vader",
        height: 202,
        mass: 136,
        hair_color: "none",
        skin_color: "white",
        eye_color: "yellow",
        birth_year: "41.9BBY",
        gender: "male"
    },
    {
        name: "Leia Organa",
        height: 150,
        mass: 49,
        hair_color: "brown",
        skin_color: "light",
        eye_color: "brown",
        birth_year: "19BBY",
        gender: "female"
    },
    {
        name: "Owen Lars",
        height: 178,
        mass: 120,
        hair_color: "brown, grey",
        skin_color: "light",
        eye_color: "blue",
        birth_year: "52BBY",
        gender: "male"
    },
    {
        name: "Beru Whitesun lars",
        height: 165,
        mass: 75,
        hair_color: "brown",
        skin_color: "light",
        eye_color: "blue",
        birth_year: "47BBY",
        gender: "female"
    },
    {
        name: "R5-D4",
        height: 97,
        mass: 32,
        hair_color: "n/a",
        skin_color: "white, red",
        eye_color: "red",
        birth_year: "unknown",
        gender: "n/a"
    },
    {
        name: "Biggs Darklighter",
        height: 183,
        mass: 84,
        hair_color: "black",
        skin_color: "light",
        eye_color: "brown",
        birth_year: "24BBY",
        gender: "male"
    },
    {
        name: "Obi-Wan Kenobi",
        height: 182,
        mass: 77,
        hair_color: "auburn, white",
        skin_color: "fair",
        eye_color: "blue-gray",
        birth_year: "57BBY",
        gender: "male"
    }
];

/* ESERCIZIO 1
  Crea una variabile chiamata "characters" e assegnale un array vuoto
*/
var characters = [];
/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters". 
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "characters" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
for (let i = 0; starWarsCharacters.length > i; i++) {
    characters.push(starWarsCharacters[i].name);
};
console.log(characters);
/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/
var femaleCharacters = [];
function onlyFemale(starWarsCharacters) {
    for (let i = 0; starWarsCharacters.length > i; i++) {
        if (starWarsCharacters[i].gender === "female") { femaleCharacters.push(starWarsCharacters[i].name) };
    };
};
onlyFemale(starWarsCharacters);
console.log(femaleCharacters);
/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/
var eyeColor = {
    blue: [],
    yellow: [],
    brown: [],
    red: [],
    blue_gray: []
};
/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/
function colore(s) {
    for (let i = 0; s.length > i; i++) {
        switch (s[i].eye_color) {
            case "blue": eyeColor.blue.push(s[i].name);
                break
            case "yellow": eyeColor.yellow.push(s[i].name);
                break
            case "red": eyeColor.red.push(s[i].name);
                break
            case "blue_gray": eyeColor.blue_gray.push(s[i].name);
                break
        };
    };
};
colore(starWarsCharacters);
console.log(eyeColor);
/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/
var crewMass = 0;
let i = 0;
while (starWarsCharacters.length > i) {
    crewMass += starWarsCharacters[i].mass;
    i++;
};
console.log(crewMass);
/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".
 
  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"
 
  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/
if (crewMass > 1000) { console.log("DANGER! OVERLOAD ALERT: escape from ship now!") }
else if (crewMass > 900) { console.log("Critical Load: Over 900") }
else if (crewMass > 700) { console.log("Warning: Load is over 700") }
else if (crewMass > 500) { console.log("Ship is half loaded") }
else if (crewMass < 500) { console.log("Ship is under loaded") }
/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/
function changGender(starWarsCharacters) {
    for (let i = 0; starWarsCharacters.length > i; i++)
        if (starWarsCharacters[i].gender === "n/a") { starWarsCharacters[i].gender = "robot" };
};
changGender(starWarsCharacters);
console.log(starWarsCharacters);
/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "characters" prima e dopo l'operazione.
*/
function remuveCharacter(l1, l2) {
    for (let i = 0; l1.length > i; i++) {
        for (let j = 0; l2.length > j; j++) {
            if (l1[i] === l2[j]) { l2.splice(i, 1) };
        };
    };
};
remuveCharacter(femaleCharacters, characters);
console.log(characters);
/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/
/*function selection(array){
    let numeroCasuale=Math.floor(Math.random()*array.length);
    console.log(array[numeroCasuale]);  
};
selection(starWarsCharacters);*/
const randomIndex = Math.floor(Math.random() * starWarsCharacters.length);
const selectedCharacter = starWarsCharacters[randomIndex];

console.log("The found character name is:", selectedCharacter.name);

if (selectedCharacter.gender === "female") {
    console.log("She is", selectedCharacter.height, "cm tall");
} else {
    console.log("He is", selectedCharacter.height, "cm tall");
}

if (selectedCharacter.hair_color !== "n/a" && selectedCharacter.hair_color !== "none") {
    console.log("and has", selectedCharacter.hair_color, "hair,");
} else {
    console.log("and bald,");
}
console.log("with", selectedCharacter.skin_color, "skin.");


//----------------------------------------------------------------------------------//


//4 GIORNO 2 SETTIMANA//
/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function area(p1, p2) {
    return p1 * p2;
};
console.log(area(20, 4));
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(p1, p2) {
    if (p1 === p2) { console.log((p1 + p2) * 3) }
    else { console.log(p1 + p2) };
};
crazySum(5, 5);
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/*function crazyDiff(p1){
    if(p1>19){console.log(Math.abs((p1-19)*3))}
    else{console.log(Math.abs(p1-19))};
};
crazyDiff(20);*/
const crazyDiff = function (num) {
    if (num > 19) {
        return Math.abs(num - 19) * 3
    } else {
        return Math.abs(num - 19)
    }
}
console.log(crazyDiff(3))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/*function boundary(n){
    if(20<n<=100 ||n===400){console.log("true")}
    else(console.log("folse"));
};
boundary(400);*/
const boundary = function (n) {
    if ((n > 20 && n <= 100) || n === 400) {
        return true
    } else {
        return false
    }
}
console.log('ex 4', boundary(3))
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
function epify(stringa) {
    if (stringa.startsWith("EPICODE")) { console, log(stringa) }
    else { console.log("EPICODE " + stringa) };
};
epify("è una grande scuola digitale");
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/*function check3and7(n){
    switch(n){
        case n%3===0 && n%7===0: console.log("multiplo di 3 e di 7");
        break
        case n%3===0: console.log("multiplo di 3");
        break
        case n%7===0: console.log("multiplo di 7");
        break
        default: console.log("non multiplo ne di 3 ne di 7");
    };
};
console.log(check3and7(77));*/
const check3and7 = function (n) {
    if (n >= 0 && (n % 3 === 0 || n % 7 === 0)) {
        return true
    } else {
        return false
    }
}
console.log(check3and7(20))
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(stringa) {
    return stringa.split("").reverse().join("");
};
console.log(reverseString("EPICODE"));
/*const reverseString = function (str) {
  let splitString = str.split('')
  let reverseString = splitString.reverse()
  let finalString = reverseString.join('')
  return finalString
}
console.log(reverseString('EPICODE'))*/
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
function upperFirst(stringa) {
    let array = stringa.split(" ");
    let array1 = [];
    for (let i = 0; array.length > i; i++) {
        let primalettera = array[i].slice(0, 1);
        let restoParola = array[i].slice(1);
        let primaletteraMaiuscolo = primalettera.toUpperCase();
        let parolaFinale = primaletteraMaiuscolo + restoParola;
        let risultato = array1.push(parolaFinale);
    }; return array1.join(" ");
};
console.log(upperFirst("ciao io sono Matteo"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(stringa) {
    return stringa.split("").slice(1, stringa.length - 1).join("");
};
console.log(cutString("ciao Matteo"));
/*const cutString = function (str) {
  return str.slice(1, str.length - 1)
}
console.log(cutString('EPICODE'))*/
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        let numeroCasuale = Math.floor(Math.random() * 11);
        array.push(numeroCasuale);
    };
    return array;
};
console.log(giveMeRandom(10));


//----------------------------------------------------------------------------------//


//1 GIORNO 3 SETTIMANA//
/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
function selection(s1, s2) {
    let stringa1 = s1.slice(0, 2);
    let stringa2 = s2.slice(-3);
    let stringaFinale = (stringa1 + stringa2).toUpperCase()
    console.log(stringaFinale);
};
selection("sono", "burrone");
/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
function randomNumber() {
    let array = [];
    for (let i = 0; 10 > i; i++)
        array.push(Math.floor(Math.random() * 101));
    return array;
};
console.log(randomNumber());
/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
function onlyPari(array) {
    return array.filter((el) => el % 2 === 0);
};
console.log(onlyPari(randomNumber()));
/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
function sommaElements(array){
    return array.reduce((el,i)=>el=el+i)
};
console.log(sommaElements(randomNumber()));
/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
var array2=[11,22,33,44];
function aggiungiN(array,n){
    return array.map((el)=>el+n);
};
console.log(aggiungiN(array2,1));
/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
var array3=["ciao","come","stai"];
function converti(array){
    return array.map((el)=>el.length);
};
console.log(converti(array3));
/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
function soloDispari(){
    let array=[];
    for(let i=0; 100>i; i++){
        array.push(i);
    };
    return array.filter((el)=>el%2!==0);   
};
console.log(soloDispari());
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
    {
        Title: 'The Lord of the Rings: The Fellowship of the Ring',
        Year: '2001',
        imdbID: 'tt0120737',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    },
    {
        Title: 'The Lord of the Rings: The Return of the King',
        Year: '2003',
        imdbID: 'tt0167260',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
        Title: 'The Lord of the Rings: The Two Towers',
        Year: '2002',
        imdbID: 'tt0167261',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of War',
        Year: '2005',
        imdbID: 'tt0399295',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
        Title: 'Lords of Dogtown',
        Year: '2005',
        imdbID: 'tt0355702',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
        Title: 'The Lord of the Rings',
        Year: '1978',
        imdbID: 'tt0077869',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of the Flies',
        Year: '1990',
        imdbID: 'tt0100054',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
    },
    {
        Title: 'The Lords of Salem',
        Year: '2012',
        imdbID: 'tt1731697',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
    },
    {
        Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
        Year: '1984',
        imdbID: 'tt0087365',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
    },
    {
        Title: 'Lord of the Flies',
        Year: '1963',
        imdbID: 'tt0057261',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
    },
    {
        Title: 'The Avengers',
        Year: '2012',
        imdbID: 'tt0848228',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Infinity War',
        Year: '2018',
        imdbID: 'tt4154756',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
    },
    {
        Title: 'Avengers: Age of Ultron',
        Year: '2015',
        imdbID: 'tt2395427',
        Type: 'movie',
        Poster:
            'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
    },
]
/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
function vecchio(movies){
    let confronto=2050;
    movies.forEach((el) =>{
        if(el.Year<confronto){confronto=el.Year};
    });return confronto;
};
console.log(vecchio(movies));
/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
function numeroFilm(movies){
    return movies.length
};
console.log(numeroFilm(movies));
/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
function soloNomi(movies){
    return movies.map((el)=>el.Title);
};
console.log(soloNomi(movies));
/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
function filmDopo2000(movies){
    return movies.filter((el)=>el.Year>2000);
};
console.log(filmDopo2000(movies));
/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
function sommaAnni(movies){
    return movies.reduce((el,valore)=>el+parseInt(valore.Year),0);
};
console.log(sommaAnni(movies));
/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
function trovaFilm(id){
    return movies.filter((el)=>el.imdbID===id);
};
console.log(trovaFilm('tt4154756'));
/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
function indiceFilm(anno){
    return movies.findIndex((el)=>el.Year===anno);
};
console.log(indiceFilm('2015'));


//----------------------------------------------------------------------------------//


//2 GIORNO 3 SETTIMANA//
/* ESERCIZIO 1
Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/
let cambiaTitolo = () => {
    document.querySelector("h1").innerText = "sono marco culo";
};
cambiaTitolo();
/* ESERCIZIO 2
Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/
let aggiungiClasse = () => {
    document.querySelector("h1").classList.add("myHeading")
};
aggiungiClasse();
/* ESERCIZIO 3
Scrivi una funzione che cambi il testo dei p figli di un div
*/
let cambiaPragrafo = () => {
    const paragrafi = document.querySelectorAll("div p");
    paragrafi.forEach((el) => el.innerText = "nuovo paragrafo");
};
cambiaPragrafo();
/* ESERCIZIO 4
Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/
const cambiaLink = function () {
    let tuttiLink = document.querySelectorAll("a:not(footer a)");
    tuttiLink.forEach((el) => el.setAttribute("href", "https://www.google.com"));
};
cambiaLink();
/* ESERCIZIO 5
Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/
const nuovLi = function () {
    const lista2 = document.getElementById("secondalista");
    const nuovoLi = document.createElement("li");
    nuovoLi.innerText = "sono il nuovo elemento di lista";
    lista2.appendChild(nuovoLi);
};
nuovLi();
/* ESERCIZIO 6
Scrivi una funzione che aggiunga un secondo paragrafo al primo div
*/
const nuovoParagrafo = function () {
    const div = document.querySelector("div");
    const p = document.createElement("p");
    p.innerText = "sono il nuovo paragrafo creato";
    div.appendChild(p);
};
nuovoParagrafo();

/* ESERCIZIO 7
Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/
const scompari = function () {
    document.getElementById("primalista").style.display = "none";//modifica stilistica possibile solo con get//
};
scompari();

/* ESERCIZIO 8 
Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/
const greenList = function () {
    const ol = document.querySelectorAll("li");
    ol.forEach((el) => el.style.backgroundColor = "green");
};
greenList();
/* ESERCIZIO 9
Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/
const rimuoviLettera = function () {
    const h1 = document.querySelector("h1");
    h1.onclick = function () { h1.innerText = h1.innerText.slice(h1.length, -1) };
};
rimuoviLettera();
/* ESERCIZIO 10
Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/
const alert = function () {
    let footer = document.querySelector("footer");
    let footera = document.querySelector("footer a");
    footer.onclick = function () { alert(footera.getAttribute("href")) };
};
alert();
/* ESERCIZIO 11
Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/
const prodotti = [
    {
        id: 1,
        nome: "nome1",
        prezzo: 1,
        quantità: 2,
    },
    {
        id: 2,
        nome: "nome2",
        prezzo: 2,
        quantità: 3,
    },
    {
        id: 3,
        nome: "nome3",
        prezzo: 3,
        quantità: 4,
    },
    {
        id: 4,
        nome: "nome4",
        prezzo: 4,
        quantità: 5,
    },
];
const creatabella = function () {
    const div = document.getElementById("tableArea");
    const tabella = document.createElement("table");
    tabella.classList.add("tabella");
    //nuova riga//
    const tr = document.createElement("tr");
    //intestazioni di tabella//
    const th1 = document.createElement("th");
    th1.innerText = "id";
    const th2 = document.createElement("th");
    th2.innerText = "nome";
    const th3 = document.createElement("th");
    th3.innerText = "prezzo";
    const th4 = document.createElement("th");
    th4.innerText = "quntità";
    //appendiamo le celle alla riga//
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tabella.appendChild(tr);
    //creaiamo un ciclo per aggiungere le altre righe e loro contenuto//
    for (let i = 0; prodotti.length > i; i++) {
        const tr1 = document.createElement("tr");
        //creiamo le celle delle riga con contenuto dell'array prodotti//
        const td1 = document.createElement("td");
        td1.innerText = `${prodotti[i].id}`;
        const td2 = document.createElement("td");
        td2.innerText = `${prodotti[i].nome}`;
        const td3 = document.createElement("td");
        td3.innerText = `${prodotti[i].prezzo}`;
        const td4 = document.createElement("td");
        td4.innerText = `${prodotti[i].quantità}`;
        //appendiamo le td alla tr//
        tr1.appendChild(td1);
        tr1.appendChild(td2);
        tr1.appendChild(td3);
        tr1.appendChild(td4);
        //appendiamo tr a tab//
        tabella.appendChild(tr1);
    };
    div.appendChild(tabella);
};
creatabella()
/* ESERCIZIO 12
Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/
const rigaTab =
{
    id: 5,
    nome: "nome5",
    prezzo: 5,
    quantità: 6,
}
    ;
const nuovaRigaTab = function () {
    //pushiamo l'oggetto nell'array//
    prodotti.push(rigaTab);
    //selezioniamo la tabella sulla base della classe data//
    const tabel = document.querySelector(".tabella");
    //creiamo una nuova riga//
    const tr2 = document.createElement("tr");
    //generimo un ciclo for che si completa dopo la lettura del solo ultimo oggetto//
    for (let i = prodotti.length - 1; prodotti.length > i; i++) {
        //scrivaimo il contenuto delle celle//
        const td1 = document.createElement("td");
        td1.innerText = `${prodotti[i].id}`;
        const td2 = document.createElement("td");
        td2.innerText = `${prodotti[i].nome}`;
        const td3 = document.createElement("td");
        td3.innerText = `${prodotti[i].prezzo}`;
        const td4 = document.createElement("td");
        td4.innerText = `${prodotti[i].quantità}`;
        //appendiamo le celle alla riga//
        tr2.appendChild(td1);
        tr2.appendChild(td2);
        tr2.appendChild(td3);
        tr2.appendChild(td4);
        //appendiamo la riga alla tabella//
        tabel.appendChild(tr2);
    }
};
nuovaRigaTab();
/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/
function nascondiId() {
    const tabel = document.querySelectorAll("td ");
    tabel.forEach((el) => el.style.display = "none");
};
nascondiId();
/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/
function cambiaColore() {
    const h2 = document.querySelector("h2");
    h2.style.cursor = "pointer";
    h2.onclick = function () {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        h2.style.color = `rgb(${red},${green},${blue})`;
    };
};
cambiaColore();
/* EXTRA ESERCIZIO 16
Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
*/
function eliminaVocali() {
    const testo = document.querySelectorAll("h1,h2,li,p,a");
    testo.forEach((el) => {
        el.innerText = [...el.innerText].filter((elm) => {
            /*prendi il testo contenuto in ciascun elemento indicato che sarà = a tutto il testo che trovi filtrato.
            si porta tutto il testo per sicurezza in minuscolo. Ritornami turri i caratteri diversi da vocale*/
            elm = elm.toLowerCase()
            return (
                elm !== "a" &&
                elm !== "e" &&
                elm !== "i" &&
                elm !== "o" &&
                elm !== "u"
            );
        }).join("")
    })
};
eliminaVocali();



