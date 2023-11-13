const addBtn = document.querySelector('#inserisci');//bottone//
let taskList = document.querySelector('#listaTask');//lista non ordinata//
const task = document.querySelector('#task');//contenitore lista disordinata//
const tasks = [];
//array voto che sara poi popolato con i task//
/*al bottone è stato aggiunto un evento in attesa, l'evento è sctenato dal click del mouse che fa scttare
una funzione: se il valore del testo inserito nel campo di input e viverso da nullo, esegui tre funzioni di
call-back.In caso contaraio fai comparire un alert*/
addBtn.addEventListener('click', function () {
	if (task.value !== '') {
		aggiungiTask();
		scriviLista();
		cancellaInput();
	} else {
		alert('Inserire un task nel campo di input!');
		return;
	}
});
/*se il dato inserito è buono la funzione aggiungitask pusha nell'array il valore inserito nel campo di 
input*/
const aggiungiTask = () => {
	tasks.push(task.value);
};
/*se il dato inserito è buono la funzione scrivilista prende la lista e gli inietta dell'html*/ 
const scriviLista = () => {
	taskList.innerHTML = '';
	tasks.forEach((element, index) => {
		let singletask = document.createElement('li');
        singletask.style.borderBottom = '1px solid gray';
        singletask.innerHTML = `${element}`;

        let pulsante = document.createElement('button');
        pulsante.classList.add('button');
        pulsante.innerHTML = '❌';
        pulsante.setAttribute('onclick', `elimina(${index})`);

        singletask.appendChild(pulsante);
		// singletask.innerHTML = `${element} <button class="button" onclick="elimina(${index})">❌</button>`;
		taskList.appendChild(singletask);
	});
	barraTask();
};

function cancellaInput() {
	task.value = '';
}

function elimina(index) {
	tasks.splice(index, 1);
	scriviLista();
}

function barraTask() {
	const elencoTask = document.querySelectorAll('li');
	elencoTask.forEach((element) => {
		element.onclick = function () {
			element.classList.toggle('barrato');
		};
	});
}