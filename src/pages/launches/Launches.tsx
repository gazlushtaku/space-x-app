import { useEffect, useState } from 'react';
import { Flex, Grid, Spinner } from '@chakra-ui/react';
import { LaunchOverview } from '@/pages/launches/components';

import { ILaunch } from '@/types/launches';
import { ILaunchesState } from './Launches.types';

import request from '@/services/request';

const Launches = (): JSX.Element => {
	const [state, setState] = useState<ILaunchesState>({
		data: [],
		isFetchingLaunches: true
	});

	const { data, isFetchingLaunches } = state;

	const getLaunchesData = async () => {
		try {
			const apiUrl = `${import.meta.env.VITE_BASE_API_URL}/launches`;
			const data = await request<ILaunch[]>(apiUrl, { method: 'GET' });

			setState({ data, isFetchingLaunches: false });
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getLaunchesData();
	}, []);

	if (isFetchingLaunches) {
		return (
			<Flex height='100vh' justifyContent='center' alignItems='center'>
				<Spinner size='xl' />
			</Flex>
		);
	}

	return (
		<div>
			<Grid
				templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
				gap={6}
				maxWidth='container.lg'
				marginX={[3, 5, 'auto']}
				marginY='6'
			>
				{data.map((launch, index) => {
					const overviewProps = {
						mission_name: launch.mission_name,
						flight_number: launch.flight_number,
						details: launch.details,
						links: launch.links
					};

					return <LaunchOverview key={index} {...overviewProps} />;
				})}
			</Grid>
		</div>
	);
};

export default Launches;
