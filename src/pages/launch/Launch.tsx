import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button, Flex, Spinner } from '@chakra-ui/react';
import { Comments, Details } from '@/pages/launch/components';

import { ILaunch } from '@/types/launches';
import { ILaunchState } from './Launch.types';

import request from '@/services/request';

const Launch = (): JSX.Element => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [state, setState] = useState<ILaunchState>({
		launch: null,
		isFetchingLaunch: true
	});

	const { launch, isFetchingLaunch } = state;

	const getLaunchData = async () => {
		try {
			const apiUrl = `${import.meta.env.VITE_BASE_API_URL}/launches/${id}`;
			const data = await request<ILaunch>(apiUrl, { method: 'GET' });

			setState({
				launch: data,
				isFetchingLaunch: false
			});
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getLaunchData();
	}, []);

	if (isFetchingLaunch) {
		return (
			<Flex height='100vh' justifyContent='center' alignItems='center'>
				<Spinner size='xl' />
			</Flex>
		);
	}

	return (
		<div>
			<Button
				color='teal'
				margin='6'
				variant='link'
				onClick={() => navigate('/')}
			>
				Go back
			</Button>

			{launch && (
				<Flex direction={['column', 'column', 'row']} gap='6' margin='6'>
					<Details {...launch} />
					<Comments {...launch} />
				</Flex>
			)}
		</div>
	);
};

export default Launch;
