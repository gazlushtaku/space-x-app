import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from '@/constants/routes';

import './index.css';

const element = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(element);

const router = createBrowserRouter(routes);

if (root) {
	root.render(
		<React.StrictMode>
			<ChakraProvider>
				<RouterProvider router={router} />
			</ChakraProvider>
		</React.StrictMode>
	);
} else {
	throw new Error('No root element!');
}
