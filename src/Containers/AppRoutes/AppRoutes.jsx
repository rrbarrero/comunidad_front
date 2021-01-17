import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Registro from '../Registro/Registro';
import Success from '../Registro/Success';
import LoginForm from '../LoginForm/LoginForm';
import LogOut from '../LogOut/LogOut';
import Home from '../Common/Home';
import RecoverPass from '../RecoverPass/RecoverPass';
import PropTypes from 'prop-types' 
import RecoverSuccess from '../RecoverPass/RecoverSuccess';
import RecoverPasswordReset from '../RecoverPass/RecoverPasswordReset';

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
          <Route exact path="/recuperar_clave">
            <RecoverPass />
          </Route>
          <Route exact path="/pass_recover/:uuid">
            <RecoverPasswordReset />
          </Route>
          <Route exact path="/login">
            <LoginForm
              setCurrentUser={setCurrentUser}
              setIsAuthenticated={setIsAuthenticated}
            />
          </Route>
          <Route exact path="/recover_success">
            <RecoverSuccess />
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

AppRoutes.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  setIsAuthenticated: PropTypes.func.isRequired,
}

export default AppRoutes;