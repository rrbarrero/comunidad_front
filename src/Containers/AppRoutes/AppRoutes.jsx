import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Siderbar';
import Footer from '../Footer/Footer';
import Registro from '../Registro/Registro';
import LoginForm from '../LoginForm/LoginForm';
import LogOut from '../LogOut/LogOut';
import ArticleDetail from '../Blog/ArticleDetail/ArticleDetail';
import MainContent from '../Blog/MainContent/MainContent';
import ShowTopics from '../Foro/ShowTopics/ShowTopics';
import MainComponent from '../Common/MainComponent';

const AppRoutes = (
    {
        currentUser,
        setCurrentUser,
        isAuthenticated,
        setIsAuthenticated
    }) => {
    console.log("Approute", currentUser, isAuthenticated)
    return (
        
            <Router>
                <Switch>
                    <Route exact path="/registro">
                        <Registro />
                    </Route>
                    <Route exact path="/login">
                        <LoginForm
                        setCurrentUser={setCurrentUser}
                        isAuthenticated={isAuthenticated}
                            setIsAuthenticated={setIsAuthenticated} />
                    </Route>
                    <Route exact path="/logout">
                        <LogOut
                        setCurrentUser={setCurrentUser}
                        isAuthenticated={isAuthenticated}
                            setIsAuthenticated={setIsAuthenticated} />
                    </Route>
                    <Route path="/"
                        render={(props) => (
                            <MainComponent {...props}
                                isAuthenticated={isAuthenticated}
                                currentUser={currentUser}
                            />
                        )}
                    />
                </Switch>
            </Router>
    );
}

export default AppRoutes;