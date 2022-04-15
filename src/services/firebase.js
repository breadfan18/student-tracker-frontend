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

// Base URL for API calls
const STUDENT_BASE_URL = 'http://localhost:3001/api/students/';
const INSTRUCTOR_BASE_URL = 'http://localhost:3001/api/instructors/';

// Set up auth functions
function studentLogin(props) {
    console.log(props, 'are student login props')
    auth.signInWithPopup(googleProvider).then(() => {
        const foundUser = props.students.find(student => student.uid === auth.currentUser.uid);

        if (foundUser !== undefined) {
            console.log(foundUser, 'is the student ALREADY in the database')
            // redirect  to student dashboard?
        } else {
            fetch(STUDENT_BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    uid: auth.currentUser.uid,
                    displayName: auth.currentUser.displayName,
                    email: auth.currentUser.email,
                })
            }).then(res => res.json())
                .then(student => {
                    console.log(student, 'is NEW student');
                    // redirect to student dashboard
                })
        }
    })
}

function instructorLogin() {
    auth.signInWithPopup(googleProvider).then(() => {
        const instructorList = fetch(INSTRUCTOR_BASE_URL).then(res => res.json())
        instructorList.then(instructors => {
            const foundUser = instructors.find(instructor => instructor.uid === auth.currentUser.uid);
            console.log(foundUser, 'is the instructor')
            if (foundUser !== undefined) {
                return;
            } else {
                fetch(INSTRUCTOR_BASE_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        uid: auth.currentUser.uid,
                        displayName: auth.currentUser.displayName,
                        email: auth.currentUser.email,
                    })
                }).then(res => res.json())
                    .then(student => {
                        console.log(student, 'is NEW student');
                        // redirect to student dashboard
                        return
                    })
            }
        })
    })
}

function logout() {
    return auth.signOut();
}

// Export the auth functions
export {
    studentLogin,
    instructorLogin,
    logout,
    auth
}