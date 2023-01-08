import { useEffect, useState } from 'react';
import { ref, set, get } from 'firebase/database';
import { useParams } from 'react-router-dom';

import { Box, Button, Flex, Heading, Input, Text } from '@chakra-ui/react';

import { firebaseDatabase } from '@/lib/firebase';

import { ILaunch } from '@/types/launches';

const Comments = (props: ILaunch) => {
	const { rocket } = props;
	const { id } = useParams();

	const [comments, setComments] = useState<string[]>([]);
	const [comment, setComment] = useState('');

	const addComment = async (text: string) => {
		try {
			await set(ref(firebaseDatabase, `launches/${rocket.rocket_id}-${id}`), [
				...comments,
				text
			]);
			getAllComments();
		} catch (error) {
			console.error(error);
		}
	};

	const getAllComments = async () => {
		try {
			const snapshot = await get(
				ref(firebaseDatabase, `launches/${rocket.rocket_id}-${id}`)
			);
			setComments(snapshot.val() || []);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getAllComments();
	}, []);

	return (
		<Box flex='1' maxWidth={['100%', '100%', 'md']}>
			<Box border='1px solid' borderColor='teal' borderRadius='5' padding='4'>
				<Heading mt='3' mb='6' size='md'>
					Comments
				</Heading>

				{comments.map((comment, index) => (
					<Text mb='2' key={index}>
						{comment}
					</Text>
				))}

				<Flex>
					<Input
						size='sm'
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
					<Button
						ml='2'
						size='sm'
						type='button'
						onClick={() => addComment(comment)}
					>
						Send
					</Button>
				</Flex>
			</Box>
		</Box>
	);
};

export default Comments;
