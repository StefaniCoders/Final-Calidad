import { ModeCommentOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import PropTypes from "prop-types";

const ProfileInfo = ({ data }) => {
  // Verificar si data tiene contenido y es un array antes de llamar a map()
  if (!data || !Array.isArray(data) || data.length === 0) {
    return null; // O podrías devolver un mensaje indicando que no hay datos
  }

  return (
    <>
      {data.map((ProfileInfo, index) => (
        <Box key={index} sx={{ backgroundColor: "ProfileInfo.main" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ fontSize: 29 }} color="text.pramary">
              {ProfileInfo.contenido}
            </Typography>
            <img
              src={ProfileInfo.multimedia[0].url}
              alt=""
              style={{
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      ))}
    </>
  );
};

ProfileInfo.propTypes = {
  data: PropTypes.array,
};

export default ProfileInfo;
