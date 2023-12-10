import { ModeCommentOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Post = ({ data }) => {

  
  const cardGeneral = {
    // background: "#f4f4f9",
     paddingLeft: "0px",
 
   }
 
   const ladoDerecho = {
    // backgroundColor: "#f4f4f9",
     padding: '20px',
     boxShadow: '0 0 rgba(0, 0, 0)',
 
   }
 
 
   const quePiensas = {
     backgroundColor: "#fff",
     padding: '20px',
     borderRadius:"15px",
     boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
   }
   
   
   
   const buscadorContainer = {
     flex: 1,  
     display: "flex",
     justifyContent: "center", 
     width : "100%",
   }
 
 
   const iconoPerfil = {
     width:"45px",
     borderRadius: "50%",
   }
 
 
   const iconoCamara = {
     width:"100%",
     color: "green",
     fontSize: "25px",
   }

  // Verificar si data tiene contenido y es un array antes de llamar a map()
  if (!data || !Array.isArray(data) || data.length === 0) {
    return null; // O podrías devolver un mensaje indicando que no hay datos
  }

  return (
    <>
      {data.map((post, index) => (
        <Box key={index} sx={{ backgroundColor: "post.main" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ fontSize: 14 }} color="text.pramary">
              {post.contenido}
            </Typography>
            <img
              alt=""
              style={{
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <ThumbUpAltOutlined />
            </IconButton>
            <Typography
              component="span"
              color="text.pramary"
              sx={{ fontSize: 17 }}
            >
              2.1k
            </Typography>
            <IconButton>
              <ModeCommentOutlined />
            </IconButton>
            <Typography
              component="span"
              color="text.pramary"
              sx={{ fontSize: 17 }}
            >
              6 comments
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};

Post.propTypes = {
  data: PropTypes.array,
};

export default Post;
