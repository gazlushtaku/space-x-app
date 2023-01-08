export interface ILaunchLinks {
	mission_patch: string;
	mission_patch_small: string;
}

export interface IRocket {
	rocket_id: string;
	rocket_name: string;
	rocket_type: string;
}

export interface ILaunch {
	mission_name: string;
	flight_number: number;
	launch_year: string;
	details?: string;
	links: ILaunchLinks;
	rocket: IRocket;
}
