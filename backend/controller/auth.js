import User from "../models/User.js";
import generateToken from "../utils/authToken.js";

class AuthController {
  static async register(req, res) {
    try {
      const foto_perfil = "public/default-img.webp";
      const user = new User({ ...req.body, foto_perfil: foto_perfil });

      await user.save();

      return res
        .status(201)
        .json({ usuario: user, message: "Usuario creado!" });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async login(req, res) {
    const { correo, contraseña } = req.body;
    try {
      const user = await User.findOne({ correo });

      if (!user)
        return res.status(401).json("Usuario o contraseña incorrectas");

      if (contraseña !== user.contraseña)
        return res.status(401).json("Usuario o contraseña incorrectas");

      req.session.userId = user._id;
      //localStorage.setItem('clave', 'valor');

      //req.session.userId = user._id;

      const token = generateToken(user._id);

      res.status(200).json({ token: token, usuario: user });
    } catch (err) {
      return res.status(500).json({ message: "error", error: err.message });
    }
  }


  
}

export default AuthController;
