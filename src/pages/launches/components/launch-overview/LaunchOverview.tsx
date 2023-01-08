import { useNavigate } from 'react-router-dom';
import {
	GridItem,
	Image,
	Stack,
	Heading,
	Text,
	Card,
	CardBody
} from '@chakra-ui/react';

import { ILaunchOverviewProps } from './LaunchOverview.types';

const LaunchOverview = (props: ILaunchOverviewProps): JSX.Element => {
	const { flight_number, mission_name, details, links } = props;

	const navigate = useNavigate();

	return (
		<GridItem
			onClick={() => navigate(`/launch/${flight_number}`)}
			cursor='pointer'
		>
			<Card maxW='sm' height='100%'>
				<CardBody>
					<Image
						src={
							links.mission_patch_small ||
							'https://static.thenounproject.com/png/1554486-200.png'
						}
						alt='Launch image'
						borderRadius='lg'
						marginX='auto'
						width='100%'
						height='300px'
						objectFit='contain'
						objectPosition='center'
					/>

					<Stack mt='6' spacing='3'>
						<Heading cursor='pointer' size='md'>
							{mission_name}
						</Heading>

						{details && <Text noOfLines={2}>{details}</Text>}
					</Stack>
				</CardBody>
			</Card>
		</GridItem>
	);
};

export default LaunchOverview;
