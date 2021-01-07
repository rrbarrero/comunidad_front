import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Registro from '../Registro/Registro';
import Success from '../Registro/Success';
import LoginForm from '../LoginForm/LoginForm';
import LogOut from '../LogOut/LogOut';
import Home from '../Common/Home';

const AppRoutes = (
    {
        setCurrentUser,
        setIsAuthenticated
    }) => {
    return (
      <Router>
        <Switch>
          <Route exact path="/registro">
            <Registro />
          </Route>
          <Route exact path="/login">
            <LoginForm
              setCurrentUser={setCurrentUser}
              setIsAuthenticated={setIsAuthenticated}
            />
          </Route>
          <Route exact path="/success">
            <Success />
          </Route>
          <Route exact path="/logout">
            <LogOut
              setCurrentUser={setCurrentUser}
              setIsAuthenticated={setIsAuthenticated}
            />
          </Route>
          <Route
            path="/"
            render={(props) => (
              <Home
                {...props}
              />
            )}
          />
        </Switch>
      </Router>
    );
}

export default AppRoutes;