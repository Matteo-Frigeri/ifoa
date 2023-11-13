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
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A ok
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
var sum = 10 + 20;
console.log(sum);
/* ESERCIZIO B ok
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
var random = Math.floor(Math.random() * 21);
console.log(random);
/* ESERCIZIO C ok
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
var me = {
  name: "il tuo nome",
  surname: "il tuo cognome",
  age: "la tua età",
};
console.log(me);
/* ESERCIZIO D ok
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);
/* ESERCIZIO E ok
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["HTML", "css", "js"];
console.log(me);
/* ESERCIZIO F ok 
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("C++")
console.log(me)
/* ESERCIZIO G ok
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();//attenzione è stato rimosso il valore dato all'es F//
console.log(me);
// Funzioni

/* ESERCIZIO 1 ok
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  return Math.ceil(Math.random() * 6);
};
console.log(dice())
/* ESERCIZIO 2 ok
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(n1, n2) {
  if (n1 > n2) { console.log(n1) }
  else if (n1 < n2) { console.log(n2) }
  else if (n1 === n2) { console.log("i due numeri sono uguali") };
};
whoIsBigger(8, 8);
/* ESERCIZIO 3 ok 
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.
  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
var array = [];
function splitMe(stringa) {
  let array = []
  let stringaDivisa = stringa.split(" ")
  array.push(stringaDivisa);
  return array;
};
console.log(splitMe("I love coding"));
/* ESERCIZIO 4 ok 
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(stringa, b) {
  if (b === "true") { console.log(stringa.slice(1)) }
  else { console.log(stringa.slice(stringa.lenght, -1)) };
};
deleteOne("Matteo", "true");
/* ESERCIZIO 5 ok 
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.
  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(stringa) {
  NienteNumeri = stringa.replace(/[0-9]?/g, "");
  return NienteNumeri
};
console.log(onlyLetters("I have 44 dogs and 4 cats"));
/* ESERCIZIO 6 ok 
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) { console.log("true") }
  else { alert("L'indirizzo email che hai inserito non e' valido") };
  return false;
};
isThisAnEmail("matteofrigeri@gmail.com")
/* ESERCIZIO 7 ok 
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  let nuovaData = new Date()
  let giorno = nuovaData.getDay();
  console.log(`oggi è il ${giorno}° giorno della settimana`);
};
whatDayIsIt();
/* ESERCIZIO 8 ok
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().
  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
var oggettoRoll={
  sum:[],
}
function rollTheDices(n){
  let array=[];
  for (let i = 0; i < n; i++) {
    array.push(dice());
  };
  console.log(array);
  let valoreFinale= array.reduce((el,valore)=>el+parseInt(valore),0);
  console.log(valoreFinale);
  oggettoRoll.sum.push(valoreFinale);
  return
};
rollTheDices(3);
console.log(oggettoRoll)
/* ESERCIZIO 9 ok
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function getSecondsToday(i) {
let dataOggi= new Date();
 let nuovaData=Date.parse(i);
 let giorniPassati1=(((dataOggi/1000)/3600)/24);
 let giorniPassati2=(((nuovaData/1000)/3600)/24);
 let differenzagiorni=giorniPassati1-giorniPassati2;
 return differenzagiorni;
};
console.log(getSecondsToday("2023/11/10"));
/* ESERCIZIO 10 ok 
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday(i){
var dataCompleanno=i;
var data = new Date();
var gg, mm, aaaa;
gg = data.getDate() + "/";
mm = data.getMonth() + 1 + "/";
aaaa = data.getFullYear();
let dataOggi=gg + mm + aaaa;
if(dataOggi==dataCompleanno){console.log("true")}
else{console.log("folse")};
};
isTodayMyBirthday("13/11/2023");
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
/* ESERCIZIO 12 ok 
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(movies) {
  let confronto = 1950;
  movies.forEach((el) => {
    if (el.Year > confronto) { confronto = el.Year };
  }); 
  let film=movies.filter((el)=>el.Year===confronto);
  return film;
};
console.log(newestMovie(movies));
/* ESERCIZIO 13 ok
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(movies) {
  return movies.length
};
console.log(countMovies(movies))
/* ESERCIZIO 14 ok
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(movies) {
  return movies.map((el) => el.Year);
};
console.log(onlyTheYears(movies));
/* ESERCIZIO 15 ok
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(movies) {
  return movies.filter((el) => el.Year < 2000);
};
console.log(onlyInLastMillennium(movies));
/* ESERCIZIO 16 ok
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(movies) {
  return movies.reduce((el, valore) => el + parseInt(valore.Year), 0);
}
console.log(sumAllTheYears(movies));
/* ESERCIZIO 17 ok*
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(title) {
  return movies.filter((el) => el.Title.includes(title));
};
console.log(searchByTitle('The Lord'));
/* ESERCIZIO 18 ok
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(stringa) {
  let oggetto = {
    match: [],
    unmatch: [],
  };
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(stringa)) { oggetto.match.push(movies[i]) }
    else { oggetto.unmatch.push(movies[i]) };
  } return oggetto;
};
console.log(searchAndDivide('The Lord'));
/* ESERCIZIO 19 ok
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(indice) {
  movies.splice(indice, 1);
};
removeIndex(0);
console.log(movies);
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20 ok 
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const div1 = document.getElementById("container");
/* ESERCIZIO 21 ok
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const td = document.querySelectorAll("td");
/* ESERCIZIO 22 ok 
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function stampaTd(array) {
  for (let i = 0; array.length > i; i++) {
    console.log(array[i].innerText);
  };
};
stampaTd(td);
/* ESERCIZIO 23 ok 
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const a = document.querySelectorAll("a");
function cambiaColore(array) {
  for (let i = 0; array.length > i; i++) {
    array[i].style.backgroundColor = "red"
  };
};
cambiaColore(a);
/* ESERCIZIO 24 ok 
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const ul = document.getElementById("myList");
const li = document.createElement("li");
li.innerText = "sono il nuovo elemento di lista";
ul.appendChild(li);
/* ESERCIZIO 25 ok 
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
ul.innerText = "";
/* ESERCIZIO 26 ok 
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const tr = document.querySelectorAll("tr");
function aggiungiClasse(array) {
  for (let i = 0; array.length > i; i++) {
    array[i].classList.add("test")
  };
};
aggiungiClasse(tr);
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***
*/


/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/



