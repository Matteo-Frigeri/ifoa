/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];
console.log(pets[0]);
console.log(pets[1]);
console.log(pets[2]);
console.log(pets[3]);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log(pets.sort());
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log(pets.sort().reverse());
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
//si è preso in considerazione l'array modificato all'es.3, come ordine dichiarativo di elementi//
pets.shift();
pets.push('redfish');
console.log(pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
cars[0].licensePlate='xx'
cars[1].licensePlate='xx'
cars[2].licensePlate='xx'
console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push({
  brand: 'Volkswagen',
  model: 'Js',
  color: 'red_green',
  trims: ['life', 'style', 'r-line'],
},);
console.log(cars);

cars[0].trims.pop();
cars[1].trims.pop();
cars[2].trims.pop();
cars[3].trims.pop();
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for(i=0;cars.length>i;i++){
  justTrims.push(cars[i].trims[0]);
};
console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for(i=0;cars.length>i;i++){
  if(cars[i].color.charAt(0)==="b"){console.log("fizz")}
  else{console.log("buzz")};
};
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let posizione=numericArray.indexOf(32);
let arrayfinito= numericArray.slice(posizione+1,numericArray.length);
console.log(arrayfinito);

const newArray=[];
let v=0;
while(numericArray.length>v){
if(numericArray.indexOf(numericArray[v])<=numericArray.indexOf(32)+2){newArray.push(numericArray[v])}
else{newArray.pop(numericArray[v])};v++
};
console.log(newArray);

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
var arrayAlfabetico=[];
for(let i=0; charactersArray.length>i;i++){
switch (charactersArray[i]){
  case "a": arrayAlfabetico.push(1)
  break
  case "b": arrayAlfabetico.push(2)
  break
  case "c": arrayAlfabetico.push(3)
  break
  case "d": arrayAlfabetico.push(4)
  break
  case "e": arrayAlfabetico.push(5)
  break
  case "f": arrayAlfabetico.push(6)
  break
  case "g": arrayAlfabetico.push(7)
  break
  case "h": arrayAlfabetico.push(8)
  break
  case "i": arrayAlfabetico.push(9)
  break
  case "j": arrayAlfabetico.push(10)
  break
  case "k": arrayAlfabetico.push(11)
  break
  case "l": arrayAlfabetico.push(12)
  break
  case "m": arrayAlfabetico.push(13)
  break
  case "n": arrayAlfabetico.push(14)
  break
  case "o": arrayAlfabetico.push(15)
  break
  case "p": arrayAlfabetico.push(16)
  break
  case "q": arrayAlfabetico.push(17)
  break
  case "r": arrayAlfabetico.push(18)
  break
  case "s": arrayAlfabetico.push(19)
  break
  case "t": arrayAlfabetico.push(20)
  break
  case "u": arrayAlfabetico.push(21)
  break
  case "v": arrayAlfabetico.push(22)
  break
  default:console.log("non hai inserito un carattere dell'alfabeto italiano");
};
};
console.log(arrayAlfabetico);
