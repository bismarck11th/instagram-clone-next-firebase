// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA4xPof3PsKYWXAHHjpp15Ff-l-80oiDVc',
  authDomain: 'insta-next-35bb1.firebaseapp.com',
  projectId: 'insta-next-35bb1',
  storageBucket: 'insta-next-35bb1.appspot.com',
  messagingSenderId: '881727705106',
  appId: '1:881727705106:web:bb03cb78438d913d63c8cb'
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
