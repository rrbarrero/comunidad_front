import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import MainContent from './MainContent/MainContent';
import ArticleDetail from '../Blog/ArticleDetail/ArticleDetail';
import { useParams } from 'react-router';

const Blog = ({ isAuthenticated, currentUser }) => {
    
    const { articuloId } = useParams();

    return (
         <div className="flex md:w-10/12 m-auto flex-wrap overflow-hidden">
            <div className="w-full overflow-hidden">
             <Header />
            </div>

            <div className="w-full overflow-hidden">          
                <Navbar
                    isAuthenticated={isAuthenticated}
                    currentUser={currentUser}
                />
            </div>

            <div className="w-full overflow-hidden sm:w-3/4">
                {articuloId && <ArticleDetail articuloId={articuloId} />}
                {!articuloId && <MainContent />}
            </div>

            <div className="w-full overflow-hidden  sm:w-1/4">
                Sidebar
            </div>

            <div className="w-full overflow-hidden ">
                Footer
            </div>
        </div>
    );
}

export default Blog;