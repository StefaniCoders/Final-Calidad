import { Schema, model } from "mongoose";
import { getDateTimePeru } from "../utils/dateTime.js";

const UserSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  foto_perfil: {
    type: String,
  },
  sexo: {
    type: String,
    enum: ["masculino", "femenino", "otro"],
    required: true,
  },
  fecha_registro: {
    type: String,
    default: getDateTimePeru(),
  },
  fecha_nacimiento: {
    type: String,
  },
  contraseña: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  amigos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
    },
  ],
  solicitudes_amistad: [
    {
      usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario",
        required: true,
      },
      estado: {
        type: String,
        enum: ["pendiente", "aceptado"],
        default: "pendiente",
        required: true,
      },
    },
  ],
  foto_perfil: {
    type: String,
  },
});

const User = model("User", UserSchema);

export default User;
