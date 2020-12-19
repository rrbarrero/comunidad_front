import logo from './logo.svg';
import './App.css';
import Navbar from './Containers/Navbar/Navbar';
import MainContent from './Containers/Blog/MainContent/MainContent';

function App() {
  return (
    <div className="App">

      
        <div className="flex md:w-10/12 m-auto flex-wrap overflow-hidden">
          <div className="w-full overflow-hidden bg-red-300">
          Header
          </div>

          <div className="w-full overflow-hidden">          
            <Navbar></Navbar>
          </div>

          <div className="w-full overflow-hidden bg-green-100 sm:w-3/4">
            <MainContent></MainContent>
          </div>

          <div className="w-full overflow-hidden bg-yellow-200 sm:w-1/4">
            Sidebar
          </div>

          <div className="w-full overflow-hidden bg-blue-300">
              Footer
          </div>
        </div>
      

    </div>
  );
}

export default App;
