import { useEffect } from 'react';

const LogOut = ({ setCurrentUser, isAuthenticated, setIsAuthenticated }) => {

    useEffect(() => {
        if (isAuthenticated) {
            localStorage.removeItem('logedIn');
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