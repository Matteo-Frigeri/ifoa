const url = "https://striveschool-api.herokuapp.com/api/product/"
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0YTEwNTJjNmEwZDAwMTg0OTYwYjIiLCJpYXQiOjE3MDIzNjM1MjEsImV4cCI6MTcwMzU3MzEyMX0.diSyd_KjIrrqVQTYu1E-Wfap-4X84MtMBiRFmAQ2Atk";
const headers = {
    "Authorization": token,
    "Accept": "application/json",
    "Content-Type": "application/json"
}

let products = []


const getRecords = () => {
    fetch(url, {
        headers: headers
    })
        .then(response => response.json())
        .then(data => {
            products = data
            console.log(data);
            createTable(data);
        })
}

window.onload = () => { getRecords(); };

async function getRecord(id) {
    const finalUrl = url + id
    const response = await fetch(finalUrl, {
        headers: headers
    })
    return response.json()
}

const deleteRecord = (id) => {
    if (confirm('Confermi la tua scelta')) {
        const finalUrl = url + id
        fetch(finalUrl, {
            method: "DELETE",
            headers: headers
        })
            .then(() => {
                products.splice(products.findIndex(element => element._id === id), 1)
                createTable(products)

            })
            .catch((err) =>
                console.log(err)
            )
    }
}

function createTable(data) {
    const table = document.querySelector('tbody')
    table.innerHTML = ''

    data.forEach(element => {
        let newRow = `
                <tr>
    <th>${element._id}</th>
    <td>${element.name}</td>
    <td>${element.description}</td>
    <td>${element.price}</td>
    <td>${element.imageUrl.substr(0, 30)}</td>
    <td class="justify-content-end">
        <button type="button" class="btn btn-sm btn-outline-primary mx-1" onclick="mostraOggetto('${element._id}')">Dettagli</button>
        <button type="button" class="btn btn-sm btn-outline-warning mx-1" data-bs-toggle="modal" data-bs-target="#productDetails" onclick="handleModalData('${element._id}','edit')" id="b1">Modifica</button>
        <button type="button" class="btn btn-sm btn-outline-danger mx-1" onclick="deleteRecord('${element._id}')" id="b2">Elimina</button>
    </td>
</tr>
        `
        table.innerHTML += newRow;
    });
}

function mostraOggetto(id) {
    const finalUrl = url + id;

    fetch(finalUrl, {
        headers: headers
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Errore nella richiesta');
            }
            return response.json();
        })
        .then(data => {

            localStorage.setItem("id", JSON.stringify(data));
        })
        .catch(error => {
            console.error('Errore:', error);

        });
    mostraAlertConLink()
}

function mostraAlertConLink() {

    const alertElement = document.createElement('div');
    alertElement.classList.add('alert', 'alert-primary', 'alert-dismissible', 'fade', 'show');
    alertElement.role = 'alert';


    alertElement.innerHTML = `
        <div class="d-flex justify-content-around">
        <h3>Visita la pagina del prodotto:</h3> 
        <button type="button" class="btn btn-close bg-danger text-light" data-bs-dismiss="alert" aria-label="Close">CHIUDI</button>
        <a href="./paginaDettaglio.html" class="btn btn-success">VAI AL DETTAGLIO PRODOTTO</a>
        </div>
    `;
    document.body.appendChild(alertElement);
    new bootstrap.Alert(alertElement);
}


async function handleModalData(id, action) {
    action === 'show'
        ? document.getElementById('buttonSave').style.display = 'none'
        : document.getElementById('buttonSave').style.display = 'block'

    if (id !== null) {
        const data = await getRecord(id)
        document.getElementById('productDetailsTitle').innerText = "Dettagli prodotto " + data.name
        document.getElementById('inputName').value = data.name
        document.getElementById('inputPrice').value = data.price
        document.getElementById('inputDescription').value = data.description
        document.getElementById('inputBrand').value = data.brand
        document.getElementById('inputImageUrl').value = data.imageUrl
        document.getElementById('productPhoto').src = data.imageUrl
        document.getElementById('productPhoto').alt = "Immagine prodotto " + data.name
        document.getElementById('buttonSave').setAttribute('onclick', `sendData('${action}', '${id}')`)
    } else {
        document.getElementById('productDetailsTitle').innerText = "Crea nuovo prodotto"
        document.getElementById('inputName').value = ''
        document.getElementById('inputPrice').value = ''
        document.getElementById('inputDescription').value = ''
        document.getElementById('inputBrand').value = ''
        document.getElementById('inputImageUrl').value = ''
        document.getElementById('productPhoto').src = ''
        document.getElementById('productPhoto').alt = ''
        document.getElementById('buttonSave').setAttribute('onclick', `sendData('${action}', null)`)
    }
}

const sendData = (action, id) => {
    const newRecord = {
        "name": document.getElementById('inputName').value,
        "brand": document.getElementById('inputBrand').value,
        "description": document.getElementById('inputDescription').value,
        "price": document.getElementById('inputPrice').value,
        "imageUrl": document.getElementById('inputImageUrl').value,
    }

    const finalUrl = url + id

    fetch(finalUrl, {
        method: action = "PUT",
        headers: headers,
        body: JSON.stringify(newRecord)
    })
        .then((response) => response.json())
        .then(data => {
            if (action === 'edit') {
                products.splice(products.findIndex(element => element._id === id), 1, data)
                createTable(products)
            } else {
                products.push(data)
                createTable(products)
            }
        })
}