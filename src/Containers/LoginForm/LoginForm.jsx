import { useState, useContext } from 'react';
import Login from '../../Services/User/Login';
import { Redirect } from "react-router-dom";
import LogoHeader from '../../Assets/logo_header.jpeg';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const LoginForm = ({ setCurrentUser, setIsAuthenticated }) => {

  const [error, setError] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

   const {isAuthenticated, currentUser} = useContext(UserContext);

  if (isAuthenticated) {
    return <Redirect to='/' />  
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!isAuthenticated) {
      Login(username, password).then(resp => {
        if (resp.status!==200) {
          let errors = [];
          for (var [_v, value] of Object.entries(resp.data)){
            errors.push(value);
          };
          setError(errors);
        } else {
          const currentUser = {
            userId: resp.data.user_id,
            token: resp.data.token,
          }
          setCurrentUser(currentUser);
          setIsAuthenticated(true);
          window.sessionStorage.setItem("logedIn", "true");
          window.sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
        }
      });
        
    }
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
              <h3 className="text-red-600">{error}</h3>
              <h3 className="my-4 text-3xl font-semibold text-gray-congreso100 lg:pb-12 font-Midnight">Inicia Sesión</h3>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-1">
                  <label htmlFor="username" className="text-sm font-semibold text-gray-500">Nombre de usuario</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    autoComplete="username"
                    onChange={(e) => setUsername(e.target.value)}
                    autoFocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-semibold text-gray-500">Contraseña</label>
                    <a href="/recover_password" className="text-sm text-blue-congreso200 hover:underline focus:text-blue-800">¿Olvidaste la contraseña?</a>
                  </div>
                  <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                  />
                  <label htmlFor="remember" className="text-sm font-semibold text-gray-500">Guardar sesión</label>
                </div>
                <div>
                <button
                    id="button-login"
                    type="submit"
                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-congreso200 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4">
                    Acceder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    );
}

export default LoginForm;