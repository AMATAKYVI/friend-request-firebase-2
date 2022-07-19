// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyArGXyrOVnNJvjAc1ywB32CPP9N53f3RFA',
  authDomain: 'friend-request-951d1.firebaseapp.com',
  projectId: 'friend-request-951d1',
  storageBucket: 'friend-request-951d1.appspot.com',
  messagingSenderId: '1061259565617',
  appId: '1:1061259565617:web:8ee38b91c32dc17d115310',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
