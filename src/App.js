import './App.css';
import Login from './components/Login/Login';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth } from './services/firebase';
import Header from './components/Header/Header';
import { fetchAllStudents, fetchStudent } from './services/students-service';

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
      {
        userState.user ?
          <>
            <Header user={userState.user} />
            <h1>{userState.user.displayName}</h1>
            <img
              style={{ height: '2rem', borderRadius: '50%' }}
              src={userState.user.photoURL}
              alt={userState.user.displayName} />
          </>
          :
          <Login />
      }
      <div className="main"></div>

    </div>
  );
}

export default App;
