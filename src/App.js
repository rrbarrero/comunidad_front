import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blog from './Containers/Blog/Blog';
import Foro from './Containers/Foro/Foro';
import Registro from './Containers/Registro/Registro';
import LoginForm from './Containers/LoginForm/LoginForm';
import LogOut from './Containers/LogOut/LogOut';
import IsLogedIn from './Services/User/IsLogedIn';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(IsLogedIn());
  const [currentUser, setCurrentUser] = useState('');

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/registro">
            <Registro />
          </Route>
          <Route path="/login">
            <LoginForm
              setCurrentUser={setCurrentUser}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          </Route>
          <Route path="/logout">
            <LogOut
              setCurrentUser={setCurrentUser}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          </Route>
          <Route path="/foro">
            <Foro />
          </Route>
          <Route path="/">
            <Blog isAuthenticated={isAuthenticated}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
