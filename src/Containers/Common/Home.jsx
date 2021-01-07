import { Route } from 'react-router-dom';
import ArticleDetail from '../Blog/ArticleDetail/ArticleDetail';
import PostDetail from '../Foro/PostDetail/PostDetail';
import PostList from '../Foro/PostList/PostList';
import Blog from '../Blog/Blog';
import Foro from '../Foro/Foro';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Siderbar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../Common/ScrollToTop';

const Home = () => {
    return (
        <div className="flex md:w-10/12 m-auto flex-wrap overflow-hidden bg-blue-congreso100">
            <Header />
            <Navbar />
            <Route exac path="/foro"
                render={(props) => (
                    <Foro {...props} />
                )}
            />
            <ScrollToTop >
                <Route exac path="/articulos/:articuloId"
                    render={(props) => (
                        <ArticleDetail {...props} />
                    )}
                />
            </ScrollToTop>
            <Route exac path="/hilos/:postId"
                render={(props) => (
                    <PostDetail {...props} />
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