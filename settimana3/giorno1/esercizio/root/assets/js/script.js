const oggetto={
    nome:'dario',
    cognome:'del giudice',
    eta:56,
};
for(let key in oggetto){
    document.getElementById("chiavi").innerHTML+=`<li>${key}</li>`;
};

const oggetto1={
    NAPOLI:20,
    ROMA:18,
    MILANO:22,
    GENOVA:20,
};
for(let key in oggetto1){
    document.getElementById("chiavi").innerHTML+=`<option value="key">${key}</option>`;
};

//rest parameter//

function lista(...nomi){
    for(let i=0; nomi.length>i; i++){
    document.getElementById("chiavi").innerHTML+=`<li>${nomi[i]}</li>`};  
};
lista('marco','paolo','matteo');

function somma(...parametri){
    let risultato=0;
    for(let i=0; parametri.length>i; i++){
        risultato=+parametri[i];
    }return risultato
};

console.log(somma(1,2));
//destructoring operator//

const numeri=[22,67,41];
const[v,g,c]=numeri;
console.log(v)

const oggetto2={
    nome:'dario',
    cognome:'del giudice',
    eta:56,
    corsi:['HTML','CSS','Javascript'],
};
const{nome,cognome,eta,corsi}=oggetto2;
//pippa=nome, pluta=cognome//paperella=eta//
console.log(corsi);
const[corso1,corso2,corso3]=corsi;
console.log(corso1);

//template literales//

/*document.getElementById("chiavi").innerHTML+="il signor "
+nome+" "+cognome+" "+",eta"+eta+" "+"che insegna nei corsi di: "
+corso1+" "+corso2+" "+corso3;*/ //metodo lungo e poco pratico//

document.getElementById("chiavi").innerHTML+=`il signor ${nome}
${cognome} di eta ${eta}, che insegna le materie: ${corso1} ${corso2} ${corso3}`;

//startsWith//

function valuta(stringa){
    if(stringa.startsWith("ciao")){console.log("true")}
    else{console.log("folse")}; 
};
valuta("ciao io sono una stringa");



//includes//

const stringa="questo è un corso di HTML, CSS e Javascript";
if(stringa.startsWith("questo")){console.log("la stringa comincia con: questo")}
else if(stringa.endsWith("Javascript")){console.log("la stringa finisce con: Javascript")}
else if(stringa.includes("HTML")){console.log("questa stringa contiene la parola: HTML")}
else{console.log("questa parola non è presente nella stringa")};

//sort//

const array1=["cane","gatto","cavallo","giraffa"];
console.log(array1.sort());//cane, cavallo,gatto,giraffa//

//pop push//
array1.pop();//giraffa//
console.log(array1.pop())//gatto//
array1.push("elefante");
console.log(array1);

//shift unshift//
let cane=array1.shift();//cane//
array1.unshift("foca");
array1.unshift(cane);
console.log(array1);

//aggiunta elementi in posizione prestabilita//

const array2=["gianni","maria","saverio","milde"];
array2[10]="gertrude";//aggiunge la stringa dichirata in posizione 10, lasciando vuote le occorenze rimanenti//
console.log(array2);

//splice//

for(let i=0; array2.length>i; i++){
    if(array2[i]==="saverio"){array2.splice(i,1,2)}
    document.getElementById("chiavi").innerHTML+=`<li>${array2}</li>`;
};

//concat//

console.log(array1.concat(array2));

//map e foreach//
const numeri1=[24,78,102,54,78];
numeri1.forEach(function(el){console.log(el)});
//or numeri1.froEach(el=>console.log(el));//
//const quadrato=numeri1.map(function(el){return el*el});//
const quadrato=numeri1.map((el)=>el*el);
console.log(quadrato);//crea nuovo array//

//filter//
//const filtro=numeri1.filter(function(el){return el>30});//
const filtro=numeri1.filter((el)=>el>30);
console.log(filtro);

//reduce//


//js manipulation of DOM//
const itemList=document.querySelectorAll(`#elenco li`);//prendi nel documento tutti gli il child di father con id elenco=> restituzione di un array//
itemList.forEach((el)=>{
    el.innerText+=`sono un elemento di lista`;
});
/*const itemList=document.querySelector(`#elenco li:nth-child(3)`);//il 3 elemento della lista//
itemList.innerText+=`sono stato modificato`;
const itemList1=document.querySelector(`#elenco li:last-child`);//l'ultimo figlio della ol//
itemList1.innerText+=`sono stato modificatoper 2°`;*/

//cambio di colore titolo h1//
function sfondo(){
document.getElementById("clicca").style.backgroundColor="red";
};

//seleziona in base alla classe con getElementsByClassName //
const testo=document.getElementsByClassName("testo");//ritorna oggetto//
console.log(testo);

//seleziona in base alla classe con querySelectorAll//
const testo1=document.querySelectorAll(".testo");//ritorna array//
testo1.forEach((el)=>{el.innerHTML+="java"});
console.log(testo1);

//cerare iun nuovo nodo con //
const newDiv=document.createElement("div");
newDiv.innerText="io sono qui!!!";
const body=document.querySelector("body");//nuovo nodo caricato nel tag body come ultimo elemento//
body.appendChild(newDiv);
//l'esercizio dava personallizazione del div con css//

//appendere un nodo ad un elemento sequento il DOM tree//
const h1=document.getElementById("clicca");
h1.appendChild(newDiv);// sopstata la posizione del nuovo div creato: da ultima a s sooto h1//

//per visualizzare il contenuto di un nodo//
const recupera=document.getElementById("clicca").innerText;
console.log(recupera);

//selezione, visualizzazione, modifica//
const recupera1=document.getElementById("h2");
let recuperato=recupera1.innerText;//con questo comando diciamo di visualizzare il contenuto di h2
recupera1.innerHTML+=`<code>&ltem&gt<code>testo sostituito<code>&ltem&gt<code>`// con il secondo comando di inniettare delL' Html//
console.log(recuperato);



















