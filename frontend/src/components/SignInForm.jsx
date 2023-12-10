import { Button, Stack } from "@mui/material";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import PropTypes from "prop-types";

const SignInForm = ({ loginSubmit, inputChange }) => {
  return (
    <Stack component="form" noValidate spacing={2}>
      <FormControl variant="filled">
        <InputLabel htmlFor="correo">Correo Electronico</InputLabel>
        <FilledInput id="correo" name="correo" onChange={inputChange} />
      </FormControl>
      <FormControl variant="filled">
        <InputLabel htmlFor="contraseña">Contraseña</InputLabel>
        <FilledInput id="contraseña" name="contraseña" onChange={inputChange} />
      </FormControl>
      <Button variant="contained" color="primary" onClick={loginSubmit}>
        Iniciar Sesion
      </Button>
    </Stack>
  );
};

SignInForm.propTypes = {
  loginSubmit: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
};

export default SignInForm;
