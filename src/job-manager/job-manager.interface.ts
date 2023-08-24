export interface JobManagerInterface {
	addJob(data: any): Promise<void>;
	addJobProcessor(callback: (data: any) => Promise<void>): Promise<void>;
}
