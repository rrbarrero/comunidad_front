import { useState, useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { Spin as Hamburger } from 'hamburger-react'

const NavbarMobile = () => {

    const { isAuthenticated, currentUser } = useContext(UserContext);
    const [displayClass, setDisplayClass] = useState("none");
    const [menuIsOpen, menuSetOpen] = useState(false);

    const expandOptions = () => {
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
                    <Link to={{ pathname: "/" }} className="py-1 mt-2 px-0 font-Midnight text-xl text-red-congreso200 block text-md">Inicio </Link>
                    <Link to={{ pathname: "/foro" }} className="py-1 mt-2 px-0 font-Midnight text-2xl text-red-congreso200 block text-md">Foro </Link>
                    <Hamburger toggled={menuIsOpen} toggle={menuSetOpen} size={36} color="#df674f" rounded />
                </div>

                {menuIsOpen && <ul id="mobileMenu">
                    {!isAuthenticated && <li className="pr-5 my-3"><Link to={{ pathname: "/login" }} className="text-red-congreso200 pl-4 text-2xl font-Midnight">Iniciar sesión </Link></li>}
                    {!isAuthenticated && <li className="pr-5 my-3"><Link to={{ pathname: "/registro" }} className="text-red-congreso200 pl-4 text-2xl font-Midnight">Registro </Link></li>}
                    {isAuthenticated && <li className="pr-5 my-3"><Link to={{ pathname: `/perfil/${currentUser.userId}` }} className="text-red-congreso200 pl-4 text-xl font-Midnight">Mi perfil </Link></li>}
                    {isAuthenticated && <li className="pr-5 my-3"><Link to={{ pathname: "/logout" }} className="text-red-congreso200 pl-4 font-Midnight">Cerrar sesión </Link></li>}
                </ul>}
            </nav>
        </div>
    );
}

export default NavbarMobile;
