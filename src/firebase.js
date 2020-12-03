import firebase from 'firebase/app';

require('firebase/auth')
require('firebase/firestore')
require('firebase/storage')
require('firebase/functions')


var firebaseConfig = {
    apiKey: "AIzaSyBAQ-MDK_fDXJI9O0sSeaaaWfdSkuasEp4",
    authDomain: "repartidores-524ed.firebaseapp.com",
    databaseURL: "https://repartidores-524ed.firebaseio.com",
    projectId: "repartidores-524ed",
    storageBucket: "repartidores-524ed.appspot.com",
    messagingSenderId: "468473832934",
    appId: "1:468473832934:web:8abc4fbed686128a9c2227",
    measurementId: "G-WDMPDHEW0W"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const functions = firebase.functions()

export {
	firebase,
	auth,
	db,
	storage,
	functions
}