import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD5RDi5I8fCMwR1o_-DQ2EtSBGknUQuQ3I",
    authDomain: "ga-students-8ee1b.firebaseapp.com",
    projectId: "ga-students-8ee1b",
    storageBucket: "ga-students-8ee1b.appspot.com",
    messagingSenderId: "23577796184",
    appId: "1:23577796184:web:7ed23853cb524c39e7742d"
}

firebase.initializeApp(config);

// Setup a provider .. Google, Facebook, Github etc
const googleProvider = new firebase.auth.GoogleAuthProvider();

// Reference to firebase auth
const auth = firebase.auth();

// Set up auth functions
function login() {
    auth.signInWithPopup(googleProvider);
}

function logout() {
    auth.signOut();
}

// Export the auth functions
export {
    login,
    logout,
    auth
}