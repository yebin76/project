import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4HL0wsHJIeh14TfIwx39hU1tunlgRwRk",
  authDomain: "authex-ba0c9.firebaseapp.com",
  projectId: "authex-ba0c9",
  storageBucket: "authex-ba0c9.appspot.com",
  messagingSenderId: "309402865871",
  appId: "1:309402865871:web:4cf37ca84e83dcf46327ba",
  measurementId: "G-FRNBNH3ZZP"
};

const app = initializeApp(firebaseConfig);


export const auth =getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;