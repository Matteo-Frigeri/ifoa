/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
/*function catena(s1,s2){
    let caratteriPrima= s1.slice(0,2);
    let caratteriSeconda=s2.slice(s2.length-3);
    let sommaStringhe=caratteriPrima.concat(caratteriSeconda);
    return sommaStringhe;
};
console.log(catena("Nicola", "Anna").toUpperCase());*/

function conc(s1,s2){
    return s1.slice(0,2).concat(s2.slice(s2.length-3));
};
console.log(conc("Alba","Ginevra").toUpperCase());

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

//const array=()=>{};//

function array(){
    const newArray=[];
    for(let i=0; 10>i; i++ )
    newArray.push(Math.floor(Math.random()*101));
    return newArray;
};
console.log(array());

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

const ricavaPari= (array)=>{//dichiarata una costante come funzione freccia il qui parametro è un array//
    return array.filter((el)=>el%2===0);//selezioniamo con return dall'array solo numeri pari con una seconda funzione freccia//
};
console.log(ricavaPari(array()));//carichiamo in console la costante dando come argomento alla arrow function l'arrey dell'esercizio prima//
/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
const somma=(array)=>{
    let risultato=0;
    array.forEach( (el)=> {risultato+=el 
    });
    return risultato;
};
console.log(somma((array())));
/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
const somma2=(array)=>{
    return array.reduce((valore,el)=>valore+el);
};
console.log(somma2(array()));
/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
const array4=[34,54,214,59]
const n=5;
const nuovoArray=(array,n)=>{
  return array.map((p)=>p+n);
};
console.log(nuovoArray(array4,n));
/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
const stringa=["EPICODE", "is", "great"];
  function lunghezza(array){
  return array.map((el)=>el.length);
};
console.log(lunghezza(stringa));
/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
const dispari=()=>{
   const array=[];
   for(let i=0; i<100; i++){
    if(i%2!==0){array.push(i)};
   }; return array;
};
console.log(dispari());

const dispari1=()=>{
  const array1=[];
  const array2=[];
  let i=0;
  while(i<100){
    array1.push(i);i++
  };
  array2.map((el)=>{
    if(el%2!==0){array2.push(el)};
  }); return array2;
};
console.log(dispari());
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
  const vecchio=(array)=>{
    let confronto={Year:2050};
    array.forEach((el)=>{
      let anno= parseInt(el.Year);
      if(anno<confronto.Year){confronto=el};
    });return confronto;
  };
  console.log(vecchio(movies));
  /* ESERCIZIO 10
    Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
  */
  const numero=(array)=>{
    return array.length
  };
  console.log(movies);
  /* ESERCIZIO 11 (map)
    Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
  */
  const soloTitoli=(array)=>{
    return array.map((el)=>el.Title)
  };
  console.log(soloTitoli(movies));
  /* ESERCIZIO 12 (filter)
    Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
  */
  const nuovoMillenio=(array)=>{
    return array.filter((el)=>{
    return (parseInt(el.Year)>2000)
    });
  };
  console.log(nuovoMillenio(movies));
  /* ESERCIZIO 13 (reduce)
    Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
  */
  const sommaAnni=(array)=>{
    return array.reduce((valore,p)=>
    valore+parseInt(p.Year),0/*quando chiama un operazione semplice reduce non va con {} si mette, 0 per fargli
     capire che sono numeri e non stringhe*/
    );
  }
  console.log(sommaAnni(movies));
  /* ESERCIZIO 14 (find)
    Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
  */
  const film=(array,id)=>{
    return array.find((p)=>p.imdbID===id);
  }
  console.log(film(movies,'tt2395427'));
  /* ESERCIZIO 15 (findIndex)
    Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
  */
  const anno=(array,anno)=>{
    return array.findIndex((el)=>el.Year===anno);
  };
  console.log(anno(movies,'2015'));