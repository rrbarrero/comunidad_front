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

const AppRoutes = ({currentUser, setCurrentUser, isAuthenticated, setIsAuthenticated}) => {
    return (
        <div className="flex md:w-10/12 m-auto flex-wrap overflow-hidden bg-blue-congreso100">
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
                        <Header />
                        <Navbar
                            isAuthenticated={isAuthenticated}
                            currentUser={currentUser}
                        />
                        <ShowTopics />
                        <Sidebar />
                        <Footer />
                    </Route>
                    <Route path="/articulos/:articuloId">
                        <Header />
                        <Navbar
                            isAuthenticated={isAuthenticated}
                            currentUser={currentUser}
                        />
                        <ArticleDetail
                            currentUser={currentUser}
                            isAuthenticated={isAuthenticated}
                        />
                        <Sidebar />
                        <Footer />
                    </Route>
                    <Route path="/">
                        <Header />
                        <Navbar
                            isAuthenticated={isAuthenticated}
                            currentUser={currentUser}
                        />
                        <MainContent />
                        <Sidebar />
                        <Footer />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default AppRoutes;