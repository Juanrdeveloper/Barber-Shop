// controller.js

import ClientModel from './model.js';
import ClientView from './view.js';

class ClientController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAddClient(this.handleAddClient);
        this.view.bindDeleteClient(this.handleDeleteClient);

        this.updateView();
    }

    updateView() {
        const clients = this.model.getClients();
        this.view.renderClients(clients);
    }

    handleAddClient = (name) => {
        this.model.addClient(name);
        this.updateView();
    }

    handleDeleteClient = (id) => {
        this.model.removeClient(id);
        this.updateView();
    }
}

// Inicializar la aplicación
const app = new ClientController(new ClientModel(), new ClientView());