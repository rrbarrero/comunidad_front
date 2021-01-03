//import { useEffect, useState } from 'react';
//import FetchAvatar from '../../Services/User/FetchAvatar';
import { Link } from 'react-router-dom';
import Avatar from '../Common/Avatar';

const Navbar = ({ isAuthenticated, currentUser }) => {


    return (
        <div className="w-full overflow-hidden">          
            <div className="hidden border-b-2 border-red-congreso100 lg:flex lg:items-center lg:w-auto w-full bg-blue-congreso100" id="menu">
                <div className="flex lg:w-10/12">
                <nav>
                    <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                            <li><Link to={{ pathname: "/" }} className="lg:p-4 py-3 px-0 font-Midnight text-red-congreso100 block border-t-2 border-transparent hover:border-blue-congreso200 text-xl">Inicio </Link></li>
                            <li><Link to={{ pathname: "/foro" }} className="lg:p-4 py-3 px-0 font-Midnight text-red-congreso100 block border-t-2 border-transparent hover:border-blue-congreso200 text-xl">Foro </Link></li>
                            <li><a className="lg:p-4 py-3 px-0 font-Midnight text-red-congreso100 block border-t-2 border-transparent hover:border-blue-congreso200" href="/registro">Registro</a></li>
                    {isAuthenticated === false &&
                        <li><Link to={{ pathname: "/login" }} className="font-Midnight lg:p-4 py-3 px-0 text-red-congreso100 block border-t-2 border-transparent hover:border-blue-congreso200 lg:mb-0 mb-2">Login</Link></li>
                    }
                    {isAuthenticated === true &&
                        <li><a className="font-Midnight lg:p-4 py-3 px-0 text-gray-400 block border-t-2 text-red-congreso100 border-transparent hover:border-blue-congreso200 lg:mb-0 mb-2" href="/logout">Salir</a></li>
                    }
                    </ul>
                </nav>
                </div>
                <div className="flex lg:w-2/12">
                    {isAuthenticated === true &&
                        // <a href="/" className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
                        //     <img className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src={currentUserAvatar} alt="Current User Avatar" />
                        // </a>
                        <Avatar userId={currentUser.userId}><span className="pt-2 pl-1 font-bold text-red-congreso100 hover:text-red-congreso200 text-xl">Mi Perfil</span></Avatar>
                    }
                </div>
            </div>
        </div>

    );
}

export default Navbar;