import { Queue, Worker } from 'bullmq';

export class JobManager {
	private _queue: Queue;
	private _worker: Worker;
    
	constructor(queueName: string) {
		this._queue = new Queue(queueName);
	}

	async addJob(data: object): Promise<void> {
		await this._queue.add('job', data);
	}

	async addProcessor(callback: (data: any) => Promise<void>): Promise<void> {
		this._worker = new Worker(this._queue.name, async (job) => {
			await callback(job.data);
		});
	}

}