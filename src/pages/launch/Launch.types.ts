import { ILaunch } from '@/types/launches';

export interface ILaunchState {
	launch: ILaunch | null;
	isFetchingLaunch: boolean;
}
