import React, { useState, useEffect } from 'react';
import { gapi } from "gapi-script";
import GoogleLogin from 'react-google-login';

const Login = () => {
  const clientID = "260171205947-pl5f0kg7jr0neb43tu2e6evnm5v33o0e.apps.googleusercontent.com";
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false); // Cambié el nombre de la variable a loggedIn

  const onSuccess = (response) => {
    setUser(response.profileObj);
    setLoggedIn(true); // Cambié la variable a true después del inicio de sesión exitoso
    // Ocultar el botón después del inicio de sesión exitoso - Esto no es recomendable
    // document.getElementsByClassName("btn").hidden = true;
  }

  const onFailure = (response) => {
    console.log("Something went wrong");
  }

  const handleLogout = () => {
    setUser({});
    setLoggedIn(false); // Cambié la variable a false después de cerrar sesión
  }

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
      });
    }

    gapi.load("client:auth2", start);
  }, [clientID]); // Agregué clientID como dependencia para que el useEffect se ejecute cuando cambie

  return (
    <div className="center">
      <h1>Login con Google</h1>
      <div className='btn'>
        <GoogleLogin
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          buttonText="Continuar con Google"
          cookiePolicy={"single_host_origin"}
        />
      </div>
      <div className={user ? "profile" : "hidden"}>
        <img src={user.imageUrl} alt="User" />
        <h3>{user.name}</h3>
      </div>
    </div>
  );
}

export default Login;
