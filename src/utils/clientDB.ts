import localforage from 'localforage';

let clientDB:any;

class ClientDB {
    static get Instance() {
        if (!clientDB)
            clientDB = localforage.createInstance({
                name: 'Academic-Portfolio',
                driver: localforage.LOCALSTORAGE,
            });
        return clientDB;
    }
}

export default ClientDB;