// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJA6Pq4AQ5mOixwZ8G7394_etcf_E33mc",
  authDomain: "hopim-63b6d.firebaseapp.com",
  projectId: "hopim-63b6d",
  storageBucket: "hopim-63b6d.appspot.com",
  messagingSenderId: "855581474770",
  appId: "1:855581474770:web:e71aebde9e29a7683f120b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();

auth.languageCode = 'tr';

export { app, db, auth, storage };
