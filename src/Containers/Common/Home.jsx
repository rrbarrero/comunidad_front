import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArticleDetail from '../Blog/ArticleDetail/ArticleDetail';
import PostDetail from '../Foro/PostDetail/PostDetail';
import PostList from '../Foro/PostList/PostList';
import Blog from '../Blog/Blog';
import Foro from '../Foro/Foro';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Siderbar';
import Footer from '../Footer/Footer';

const Home = ({ isAuthenticated, currentUser }) => {
    return (
        <div className="flex md:w-10/12 m-auto flex-wrap overflow-hidden bg-blue-congreso100">
            <Header />
            <Navbar
                isAuthenticated={isAuthenticated}
                currentUser={currentUser}
            />
            <Route exac path="/foro"
                render={(props) => (
                    <Foro {...props}
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
            <Route exac path="/hilos/:postId"
                render={(props) => (
                    <PostDetail {...props}
                        currentUser={currentUser}
                        isAuthenticated={isAuthenticated}
                    />
                )}
            />
            <Route exac path="/temas/:temaId" render={() => <PostList />} />
            
            <Route exact path="/" render={() => <Blog />} />
            
            <Sidebar />
            <Footer />
        </div>

    );
}

export default Home;