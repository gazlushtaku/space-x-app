import { ILaunch } from '@/types/launches';

export type ILaunchOverviewProps = Pick<
	ILaunch,
	'flight_number' | 'links' | 'mission_name' | 'details'
>;
