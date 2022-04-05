import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB9dtVcf9r19t1mCIdThybK9AcGpcNVUW4",
  authDomain: "cart-app-beed3.firebaseapp.com",
  projectId: "cart-app-beed3",
  storageBucket: "cart-app-beed3.appspot.com",
  messagingSenderId: "449978739214",
  appId: "1:449978739214:web:bff67fb15bb1d565526a5f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// export default db;

