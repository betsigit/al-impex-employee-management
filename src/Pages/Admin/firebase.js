import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getDatabase } from 'firebase/database';

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
const analytics = getAnalytics(app);
export const storage = getStorage(app);
const db = getDatabase(app);