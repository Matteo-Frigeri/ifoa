//LEZIONE 3 SETTIMANA 3//

//EVENTI//
/*Si possono assegnare più eventi ed uno stesso elemento purché questi non si ripetano, nel qual caso
il secondo evento contraddirà il primo.

-AddEventListener= ascoltatore di eventi, si attiva subito rimanendo in ascolto dell’evento associato,
quando questo si verifica esegue la funzione associata, si attiva una volta sola.

-L‘evento diretto associato ad un elemento si attiva ogni volta (chiamata diretta):
elemento-nome evento-(nome funzione())

-le chiamate dirette si possono fare sia in HTML che in Js, ma la gestione della funzione è esclusiva di Js*/
function colora() {
    document.getElementById("blocco").style.color = "red";//chiamata diretta//
};
document.getElementById("blocco").addEventListener("mouseleave", function () {
    document.getElementById("blocco").style.backgroundColor = "trasnsparent";
});
//evento in attesa che annulla la chiamata diretta negli effetti//
document.getElementById("button").addEventListener("click", function () {
    document.getElementById("scrivi").innerText = "sono stato scritto da Js"
});//evento in attesa(1)//

function scrivi() {
    document.getElementById("scrivi").innerText = "sono stato scritto da HTML"
};//chiamata diretta(2)//
/*il (2) comando viene annullato dal (1) poichè quest'ultimo entra subito in funzione appena caricata
 la pagina. Quindi o faccio la chiamata diretta o l'evento in attesa, entrambi no.*/

//FORM//
/*validare un form: controllare che i campi del form compilati contengano dati validi.
Senza librerie esterne o strutture di controllo interne della validità del form (if), js si 
appoggia al DOM quindi alla vsalidazione HTML.
 
-Il DOM enumera tutti i form che trova nel documento e ci da la possibilita di raggiungerli
tramite scorcatoia, scomoda, meglio id#*.
 
-Se il button a fine form e di tipo submit e viene premuto, cerca subito la action del form,
se voglio controllare l'evento con js devo impedere l'esecuzione di questo processo automatico con 
preventDefault()*/


/*API è l'acronimo di application programming interface in Italiano interfaccia di programmazione
 delle applicazioni. Un'API è un intermediario software grazie al quale due applicazioni possono 
 comunicare tra loro.
 
 -Per fare la chack vlidity(api del browser): abbaimo tre campi ne l form a compilazione obbligatoria e un ultimo campo
 in quia bbiamo stettato una renge dai valori.
 
 -se campi obbligatori non sono stati compilati o se si è inserito un valore fuori renge ci compare
 un messaggio di errore predefinito del browser.
 
 -chack vlidity+require dell'HTML ci premette di avere un minimo controllo del form.
 
 -L'inerazione è possibile anche col BOM ossia gli oggetti del browser il qui oggetto principe è 
 window, la finistra.
 -3 tipi di pop up gestiti dall'oggetto window:
   -alert:messaggio;
   -conferma: ok, annulla;
   -promt: scrivere;
 
-window.navigator: navigato.online(se l'utente è online) atrraverso i cookies che facciamo accetare (tecnici)
altrimenti l'utente non puo navigare.

-setTimeout: esegue una funzione allo scadere del timer, non interrompendo il flusso di js, indipendentemente
da quello che succede èrima (asincronia)*/





