import './App.css';
import { useState, useEffect } from 'react';
import { auth } from './services/firebase';
import { fetchAllStudents, fetchStudent } from './services/students-service';
import { fetchHomework } from './services/homework-service';
import Layout from './components/Layout/Layout';

function App() {
  const [userState, setUserState] = useState({});
  const [students, setStudents] = useState();
  const [loggedInStudent, setLoggedInStudent] = useState({});
  const [homework, setHomework] = useState();

  async function getAppData() {
    // Get Students
    const allStudents = await fetchAllStudents()
    setStudents(allStudents)

    const authenticatedStudent = await fetchStudent(auth.currentUser.uid);
    setLoggedInStudent(authenticatedStudent[0]);

    // Get Homeworks for a student
    const homework = await fetchHomework();
    setHomework(homework)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUserState({ user }));

    // Get data needed for application to render
    getAppData()

    return function () {
      unsubscribe();
    }
  }, [userState.user])

  return (
    <div className="App">
      <Layout 
        user={userState.user}
        students={students} 
        homework={homework}
        student={loggedInStudent} 
      />
    </div>
  );
}

export default App;
