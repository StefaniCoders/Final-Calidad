import { Schema } from "mongoose";
import { getDateTimePeru } from "../utils/dateTime";

const MessageSchema = new Schema({
  contenido: {
    type: String,
    required: true,
  },
  remitente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  receptor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  fecha_envio: {
    type: String,
    default: getDateTimePeru(),
  },
});

const Message = model("Message", MessageSchema);

export default Message;
