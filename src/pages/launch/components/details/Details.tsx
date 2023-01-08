import { Box, Heading, Image, Text } from '@chakra-ui/react';

import { ILaunch } from '@/types/launches';

const Details = (props: ILaunch) => {
	const { mission_name, links, details, launch_year, rocket } = props;

	return (
		<Box flex='1' mr='3'>
			<Image src={links?.mission_patch_small} mb='6' alt='Image of flight' />
			<Heading mb='4'>{mission_name}</Heading>

			{details && (
				<Text>
					<strong>Description: </strong>
					{details}
				</Text>
			)}

			<Text>
				<strong>Launch year: </strong>
				{launch_year}
			</Text>

			<Text>
				<strong>Rocket name: </strong>
				{rocket.rocket_name}
			</Text>
		</Box>
	);
};

export default Details;
