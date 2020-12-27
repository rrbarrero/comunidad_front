import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blog from '../Blog/Blog';
import Foro from '../Foro/Foro';
import Registro from '../Registro/Registro';
import LoginForm from '../LoginForm/LoginForm';
import LogOut from '../LogOut/LogOut';

const AppRoutes = ({currentUser, setCurrentUser, isAuthenticated, setIsAuthenticated}) => {
    return (
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
                <Route path="/articulos/:articuloId">
                    <Blog
                        isAuthenticated={isAuthenticated}
                        currentUser={currentUser}
                    />
                </Route>
                <Route path="/">
                    <Blog
                    isAuthenticated={isAuthenticated}
                    currentUser={currentUser}
                    />
                </Route>
            </Switch>
      </Router>
    );
}

export default AppRoutes;