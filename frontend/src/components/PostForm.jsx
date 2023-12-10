import {
  AddPhotoAlternate,
  Cancel,
  GifBoxRounded,
  VideoLibrary,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputBase,
  alpha,
  styled,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import {
  createPostWithMultimedia,
  createPostWithOutMultimedia,
} from "../services/post";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    width: "100%",
  },
}));

const Input = styled("div")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  flexGrow: 1,
  marginLeft: theme.spacing(1),
  backgroundColor: "#434557",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
}));

const optionsButtons = [
  {
    icon: <AddPhotoAlternate />,
    label: "Agregar Foto",
    accept: "image/*",
  },
  {
    icon: <VideoLibrary />,
    label: "Añadir video",
    accept: "video/*",
  },
  { icon: <GifBoxRounded />, label: "GIF", accept: ".gif" },
];

const PostForm = ({ foto_perfil }) => {
  const [mediaUrl, setmediaUrl] = useState("");
  const [fileInput, setFileInput] = useState(null);
  const [dataPost, setDataPost] = useState({
    contenido: "",
    tipoMultimedia: "",
    multimedia: null,
    usuario: "656970991ca7ec425d3ad727",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDataPost({
      ...dataPost,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const type =
      fileInput.accept === "image/*"
        ? "imagen"
        : fileInput.accept === "video/*"
        ? "video"
        : "GIF";

    setDataPost((prevData) => ({
      ...prevData,
      multimedia: file,
      tipoMultimedia: type,
    }));

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setmediaUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleFileTypeChange = (accept) => {
    fileInput.accept = accept;
    fileInput.click();
  };

  const handleRemoveMedia = () => {
    setmediaUrl("");
    setDataPost((prevData) => ({
      ...prevData,
      multimedia: null,
      tipoMultimedia: "",
    }));
  };

  const handleCreatePost = () => {
    const formData = new FormData();

    if (dataPost.multimedia) {
      formData.append("multimedia", dataPost.multimedia);
      formData.append("tipoMultimedia", dataPost.tipoMultimedia);
    }

    if (dataPost.contenido) formData.append("contenido", dataPost.contenido);
    if (dataPost.usuario) formData.append("usuario", dataPost.usuario);

    if (dataPost.multimedia)
      (async () => await createPostWithMultimedia(formData))();
    else (async () => await createPostWithOutMultimedia(formData))();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "post.main",
        borderRadius: "12px",
        p: 3,
        minHeight: mediaUrl ? "auto" : "147px",
      }}
    >
      <Box sx={{ display: "flex", width: "100%" }}>
        <Avatar
          src={String(foto_perfil) ?? "https://i.imgur.com/2xW3Ymx.png"}
          sx={{
            width: 40,
            height: 40,
          }}
        />
        <Input>
          <StyledInputBase
            sx={{ width: "100%" }}
            placeholder="¿Qué estas pensando?"
            inputProps={{
              "aria-label": "¿Qué estas pensando?",
              name: "contenido",
              onChange: handleInputChange,
            }}
          />
        </Input>
      </Box>

      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={(input) => setFileInput(input)}
        onChange={handleFileChange}
      />
      <Box
        sx={{
          m: "30px 0",
          width: "100%",
          flexGrow: 1,
          position: "relative",
        }}
      >
        {mediaUrl && (
          <>
            {fileInput.accept === "image/*" || fileInput.accept == ".gif" ? (
              <img
                style={{ width: "100%", borderRadius: "15px" }}
                src={mediaUrl}
                alt="Preview"
              />
            ) : (
              <video
                src={mediaUrl}
                style={{ width: "100%", borderRadius: "15px" }}
                alt="Preview"
                autoPlay
                controls
              />
            )}
            <IconButton
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                cursor: "pointer",
                color: "white",
              }}
              onClick={handleRemoveMedia}
            >
              <Cancel fontSize="large" />
            </IconButton>
          </>
        )}
      </Box>
      <Box component="div" sx={{ display: "flex", width: "100%" }}>
        {optionsButtons.map((button, index) => (
          <IconButton
            key={index}
            onClick={() => handleFileTypeChange(button.accept)}
          >
            {button.icon}
          </IconButton>
        ))}

        <Box sx={{ flexGrow: 1 }} />
        <Button
          color="secondary"
          variant="contained"
          onClick={handleCreatePost}
        >
          Publicar
        </Button>
      </Box>
    </Box>
  );
};

PostForm.propTypes = {
  foto_perfil: PropTypes.string,
};

export default PostForm;
