import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import MainContent from './MainContent/MainContent';

const Blog = ({isAuthenticated}) => {
    return (
         <div className="flex md:w-10/12 m-auto flex-wrap overflow-hidden">
            <div className="w-full overflow-hidden">
             <Header />
            </div>

            <div className="w-full overflow-hidden">          
                <Navbar isAuthenticated={isAuthenticated} />
            </div>

            <div className="w-full overflow-hidden sm:w-3/4">
                <MainContent />
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