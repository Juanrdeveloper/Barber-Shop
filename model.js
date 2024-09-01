// model.js

class ClientModel {
    constructor() {
        this.clients = [];
    }

    addClient(name) {
        const newClient = { id: Date.now(), name };
        this.clients.push(newClient);
        return newClient;
    }

    removeClient(id) {
        this.clients = this.clients.filter(client => client.id !== id);
    }

    getClients() {
        return this.clients;
    }
}

export default ClientModel;