/* ESERCIZIO 1
Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/
function cambiaTitolo() {
    document.querySelector("h1").innerText = "ciao";
}
cambiaTitolo();

/* ESERCIZIO 2
Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/
const aggiungiClasse = function () {
    document.querySelector("h1").classList.add("titolo");
};

/* ESERCIZIO 3
Scrivi una funzione che cambi il testo dei p figli di un div
*/
const campbiaP = function () {
    const paragrafi = document.querySelectorAll("div p");
    paragrafi.forEach((el) => { el.innerText = "ciao"; })
};
campbiaP();//ho dovuto chiamare la funzione della costante//

/* ESERCIZIO 4
Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/
function cambiaLink() {
    const link = document.querySelectorAll("a:not(footer a");
    link.forEach((el) => { el.setAttribute("href", "https://www.google.com") })
};
cambiaLink();
/* ESERCIZIO 5
Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/
function aggiungaLista() {
    const secondaLista = document.getElementById("secondalista");
    let nuovo = document.createElement("li");
    nuovo.innerText = "sono un nuovo elemento di lista";
    secondaLista.appendChild(nuovo);
};
aggiungaLista();

/* ESERCIZIO 6
Scrivi una funzione che aggiunga un secondo paragrafo al primo div
*/
function aggiunta() {
    const primodiv = document.querySelector("div");
    let nuovo = document.createElement("p");
    nuovo.textContent = ("sono un nuovo paragrafo");
    primodiv.appendChild(nuovo);
};
aggiunta();
/* ESERCIZIO 7
Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/
function scompari() {
    let ol = document.getElementById("primalista").style.display = "none";
};
scompari()
/* ESERCIZIO 8 
Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/
function color() {
    const liste = document.querySelectorAll("ol");
    liste.forEach((el) => { el.style.backgroundColor = "green"; })
};
color()
/* ESERCIZIO 9
Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/
function eliminaLettera() {
    const h1 = document.querySelector("h1");
    h1.onclick = function () {
        h1.innerText = h1.innerText.slice(0, -1);
    };
};
eliminaLettera();

/* ESERCIZIO 10
Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/
function rivela() {
    const footer = document.querySelector("footer");
    footer.onclick = function () {
        const footer = document.querySelector("footer");
        const footerLink = document.querySelector("footer a")
        footer.onclick = function () {
            alert(footerLink.getAttribute(href));
        };
    };
};

/* ESERCIZIO 11
Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/
const prodotti = [
    {
        id: 1,
        immagine: 'immagine1',
        nomeProd: 'prodotto 1',
        quantita: 25,
        prezzo: 57,
    },
    {
        id: 2,
        immagine: 'immagine2',
        nomeProd: 'prodotto 2',
        quantita: 31,
        prezzo: 18,
    },
    {
        id: 3,
        immagine: 'immagine3',
        nomeProd: 'prodotto 3',
        quantita: 12,
        prezzo: 93,
    },
    {
        id: 4,
        immagine: 'immagine4',
        nomeProd: 'prodotto 4',
        quantita: 38,
        prezzo: 25,
    },
    {
        id: 5,
        immagine: 'immagine5',
        nomeProd: 'prodotto 5',
        quantita: 64,
        prezzo: 37,
    },
];

const generateTable = function () {
    const contenitore = document.getElementById('tableArea');
    const tabella = document.createElement('table');
    tabella.classList.add('tabella');

    const primaRiga = document.createElement('tr');

    const intImmagine = document.createElement('th');
    intImmagine.innerText = 'Immagine';
    const intNome = document.createElement('th');
    intNome.innerText = 'Nome prodotto';
    const intQty = document.createElement('th');
    intQty.innerText = 'Quantità';
    const intPrezzo = document.createElement('th');
    intPrezzo.innerText = 'Prezzo';

    primaRiga.appendChild(intImmagine);
    primaRiga.appendChild(intNome);
    primaRiga.appendChild(intQty);
    primaRiga.appendChild(intPrezzo);
    tabella.appendChild(primaRiga);

    for (let i = 0; i < prodotti.length; i++) {
        const nuovaRiga = document.createElement('tr');

        const cellaImmagine = document.createElement('td');
        cellaImmagine.innerText = `${prodotti[i].immagine}`;
        const cellaNome = document.createElement('td');
        cellaNome.innerText = `${prodotti[i].nomeProd}`;
        const cellaQty = document.createElement('td');
        cellaQty.innerText = `${prodotti[i].quantita}`;
        const cellaPrezzo = document.createElement('td');
        cellaPrezzo.innerText = `${prodotti[i].prezzo}`;

        nuovaRiga.appendChild(cellaImmagine);
        nuovaRiga.appendChild(cellaNome);
        nuovaRiga.appendChild(cellaQty);
        nuovaRiga.appendChild(cellaPrezzo);
        tabella.appendChild(nuovaRiga);
    }

    contenitore.appendChild(tabella);
};

generateTable();
/* ESERCIZIO 12
Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/
const addRow = function () {
    const nuovoProdotto = {
        id: 6,
        immagine: 'immagine6',
        nomeProd: 'prodotto 6',
        quantita: 18,
        prezzo: 25,
    };
    
    prodotti.push(nuovoProdotto);
    
    const tabella = document.querySelector('table');
    
    const nuovaRiga = document.createElement('tr');
    
    let i = prodotti.length - 1;
    
    const cellaImmagine = document.createElement('td');
    cellaImmagine.innerText = `${prodotti[i].immagine}`;
    const cellaNome = document.createElement('td');
    cellaNome.innerText = `${prodotti[i].nomeProd}`;
    const cellaQty = document.createElement('td');
    cellaQty.innerText = `${prodotti[i].quantita}`;
    const cellaPrezzo = document.createElement('td');
    cellaPrezzo.innerText = `${prodotti[i].prezzo}`;
    
    nuovaRiga.appendChild(cellaImmagine);
    nuovaRiga.appendChild(cellaNome);
    nuovaRiga.appendChild(cellaQty);
    nuovaRiga.appendChild(cellaPrezzo);
    tabella.appendChild(nuovaRiga);
    };
    
    addRow();
/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/
const cambiaColore= function(){
    const h2=document.getElementById("changeMyColor");
    h2.onclick=function(){
        let red=Math.floor(Math.random()*256);
        let green=Math.floor(Math.random()*256);
        let blue=Math.floor(Math.random()*256);
        h2.style.color=(`rgb(${red},${green},${blue})`);   
    }
}
cambiaColore();