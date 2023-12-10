import { Schema, model } from "mongoose";
import { getDateTimePeru } from "../utils/dateTime.js";

const PostSchema = new Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  contenido: {
    type: String,
  },
  fecha_publicacion: {
    type: String,
    default: getDateTimePeru(),
  },
  multimedia: [
    {
      tipo: {
        type: String,
        enum: ["imagen", "video", "GIF"],
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  reaccion: [
    {
      usuario: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      tipo: {
        type: String,
        enum: [
          "me_gusta",
          "me_encanta",
          "me_asombra",
          "me_entristece",
          "me_divierte",
        ],
        required: true,
      },
      fecha: {
        type: String,
        default: getDateTimePeru(),
      },
    },
  ],
  comentarios: [
    {
      usuario: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      contenido: {
        type: String,
        required: true,
      },
      fecha_publicacion: {
        type: String,
        default: getDateTimePeru(),
      },
    },
  ],
});

const Post = model("Post", PostSchema);

export default Post;
