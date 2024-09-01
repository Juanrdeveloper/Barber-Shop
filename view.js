// view.js

class ClientView {
    constructor() {
        this.clientListElement = document.getElementById('client-list');
        this.addClientForm = document.getElementById('add-client-form');
        this.clientNameInput = document.getElementById('client-name');
    }

    renderClients(clients) {
        this.clientListElement.innerHTML = '';
        clients.forEach(client => {
            const clientElement = document.createElement('li');
            clientElement.textContent = client.name;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.onclick = () => this.onDeleteClient(client.id);
            clientElement.appendChild(deleteButton);
            this.clientListElement.appendChild(clientElement);
        });
    }

    bindAddClient(handler) {
        this.addClientForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const clientName = this.clientNameInput.value.trim();
            if (clientName) {
                handler(clientName);
                this.clientNameInput.value = '';
            }
        });
    }

    bindDeleteClient(handler) {
        this.onDeleteClient = handler;
    }
}

export default ClientView;