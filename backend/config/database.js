import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/myDB";

mongoose.connect(url);

const connection = mongoose.connection;

connection.on("error", (error) => {
  console.log("Error de conexion a MongoDB", error.message);
});

connection.once("open", () => {
  console.log("Connected to MongoDB33");
});

export default connection;
