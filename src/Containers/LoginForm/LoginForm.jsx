import { useState } from 'react';
import Login from '../../Services/User/Login';
import { Redirect } from "react-router-dom";

const LoginForm = ({setCurrentUser, isAuthenticated, setIsAuthenticated}) => {

  const [error, setError] = useState([]);
  let username, password;

  if (isAuthenticated) {
    return <Redirect to='/' />  
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if(!isAuthenticated) {
      Login(username, password).then(resp => {
        if (resp !== null && 'non_field_errors' in resp) {
          let errors = [];
          resp.non_field_errors.forEach((item) => {
            errors.push(item.toString());
          });
          setError(errors);
        } else {
          setCurrentUser({
            userId: resp.user_id,
            token: resp.token,
          });
          setIsAuthenticated(true);
          localStorage.setItem('logedIn', 'true');
        }
      });
        
    }
  }

    return (
      <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
          <div
            className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
          >
            <div
              className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
            >
              <div className="my-3 text-4xl font-bold tracking-wider text-center">
                <a href="/">Comunidad la Sociedad del Aprendizaje</a>
              </div>
              <p className="mt-6 font-normal text-center text-gray-300 md:mt-0">
                La rapidez con la que se producen los cambios hoy en día abre un abanico de oportunidades donde el conocimiento y la actitud son claves para poder modificar y transformar nuestra realidad, desde la propia sociedad, desde uno mismo.
              </p>
              <p className="flex flex-col items-center justify-center mt-10 text-center">
                <span>¿Aún no te has unido al cambio?</span>
                <a href="/registro" className="underline">¡Únete!</a>
              </p>
              <p className="mt-6 text-sm text-center text-gray-300">
                Lee nuestros <a href="/terminos" className="underline">términos</a> y <a href="/condiciones" className="underline">condiciones</a>
              </p>
            </div>
          <div className="p-5 bg-white md:flex-1">
              <h3 className="text-red-600">{error}</h3>
              <h3 className="my-4 text-2xl font-semibold text-gray-700">Iniciar Sesión</h3>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                <div className="flex flex-col space-y-1">
                  <label htmlFor="username" className="text-sm font-semibold text-gray-500">Nombre de usuario</label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => username = e.target.value}
                    autoFocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-semibold text-gray-500">Contraseña</label>
                    <a href="/recover_password" className="text-sm text-blue-600 hover:underline focus:text-blue-800">¿Olviste la contraseña?</a>
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => password = e.target.value}
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
                    type="submit"
                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                  >
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