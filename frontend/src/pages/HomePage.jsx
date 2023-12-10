import {
  Avatar,
  Box,
  CssBaseline,
  Grid,
  Paper,
  Stack,
  ThemeProvider,
  Toolbar,
  createTheme,
} from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { arrayBufferToBase64 } from "../../utils/arrayBuffer";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import PostForm from "../components/PostForm";
import SideBar from "../components/SideBar";
import { getAllPosts } from "../services/post";
import { getDataUser, getImgPerfil } from "../services/user";

// const Search = styled("div")(({ theme }) => ({
//   borderRadius: theme.shape.borderRadius,
//   display: "flex",
//   flexGrow: 1,
//   marginLeft: theme.spacing(1),
//   backgroundColor: "#434557",
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   width: "100%",
// }));

const dataTest = Array.from({ length: 50 }, (_, index) => index + 1);

const MainContent = ({ foto_perfil, data }) => (
  <Grid item xs={12} md={8} style={{ overflow: "auto" }}>
    <Stack spacing={3}>
      <Paper style={{ minHeight: "200px", padding: "0 15%" }}>
        <PostForm foto_perfil={foto_perfil} />
      </Paper>
      <Paper style={{ minHeight: "200px", padding: "0 15%" }}>
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
        }}
      >
        {/* Contenido de la barra lateral */}
        <h2>Sidebar</h2>
        {/* Agrega más contenido según sea necesario */}
        {/* ... */}
      </Paper>
    </Stack>
  </Grid>
);

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(1)})`,
//     width: "100%",
//   },
// }));

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

const HomePage = () => {
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

  return (
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
            <Grid container spacing={5}>
              <MainContent foto_perfil={dataUser.foto_perfil} data={posts} />
              <Sidebar />
            </Grid>
          </Box>
        </Box>
        <Box>
        </Box>
      </ThemeProvider>
    </div>

  );
};

export default HomePage;
