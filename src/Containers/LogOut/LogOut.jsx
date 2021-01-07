import { useEffect, useContext } from 'react';
import { UserContext } from '../../App';

const LogOut = ({ setCurrentUser, setIsAuthenticated }) => {

    const {isAuthenticated, currentUser} = useContext(UserContext);

    useEffect(() => {
        if (isAuthenticated) {
            window.sessionStorage.clear();
            setIsAuthenticated(false);
            setCurrentUser({});
        }
    });
    return (
        <div>
            <h3>Ha cerrado la sesión</h3>
            <a href="/">Volver</a>
        </div>

    );
}

export default LogOut;