import { Box, Button, Grid, Paper } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomDivider from "../components/CustomDivider";
import ForgotPasswordLink from "../components/ForgotPasswordLink";
import PageHeader from "../components/PageHeader";
import SignInForm from "../components/SignInForm";
import SignUpFormDialog from "../components/SignUpFormDialog";
import SocialLinks from "../components/SocialLinks";
import LoginGoogle from "./LoginGoogle";


const SignInPage = () => {
  const [open, setOpen] = useState(false);
  const [loginData, setLoginData] = useState({
    correo: "",
    contraseña: "",
  });

  const navigate = useNavigate();

  const handleOpenDialog = () => setOpen(true);
  const handleCloseDialog = () => setOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const handleLoginSubmit = () => {
    const url = "http://localhost:3000/iniciar-sesion";
    axios
      .post(url, { ...loginData }, { withCredentials: true })
      .then((response) => response.data)
      .then((data) => {
        localStorage.setItem("token", data.token);
        navigate("/home");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          width: "60%",
          maxHeight: 600,
        }}
      >
        <Grid container spacing={5}>
          <Grid
            item
            xs={12}
            md={7}
            lg={7}
            sx={{
              display: { xs: "none", lg: "block" },
              margin: 0,
            }}
          >
            <img
              src="https://previews.123rf.com/images/shushanto/shushanto2209/shushanto220900703/191842443-imagen-de-fondo-de-la-ilustraci%C3%B3n-del-arte-conceptual-de-la-destrucci%C3%B3n-de-los-planetas.jpg"
              alt="logo"
              style={{
                borderRadius: "8px",
                objectFit: "cover",
                height: "100%",
              }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={5}
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              rowGap: 1.5,
            }}
          >
            <PageHeader>Iniciar Sesión</PageHeader>
            <SocialLinks />
            <CustomDivider text="o usa tu cuenta" />
            <SignInForm
              loginSubmit={handleLoginSubmit}
              inputChange={handleInputChange}
            />
            <ForgotPasswordLink />
            <CustomDivider />

            <Button
              sx={{
                width: "200px",
                maxWidth: "100%",
                alignSelf: "center",
              }}
              variant="contained"
              color="success"
              onClick={handleOpenDialog}
            >
              Crear Cuenta
            </Button>
            
            <LoginGoogle />

            
          
            

          </Grid>

        </Grid>
        <SignUpFormDialog open={open} onClose={handleCloseDialog} />
      </Paper>
    </Box>
  );
};

export default SignInPage;
