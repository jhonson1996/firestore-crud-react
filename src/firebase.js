import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAEHWbts15le3Q_cTWLMCzT3E3yrLO2K60",
    authDomain: "cru-firebase.firebaseapp.com",
    projectId: "cru-firebase",
    storageBucket: "cru-firebase.appspot.com",
    messagingSenderId: "807838698525",
    appId: "1:807838698525:web:5adaa7c2f42600cd8e4af4"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export const db = fb.firestore();
export default auth