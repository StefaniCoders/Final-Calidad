// LoginWithGoogle.js
import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const LoginWithGoogle = () => {
  const handleSuccess = (user) => {
    console.log('Inicio de sesión exitoso:', user);
    let decoded = jwtDecode(user?.credential);
    console.log(decoded)

    window.location.href = 'http://localhost:3000/';

  };

  const handleFailure = (error) => {
    console.error('Error en el inicio de sesión:', error);
  };

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
     <GoogleOAuthProvider clientId="576036305257-n6rpfq45qeaeqshno3mjt9dv1djl6vfl.apps.googleusercontent.com">
        <GoogleLogin
            onSuccess={handleSuccess}
            onFailure={handleFailure}
            buttonText="Login"
        />   
     </GoogleOAuthProvider>;
    </div>
  );
};

export default LoginWithGoogle;
