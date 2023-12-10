import React from 'react';
import { Link } from "react-router-dom";

const Header = () => { 
  const logo = {
    width : "200px",
    margin: "10px",
    cursor: "pointer",     
  }
  const endPart = {
    margin: "10px"
  }
  const fondo = {
    background : " #00307a ",
    width:"100%",
    height:"8vh",  
    alignItems: "center", 
  }
  const iconosContainer = {
    display: "flex",
    alignItems: "center",
    color: "#fff"
  }

  const buscadorContainer = {
    flex: 1,  
    display: "flex",
    justifyContent: "center", 
    width : "100%",
  }

  const cerrarSesionContainer = {
    display: "flex",
    alignItems: "center",
  };

  const cerrarSesionTexto = {
    marginLeft: "1px",  
  };
 

  return (
    <div >
      <div className='row' style={fondo}> 
        <div className='col-4' >
          <Link to="/">
            <img href="#" style={logo} src={process.env.PUBLIC_URL + '/imagenes/large.png'} alt="logo only students navbar" />   
          </Link>
            
        </div>

        <div className='col-6'  style={buscadorContainer}>
          <input  className='form-control' style={{width : '100%'}} type="text" placeholder="Buscar..." />      
        </div>
        
        <div className='col-4 justify-content-end pe-5' style={iconosContainer}>
          <FontAwesomeIcon icon={faBell} style={endPart} />  
          <div style={cerrarSesionContainer}>
            <FontAwesomeIcon icon={faSignOutAlt} style={endPart} />
            <Link to="/login" style={{textDecoration: 'none', color: 'white'}}><span style={cerrarSesionTexto}>Cerrar Sesión</span></Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;
