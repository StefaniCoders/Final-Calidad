import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  ThemeProvider,
  Avatar,
  CssBaseline,
  Stack,
  Toolbar,
  createTheme,
} from "@mui/material";
import Post from "../components/Post";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import PostForm from "../components/PostForm";
import ProfileInfo from "../components/ProfileInfo";
import ProfileInfoCustom from "../components/ProfileInfoCustom";

import PropTypes from "prop-types";
import { getDataUser, getImgPerfil } from "../services/user";

const dataTest2 = Array.from({ length: 11 }, (_, index) => ({
  id: index + 1,
  nombre: `Amigo${index + 1}`,
  apellido: `Apellido${index + 1}`,
}));

const MainContent2 = ({ foto_perfil, data }) => (
  <Grid item xs={12} md={8} style={{ overflow: "auto" }}>
    <Stack spacing={3}>
      <Paper style={{ minHeight: "10px", padding: "0 15%" }}>
        <ProfileInfoCustom foto_perfil={foto_perfil} />
      </Paper>
      <Paper style={{ minHeight: "10px", padding: "0 15%" }}>
        <ProfileInfo data={data}></ProfileInfo>
      </Paper>
    </Stack>
  </Grid>
);

MainContent2.propTypes = {
  foto_perfil: PropTypes.string,
  data: PropTypes.array,
};

const dataTest = Array.from({ length: 50 }, (_, index) => index + 1);

const MainContent = ({ foto_perfil, data }) => (
  <Grid item xs={12} md={8} style={{ overflow: "auto" }}>
    <Stack spacing={3}>
      <Paper style={{ minHeight: "10px", padding: "0 15%" }}>
        <PostForm foto_perfil={foto_perfil} />
      </Paper>
      <Paper style={{ minHeight: "10px", padding: "0 15%" }}>
        <Post data={data}></Post>
      </Paper>
    </Stack>
  </Grid>
);

MainContent.propTypes = {
  foto_perfil: PropTypes.string,
  data: PropTypes.array,
};

const Sidebar = () => (
  <Grid item xs={12} md={4}>
    <Stack
      spacing={5}
      sx={{ width: "100%", height: "calc(100vh - 150px)", position: "fixed" }}
    >
      <Paper
        style={{
          padding: "20px",
          height: "50%",
          width: "100%",
          overflow: "auto",
        }}
      >
        <h2>Sidebar</h2>
        {dataTest.map((item) => (
          <Avatar key={item}>{item}</Avatar>
        ))}
      </Paper>
      <Paper
        style={{
          padding: "20px",
          height: "50%",
          width: "100%",
          overflow: "auto",
        }}
      >
        <h2>Amigos</h2>
        {dataTest2.map((item) => (
          <Stack direction="row" alignItems="center" spacing={1} key={item.id}>
            <Avatar>{item.id}</Avatar>
            <Typography>{`${item.nombre} ${item.apellido}`}</Typography>
          </Stack>
        ))}
      </Paper>
    </Stack>
  </Grid>
);

const theme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#171923" },
    primary: {
      main: "#212330",
    },
    secondary: {
      main: "#4361EE",
    },
    body: {
      main: "#171923",
    },
    appBar: {
      main: "#212330",
    },
    drawer: {
      main: "#212330",
      hover: "#303343",
    },
    history: {
      main: "#4D526D",
    },
    post: {
      main: "#212330",
    },
  },
});

const Perfil = () => {
  const [dataUser, setDataUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    (async () => setDataUser(await getDataUser(token)))();
    (async () => {
      const imageUrl = arrayBufferToBase64(await getImgPerfil(token));
      setDataUser((prevData) => ({ ...prevData, foto_perfil: imageUrl }));
    })();
    (async () => setPosts(await getAllPosts()))();
  }, []);

  const cardGeneral = {
    // padding:"45px",
    background: { default: "#171923" },
  };

  return (
    <div style={cardGeneral}>
      <div>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <SideBar anchor="left" />
            <Box
              sx={{
                flexGrow: 1,
                ml: 5,
              }}
            >
              <Box sx={{ mb: 7 }}>
                <NavBar />
              </Box>
              <Toolbar />
              {}
              <Grid container spacing={0}>
                <MainContent2 foto_perfil={dataUser.foto_perfil} data={posts} />
                <Sidebar />
                <Grid container spacing={0}>
                  <MainContent
                    foto_perfil={dataUser.foto_perfil}
                    data={posts}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Perfil;
