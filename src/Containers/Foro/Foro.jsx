import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Siderbar';
import Footer from '../Footer/Footer';
import ShowTopics from './ShowTopics/ShowTopics';

const Foro = ({ isAuthenticated, currentUser }) => {
    
    return (
         <div className="flex md:w-10/12 m-auto flex-wrap overflow-hidden bg-white">
            <div className="w-full overflow-hidden">
             <Header />
            </div>

            <div className="w-full overflow-hidden">          
                <Navbar
                    isAuthenticated={isAuthenticated}
                    currentUser={currentUser}
                />
            </div>

            <div className="w-full overflow-hidden sm:w-3/4 mb-5">
               <ShowTopics />
            </div>

            <div className="w-full overflow-hidden  sm:w-1/4">
                <Sidebar />
            </div>

            <div className="w-full overflow-hidden ">
                <Footer />
            </div>
        </div>
    );
}

export default Foro;