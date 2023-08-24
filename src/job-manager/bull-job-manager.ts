import { Queue, Worker } from 'bullmq';
import { JobManagerInterface } from './job-manager.interface';

export class BullJobManager implements JobManagerInterface {
	private _queue: Queue;
	private _worker: Worker | undefined;
    
	constructor(queueName: string, connectionOpts: any) {
		this._queue = new Queue(queueName);
	}

	async addJob(data: any): Promise<void> {
		await this._queue.add('job', data);
	}

	async addJobProcessor(callback: (data: any) => Promise<void>): Promise<void> {
		this._worker = new Worker(this._queue.name, async (job) => {
			await callback(job.data);
		});
	}
}
