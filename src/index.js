import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {InitializeApp}from 'firebase/app';
// import{getFirestore , collection, getDocs} from 'firebase/firestore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const firebaseConfig = {
//   apiKey: "AIzaSyBS1FmznLg5sOckEp1WIIKAK16MtEEtXhU",
//   authDomain: "al-impex-emplyoee.firebaseapp.com",
//   projectId: "al-impex-emplyoee",
//   storageBucket: "al-impex-emplyoee.appspot.com",
//   messagingSenderId: "19583183697",
//   appId: "1:19583183697:web:ad54351a969f746c384170"
// };

// InitializeApp(firebaseConfig)

// const db =getFirestore()

// const colRef =collection(db)

// getDocs(colRef)
//   .then((snapshoot) => {

//   } )