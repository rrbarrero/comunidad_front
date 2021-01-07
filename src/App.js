//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import AppRoutes from './Containers/AppRoutes/AppRoutes';
import React from 'react'
import IsLogedIn from './Services/User/IsLogedIn';

export const UserContext = React.createContext({
  isAuthenticated: null,
  currentUser: null,
})

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(IsLogedIn());
  const [currentUser, setCurrentUser] = useState(JSON.parse(window.sessionStorage.getItem('currentUser')));

  
  console.log("App", currentUser, isAuthenticated);

  return (
    <div className="App">
      <UserContext.Provider value={{isAuthenticated, currentUser}}>
        <AppRoutes
          setCurrentUser={setCurrentUser}
          setIsAuthenticated={setIsAuthenticated} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
