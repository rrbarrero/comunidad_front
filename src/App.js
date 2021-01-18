//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import AppRoutes from './Containers/AppRoutes/AppRoutes';
import React from 'react'
import IsLogedIn from './Services/User/IsLogedIn';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import CookieConsent from "react-cookie-consent";

export const UserContext = React.createContext({
  isAuthenticated: null,
  currentUser: null,
})

function App() {

  ReactGA.initialize(`${process.env.REACT_APP_GA}`);
  ReactGA.pageview(window.location.pathname + window.location.search);


  const [isAuthenticated, setIsAuthenticated] = useState(IsLogedIn());
  const [currentUser, setCurrentUser] = useState(JSON.parse(window.sessionStorage.getItem('currentUser')));

  
  //console.log("App", currentUser, isAuthenticated);

  return (
    <div className="App">
      <UserContext.Provider value={{isAuthenticated, currentUser}}>
        <AppRoutes
          setCurrentUser={setCurrentUser}
          setIsAuthenticated={setIsAuthenticated} />
      </UserContext.Provider>
      {process.env.REACT_APP_ENV !== 'development' && <CookieConsent
        location="bottom"
        buttonText="Entendido"
        cookieName="comunidadLSACookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        Este sitio utiliza cookies para mejorar la experiencia de usuario, si	continua	navegando, consideramos	que	acepta	su	uso.{" "}
        <span style={{ fontSize: "10px" }}>Puede ver más detalle en la política de cookies.</span>
      </CookieConsent>}
    </div>
  );
}

App.propTypes = {
  isAuthenticated: PropTypes.bool,
  currentUser: PropTypes.object,
}


export default App;
