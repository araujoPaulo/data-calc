import { MongoClient } from 'mongodb';

export class Mongo {
	private _client: MongoClient;

	constructor(connectionOpts: any) {
		this._client = new MongoClient('mongodb://localhost:27017');
	}

	async connect() {
		await this._client.connect();
	}

    async insert() {
        
    }
}
