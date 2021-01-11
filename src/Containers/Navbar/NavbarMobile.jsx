import { useState, useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const NavbarMobile = () => {

    const {isAuthenticated, currentUser} = useContext(UserContext);
    const [displayClass, setDisplayClass] = useState("none");

    const expandOptions = () =>  {
        if (displayClass === "block") {
            setDisplayClass("none");
        } else {
            setDisplayClass("block");
        }
    }

    return (
       <div className="lg:hidden container mx-auto bg-gray-200 p-3">
        <nav className="flex-row lg:justify-between">
            <div className="flex flex-row justify-between">

                <Link to={{ pathname: "/" }} className="py-1 px-0 font-Midnight text-xl text-red-congreso200 block text-md">Inicio </Link>

            <button id="hamburgerbtn" className="lg:hidden bg-gray-200 text-red-congreso200" onClick={expandOptions}>
                <FaBars />
            </button>
            </div>
        
            <ul className="lg:hidden" id="mobileMenu" style={{display: displayClass}}>
                <li className="pr-5"><Link to={{ pathname: "/foro" }} className="text-red-congreso200 pl-4 font-Midnight">Foro </Link></li>
                {!isAuthenticated && <li className="pr-5"><Link to={{ pathname: "/login" }} className="text-red-congreso200 pl-4 font-Midnight">Iniciar sesión </Link></li>}
                {!isAuthenticated && <li className="pr-5"><Link to={{ pathname: "/registro" }} className="text-red-congreso200 pl-4 font-Midnight">Registro </Link></li>}
                {isAuthenticated && <li className="pr-5"><Link to={{ pathname: "/" }} className="text-red-congreso200 pl-4 font-Midnight">Mi perfil </Link></li>}
                {isAuthenticated && <li className="pr-5"><Link to={{ pathname: "/logout" }} className="text-red-congreso200 pl-4 font-Midnight">Cerrar sesión </Link></li>}
            </ul>
        </nav>
    </div>
    );
}

export default NavbarMobile;
