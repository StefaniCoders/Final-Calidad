import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import axios from "axios";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { useState } from "react";

const SignUpFormDialog = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    contraseña: "",
    sexo: "",
    fecha_nacimiento: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleGenderChange = (event) => {
    setFormData({
      ...formData,
      sexo: event.target.value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      fecha_nacimiento: dayjs(date).format("YYYY-MM-DD"),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://localhost:3000/registrarse";
    axios
      .post(url, formData)
      .then((response) => response.data)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    setFormData({
      nombre: "",
      apellidos: "",
      correo: "",
      contraseña: "",
      sexo: "",
      fecha_nacimiento: null,
    });

    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Regístrate</DialogTitle>
      <DialogContent>
        <DialogContentText>Es rápido y fácil</DialogContentText>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl variant="filled" fullWidth>
                <InputLabel htmlFor="nombre">Nombre</InputLabel>
                <FilledInput
                  id="nombre"
                  name="nombre"
                  onChange={handleInputChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="filled" fullWidth>
                <InputLabel htmlFor="apellidos">Apellido</InputLabel>
                <FilledInput
                  id="apellidos"
                  name="apellidos"
                  onChange={handleInputChange}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl variant="filled" fullWidth>
                <InputLabel htmlFor="correo">Correo Electrónico</InputLabel>
                <FilledInput
                  id="correo"
                  name="correo"
                  onChange={handleInputChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="filled" fullWidth>
                <InputLabel htmlFor="contraseña">Contraseña</InputLabel>
                <FilledInput
                  id="contraseña"
                  name="contraseña"
                  type="password"
                  onChange={handleInputChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">Sexo</FormLabel>
                <RadioGroup
                  aria-label="sexo"
                  name="sexo"
                  value={formData.sexo}
                  onChange={handleGenderChange}
                  row
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <FormControlLabel
                    value="masculino"
                    control={<Radio />}
                    label="Masculino"
                  />
                  <FormControlLabel
                    value="femenino"
                    control={<Radio />}
                    label="Femenino"
                  />
                  <FormControlLabel
                    value="otro"
                    control={<Radio />}
                    label="Otro"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    name="fecha_nacimiento"
                    label="Fecha de nacimiento"
                    value={formData.fecha_nacimiento}
                    onChange={handleDateChange}
                    sx={{ width: "100%" }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Registrarse
        </Button>
      </DialogActions>
    </Dialog>
  );
};

SignUpFormDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SignUpFormDialog;
