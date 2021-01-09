import { useState } from 'react';
import { Redirect, withRouter } from "react-router-dom";
import { useHistory } from "react-router";
import LogoHeader from '../../Assets/logo_header.jpeg';
import { Link } from 'react-router-dom';
import Register from '../../Services/User/Register';
import PropTypes from 'prop-types' 

const Registro = ({isAuthenticated}) => {

    const [error, setError] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [email2, setEmail2] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const history = useHistory();

    const validateForm = () => {
        let errors = [];
        if (email !== email2) {
            errors.push('Los correos no coinciden.');
        }
        if (password !== password2) {
            errors.push('Las contraseñas no coinciden.');
        }
        if (password.length < 8) {
            errors.push('Las contraseñas deben tener entre 8 y 16 caracteres.');
        }
        if (password.length > 16) {
            errors.push('Las contraseñas deben tener entre 8 y 16 caracteres.');
        }
        return errors;
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setError(validateForm())
        if (error.length === 0) {
            Register({
                username,
                email,
                password
            }).then(resp => {
                if(resp.status!==201){
                    let errors = [];
                    Object.values(resp.data).forEach(x => errors.push(x));
                    setError(errors);
                }else{
                    history.push("/success");
                }
            });
        }
    }

    if (isAuthenticated) {
        //TODO: CORREGIR
        return <Redirect to='/' />
    }

    const ErrorComponent = ({ item }) => {
        return <li>{item}</li>
    }

    return (
        <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
            <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
                <div className="p-4 py-6 text-white bg-yellow-congreso98 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                    <div className="hidden lg:flex lg:items-center lg:w-auto p-2 my-auto">
                        <Link to={{ pathname: "/" }}>
                            <img className="rounded-full h-28 w-28 mx-auto border-8 border-red-congreso100"
                                src={LogoHeader} alt="header-logo" />
                        </Link>
                    </div>
                    <div className="my-3 text-2xl lg:text-4xl font-bold tracking-wider text-center text-red-congreso200 font-Midnight">
                        <a href="/">Comunidad la Sociedad del Aprendizaje</a>
                    </div>
                    <p className="hidden lg:flex lg:items-center lg:w-auto mt-6 font-normal text-center text-blue-congreso200 md:mt-0">
                        La rapidez con la que se producen los cambios hoy en día abre un abanico de oportunidades donde el conocimiento y la actitud son claves para poder modificar y transformar nuestra realidad, desde la propia sociedad, desde uno mismo.
                    </p>
                    <p className="hidden lg:flex lg:items-center lg:w-auto flex flex-col items-center justify-center mt-10 text-center">
                        <span>¿Aún no te has unido al cambio?</span>
                        <a href="/registro" className="underline">¡Únete!</a>
                    </p>
                    <p className="mt-6 text-sm text-center text-gray-500">
                        Lee nuestros <a href="/terminos" className="underline">términos</a> y <a href="/condiciones" className="underline">condiciones</a>
                    </p>
                </div>
                <div className="p-5 bg-white md:flex-1">
                    <h3 className="text-red-600">
                        <ul>
                            {error.map((item, i) => (
                                <ErrorComponent key={i} item={item} />
                            ))}
                        </ul>
                    </h3>
                    <h3 className="my-4 text-4xl font-semibold text-gray-congreso100 lg:pb-12 font-Midnight">Regístrate</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="username" className="text-sm font-semibold text-gray-500">Nombre de usuario</label>
                        <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoFocus
                        className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                        />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-500">Dirección de correo electrónico</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoFocus
                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                        />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <label htmlFor="email2" className="text-sm font-semibold text-gray-500">Confirmar dirección de correo</label>
                        <input
                            type="email"
                            id="email2"
                            value={email2}
                            onChange={(e) => setEmail2(e.target.value)}
                            autoFocus
                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                        />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="text-sm font-semibold text-gray-500">Contraseña</label>
                        </div>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            autoComplete="new-password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                        />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password2" className="text-sm font-semibold text-gray-500">Confirmar contraseña</label>
                        </div>
                        <input
                            type="password"
                            id="password2"
                            value={password2}
                            autoComplete="new-password"
                            onChange={(e) => setPassword2(e.target.value)}
                            className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                        />
                    </div>
                    <div>
                        <button
                            id="button-register"
                            type="submit"
                            className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-congreso200 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                            Registrarme
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

Registro.propTypes = {
    error: PropTypes.arrayOf(PropTypes.string),
    username: PropTypes.string,
    setUsername: PropTypes.func,
    email: PropTypes.string,
    setEmail: PropTypes.func,
    email2: PropTypes.string,
    setEmail2: PropTypes.func,
    password: PropTypes.string,
    setPassword: PropTypes.func,
    password2: PropTypes.string,
    setPassword2: PropTypes.string,
}

export default  withRouter(Registro);