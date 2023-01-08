import { ILaunch } from '@/types/launches';

export interface ILaunchesState {
	data: ILaunch[];
	isFetchingLaunches: boolean;
}
