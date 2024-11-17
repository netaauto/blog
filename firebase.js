import firebase, { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';
import { getFirestore } from 'firebase/firestore';



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
