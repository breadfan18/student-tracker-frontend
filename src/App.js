import './App.css';
import Login from './components/Login/Login';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { auth } from './services/firebase';
import Header from './components/Header/Header';

function App() {
  const [userState, setUserState] = useState({});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUserState({ user }));

    return function () {
      unsubscribe();
    }
  }, [userState.user])

  return (
    <div className="App">
        {
          userState.user ?
            <>
              <Header user={userState.user}/> 
              <h1>{userState.user.displayName}</h1>
            </>
          :
          <Login />
        }
      <div className="main"></div>

    </div>
  );
}

export default App;
