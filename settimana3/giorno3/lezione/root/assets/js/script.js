//selezione bottone form//
const btn = document.getElementById('invia');

btn.addEventListener('click', function (e) {
	//e.preventDefault();
	let form = document.querySelector('form');
	let nome = document.getElementById('nome');
	let cognome = document.getElementById('cognome');
	let email = document.getElementById('email');
	let eta = document.getElementById('eta');

	if (!cognome.checkValidity()) {
		cognome.style.backgroundColor = 'red';
		document.getElementById('nomeForm').innerText =
			cognome.validationMessage;
		return;
	} else if (!email.checkValidity()) {
		email.style.backgroundColor = 'red';
		document.getElementById('nomeForm').innerText = email.validationMessage;
		return;
	} else if (!eta.checkValidity()) {
		eta.style.backgroundColor = 'red';
		document.getElementById('nomeForm').innerText = eta.validationMessage;
		return;
	}

	cognome.style.backgroundColor = 'transparent';
	email.style.backgroundColor = 'transparent';
	eta.style.backgroundColor = 'transparent';

	confirm('Sei sicuro dei dati inseriti?');

	if (confirm) {
		document.getElementById('nomeForm').innerText = nome;
		document.getElementById('cognomeForm').innerText = cognome;
		document.getElementById('emailForm').innerText = email;
		document.getElementById('etaForm').innerText = eta;
	} else {
		form.reset();
	}
});

// SET TIMEOUT ritardare l'esecuzione di qualcosa

let btnRigenera = document.getElementById('ricrea');
function generaCodice() {//prima funzione ad attivarsi(chiamata diretta)
	btnRigenera.setAttribute('disabled', 'true');//bottone disabilitato//
	document.getElementById('rigenera').innerText = '';//2°h3 nullo//
	document.getElementById('codice').style.textDecoration = 'none';//1°h3//

//genera codice in modo casuale(sempre a 6 cifre)//
	let codice = Math.floor(Math.random() * 100001);
	if (codice < 100000) {
		codice = codice + 100000;
	}
	document.getElementById('codice').innerText = codice;
	scadenza();
}
//allo scadere del trempo impostato esegui la funzione rigenera//
const scadenza = () => {//le arrow function non hanno l'hoisting//
	setTimeout(() => {
		rigenera();
	}, 5000);
};

//per non rendere modificabile il timer del timeout//
// function scadenza() {
//     setTimeout(() => {
//         rigenera();
//     }, 5000);
// }

/*traccia una linea sul 1° h3, sul 2° h3 metti il testo, rimuovi dal bottone 
riattiva il bottone per generare un nuovo codice*/
function rigenera() {
	document.getElementById('codice').style.textDecoration = 'line-through';
	document.getElementById('rigenera').innerText =
		'Codice scaduto, rigenerare!';
	btnRigenera.removeAttribute('disabled');
};

generaCodice();

// SETINTERVAL

let barra = document.getElementById('barra');
/*set interval come un ciclo do-while
barra da 0-100% in 5s
timer da 0-500 in 5000ms
il timer avanza di 1 alla volta per questo l'evento dovrà scatensarsi ogni 10 ms*/ 

const avviaTimer = () => {
	let timer = 0;
	if (timer === 0) {
		timer = 1;
		let progress = setInterval(() => {
			if (timer >= 500) {
				document.getElementById('stop').innerText = 'Progress bar completata!'
				clearInterval(progress);
			} else {
				barra.style.width = `${timer}px`;
				document.getElementById('stop').innerText = ''
				timer++;
				let percentuale = timer / 5;
				document.getElementById('percentuale').innerText = `${percentuale}%`;
			}
		}, 10);
	}
}

// avviaTimer();