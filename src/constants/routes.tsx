import { Launches, Launch } from '@/pages';

const routes = [
	{
		path: '/',
		element: <Launches />
	},
	{
		path: 'launch/:id',
		element: <Launch />
	}
];

export default routes;
