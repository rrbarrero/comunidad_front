import Navbar from '../Navbar/Navbar';

const Foro = () => {
    return (
         <div className="flex md:w-10/12 m-auto flex-wrap overflow-hidden">
            <div className="w-full overflow-hidden bg-red-300">
            Header
            </div>

            <div className="w-full overflow-hidden">          
                <Navbar></Navbar>
            </div>

            <div className="w-full overflow-hidden bg-green-100 sm:w-3/4">
                <p>Foro content</p>
            </div>

            <div className="w-full overflow-hidden bg-yellow-200 sm:w-1/4">
                Sidebar
            </div>

            <div className="w-full overflow-hidden bg-blue-300">
                Footer
            </div>
        </div>
    );
}

export default Foro;