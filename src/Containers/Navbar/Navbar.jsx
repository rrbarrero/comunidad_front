//import { useEffect, useState } from 'react';
//import FetchAvatar from '../../Services/User/FetchAvatar';
import { Link } from 'react-router-dom';
import Avatar from '../Common/Avatar';

const Navbar = ({ isAuthenticated, currentUser }) => {
    
    // const [currentUserAvatar, setCurrentUserAvatar] = useState('');

    // useEffect(() => {
    //     if (isAuthenticated && currentUser && currentUser.userId) {
    //         FetchAvatar(currentUser.userId).then(resp => {
    //             setCurrentUserAvatar(`${process.env.REACT_APP_BACKEND_STATIC_URL}${resp.avatar}`);
    //         });
    //     }
    // }, [currentUser, isAuthenticated]);

    return (
        <div className="hidden lg:flex lg:items-center lg:w-auto w-full bg-blue-congreso100" id="menu">
            <div className="flex lg:w-11/12">
            <nav>
                <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
                <li><Link to={{ pathname: "/" }} className="lg:p-4 py-3 px-0 text-red-congreso200 block border-b-2 border-transparent hover:border-indigo-400">Inicio </Link></li>
                <li><a className="lg:p-4 py-3 px-0 block border-b-2 text-red-congreso200 border-transparent hover:border-indigo-400" href="/foro">Foros</a></li>
                        <li><a className="lg:p-4 py-3 px-0 text-red-congreso200 block border-b-2 border-transparent hover:border-indigo-400" href="/registro">Registro</a></li>
                {isAuthenticated === false &&
                    <li><Link to={{ pathname: "/login" }} className="lg:p-4 py-3 px-0 text-red-congreso200 block border-b-2 border-transparent hover:border-indigo-400 lg:mb-0 mb-2">Login</Link></li>
                }
                {isAuthenticated === true &&
                    <li><a className="lg:p-4 py-3 px-0 text-gray-400 block border-b-2 text-red-congreso200 border-transparent hover:border-indigo-400 lg:mb-0 mb-2" href="/logout">Salir</a></li>
                }
                </ul>
            </nav>
            </div>
            <div className="flex lg:w-1/12">
                {isAuthenticated === true &&
                    // <a href="/" className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
                    //     <img className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src={currentUserAvatar} alt="Current User Avatar" />
                    // </a>
                    <Avatar userId={currentUser.userId} />
                }
            </div>
        </div>

    );
}

export default Navbar;