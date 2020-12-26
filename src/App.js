import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import AppRoutes from './Containers/AppRoutes/AppRoutes';

import IsLogedIn from './Services/User/IsLogedIn';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(IsLogedIn());
  const [currentUser, setCurrentUser] = useState(JSON.parse(window.sessionStorage.getItem('currentUser')));

  console.log("App", currentUser, isAuthenticated);

  return (
    <div className="App">
      <AppRoutes
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated} />
    </div>
  );
}

export default App;
