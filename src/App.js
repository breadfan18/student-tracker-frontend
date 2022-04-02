import './App.css';
import { useState, useEffect } from 'react';
import { auth } from './services/firebase';
import Header from './components/Header/Header';
import { fetchAllStudents, fetchStudent } from './services/students-service';
import Layout from './components/Layout/Layout';

function App() {
  const [userState, setUserState] = useState({});
  const [students, setStudents] = useState();

  async function getAppData() {
    // Get Students
    const allStudents = await fetchAllStudents()
    setStudents(allStudents)
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
      <Layout user={userState.user}/>
    </div>
  );
}

export default App;
