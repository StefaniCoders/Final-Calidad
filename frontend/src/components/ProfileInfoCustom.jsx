import React, { useEffect,useState,useHistory } from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Favorite as FavoriteIcon } from "@mui/icons-material";
import WcIcon from "@mui/icons-material/Wc";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import CakeIcon from "@mui/icons-material/Cake";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { getDataUser } from "../services/user";

const ProfileInfoCustom = ({ foto_perfil }) => {
  const [dataUser, setDataUser] = useState({});
  const [imgUser, setImgUser] = useState({});
  const valor = localStorage.getItem('clave');
 // const [dataUser, setDataUser] = useState({});
 const [isEditing, setIsEditing] = useState(false);
 const [editedText, setEditedText] = useState(); // Opción de texto original

 
 useEffect(() => {
  const token = localStorage.getItem("token");

  (async () => setDataUser(await getDataUser(token)))();
  (async () => {
    const imageUrl = arrayBufferToBase64(await getImgPerfil(token));
    setImgUser(imageUrl);
  })();
}, []);

  const useNameAndPhoto = [
    {
      text: String(dataUser.nombre).concat( " " , dataUser.apellidos),
      icon: <Avatar src={String('http://localhost:5173/public/imagenes/6073873.png')} alt="Foto de perfil" />,
    },
  ];
  const menuOptions = [
    { text: String(dataUser.sexo), icon: <WcIcon /> },
    { text: String(dataUser.fecha_registro), icon: <EditCalendarIcon /> },
    { text: String(dataUser.fecha_nacimiento), icon: <CakeIcon /> },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column", // Cambiado a "column" para mostrar elementos en columna
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "post.main",
        borderRadius: "12px",
        p: 3,
        width: "100%",
      }}
    >
      
   
      {/* Sección de la foto de perfil */}
      {useNameAndPhoto.map((option) => (
        <Avatar
          key={option.text}
          src={option.icon.props.src}
          alt={option.text}
          sx={{
            width: 300,
            height: 300,
          }}
        />
      ))}

 

      {/* Sección de las opciones del menú mostradas en 3 columnas y 2 filas */}
      <List
        sx={{
          display: "flex",
          flexDirection: "row", // Cambiado a "row" para mostrar elementos en línea
          gap: 2, // Espaciado entre elementos
          flexWrap: "wrap", // Permite que los elementos se envuelvan en varias líneas
          justifyContent: "center", // Centra los elementos horizontalmente
        }}
      >
        {[...useNameAndPhoto, ...menuOptions].map((option) => (
          <ListItem key={option.text}>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.drawer.hover,
                },
              }}
            >

             
              <ListItemIcon>{option.icon}</ListItemIcon>
             

              <ListItemText primary={option.text} />
            </ListItemButton>
          </ListItem>
        ))}
      
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Button color="secondary" variant="contained">
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        EDITAR PERFIL
      </Button>
    </Box>
  );
};

ProfileInfoCustom.propTypes = {
  foto_perfil: PropTypes.string,
};

export default ProfileInfoCustom;
