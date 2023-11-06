//dichiarazione di una funzione con js//
function area (lato1, lato2){// keyword-name-parameti(2){corpo}//
    return lato1*lato2;//ritorno il valore del prodott0//
};
console.log(area(1,2));//invochiamo la f in console e diamo argomenti numerici ai parametri//

//----------------------------------------------------------------------------------------------------------------------//
function somma(a, b){//oppure b=3//
    if(b===undefined){b=3};
    return a+b
};
console.log(somma());//NaN//
console.log(somma(5));//8//

//----------------------------------------------------------------------------------------------------------------------//
let variabile=differenza;//contenuto della funzione//
console.log(differenza(5,3));//hoisting//

function differenza(a,b){
    return a-b;
};

console.log(variabile);//2//

//----------------------------------------------------------------------------------------------------------------------//
const ciao=function(){//non soggetta ad hoisting//
    console.log("ciao");
};
ciao()//ciao//

function scrivi(){
    let somma=3+5;
    valore(somma)//hoisting con argomento//
}

function valore(a){
    valoreFinale=a+5;
    document.getElementById("titolo").innerHTML=valoreFinale;
}

scrivi();

//----------------------------------------------------------------------------------------------------------------------//
function leggi(){
    let somma=3+5;
    return somma;
}

function valor(a){
    let valoreFinale=a+10;
    return valoreFinale;
}

document.getElementById("paragrafo").innerHTML=valor(leggi());//una f può portare come argomento un'altra f//

//----------------------------------------------------------------------------------------------------------------------//
function moltiplica(a,b){
    let risultato=a*b;
    document.getElementById("paragrafo1").innerHTML=risultato;
}
moltiplica(5,8);//40//

//----------------------------------------------------------------------------------------------------------------------//
document.getElementById("paragrafo2").innerHTML=stringa("pippo","pluto");

function stringa(a,b){
    let catena=a+b;
    return catena;
};

//----------------------------------------------------------------------------------------------------------------------//
function moltiplica1(a,b){
    if(b===undefined){b=4}
    let risultato=a*b;
    return risultato;
};
console.log(moltiplica1(2));

//----------------------------------------------------------------------------------------------------------------------//
saluta()

function saluta(){
    document.getElementById("paragrafo3").innerHTML="ciao";
};

//----------------------------------------------------------------------------------------------------------------------//
let presentazione="ciao a tutti sono Mario Benvenuti da Genova e sono maschio";
console.log(presentazione.indexOf("sono"));//primo sono//
console.log(presentazione.lastIndexOf("sono"));//secondo sono//
console.log(presentazione.search("sono"));
console.log(presentazione.length);//lungezza//
console.log(presentazione.slice(6,12));//isola pezzo//
console.log(presentazione.slice(-6,-12));
console.log(presentazione.substring(8));//da 8 in poi//

//----------------------------------------------------------------------------------------------------------------------//





