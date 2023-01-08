import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const envVariables = import.meta.env;

const firebaseConfig = {
	apiKey: envVariables.VITE_FIREBASE_API_KEY,
	authDomain: envVariables.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: envVariables.VITE_FIREBASE_PROJECT_ID,
	storageBucket: envVariables.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: envVariables.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: envVariables.VITE_FIREBASE_APP_ID
};

const firebaseApp = initializeApp(firebaseConfig);

export const firebaseDatabase = getDatabase(firebaseApp);
