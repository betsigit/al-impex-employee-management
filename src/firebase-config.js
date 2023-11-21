import { getFirestore, } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyA3bjJGSoQ3gppx1d-BwV2H6dZrlVllG6c",
  authDomain: "al-impex.firebaseapp.com",
  databaseURL: "https://al-impex-default-rtdb.firebaseio.com",
  projectId: "al-impex",
  storageBucket: "al-impex.appspot.com",
  messagingSenderId: "839108147543",
  appId: "1:839108147543:web:dd569b270ca34cfedf2612",
  measurementId: "G-7BEXVRSRV4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);