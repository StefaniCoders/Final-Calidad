// LoginWithGoogle.js
import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const LoginGoogle = () => {
  const handleSuccess = (user) => {
    console.log('Inicio de sesión exitoso:', user);
    let decoded = jwtDecode(user?.credential);
    console.log(decoded)

    window.location.href = 'http://localhost:5173/';

  };

  const handleFailure = (error) => {
    console.error('Error en el inicio de sesión:', error);
  };

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

     <GoogleOAuthProvider clientId="260171205947-pl5f0kg7jr0neb43tu2e6evnm5v33o0e.apps.googleusercontent.com">
        <GoogleLogin
            onSuccess={handleSuccess}
            onFailure={handleFailure}
            buttonText="Login"
        />   
     </GoogleOAuthProvider>;
    </div>
  );
};

export default LoginGoogle;


/*
import { useState, useEffect } from 'react';
import { gapi } from "gapi-script";
import GoogleLogin from 'react-google-login';

function LoginGoogle () {
  const clientID = "260171205947-pl5f0kg7jr0neb43tu2e6evnm5v33o0e.apps.googleusercontent.com";
  const [user, setUser] = useState({});
  const [loggeIn, setLoggetInfo] = useState(false);   

  const onSuccess = (response) => {
    setUser(response.profileObj);
    document.getElementsByClassName("btn").hidden = true;
  }
  const onFailure = (response) => {
    console.log("Algo salió mal");
  }
  const handleLogout  = () => {
    setUser({}); 
  }
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <div className="center">
      <h1>Login</h1>
    
      <div className='btn'>

        <GoogleLogin
         
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          buttonText="Continue  with Google"
          cookiePolicy={"single_host_origin"}
        />

      </div>

      <div class={user ? "profile" : "hidden"}>
        <img src={user.imageUrl} />
        <h3>{user.name}</h3>
  
      </div>



    </div>
  );
}

export default LoginGoogle;
*/