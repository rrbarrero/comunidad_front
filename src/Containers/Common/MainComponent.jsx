import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArticleDetail from '../Blog/ArticleDetail/ArticleDetail';
import MainContent from '../Blog/MainContent/MainContent';
import ShowTopics from '../Foro/ShowTopics/ShowTopics';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Siderbar';
import Footer from '../Footer/Footer';

const MainComponent = ({ isAuthenticated, currentUser }) => {
    return (
        <div className="flex md:w-10/12 m-auto flex-wrap overflow-hidden bg-blue-congreso100">
            <Header />
            <Navbar
                isAuthenticated={isAuthenticated}
                currentUser={currentUser}
            />
            <Route exac path="/foro"
                render={(props) => (
                    <ShowTopics {...props}
                        currentUser={currentUser}
                        isAuthenticated={isAuthenticated}
                    />
                )}
            />
            <Route exac path="/articulos/:articuloId"
                render={(props) => (
                    <ArticleDetail {...props}
                        currentUser={currentUser}
                        isAuthenticated={isAuthenticated}
                    />
                )}
            />
            <Route exact path="/" render={()=><MainContent />} />
            <Sidebar />
            <Footer />
        </div>

    );
}

export default MainComponent;