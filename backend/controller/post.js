import Post from "../models/Post.js";

class PostController {
  static async createPostWithMultimedia(req, res) {
    try {
      const { contenido, tipoMultimedia } = req.body;
      const { path } = req.file;
      const usuario = req.session.userId;

      if (!usuario)
        return res
          .status(400)
          .json({ message: "No se proporciono Id del usuario." });

      let url = "http://localhost:3000".concat(
        path.replace("public", "").replace(/\\/g, "/")
      );
      console.log(url);

      const newPost = new Post({
        usuario,
        multimedia: {
          tipo: tipoMultimedia,
          url,
        },
      });

      if (contenido) newPost.contenido = contenido;

      const savePost = await newPost.save();

      if (!savePost)
        return res.status(500).json({ message: "Error al guardar." });

      return res.status(200).json(newPost);
    } catch (err) {
      return res
        .status(500)
        .json({ error: err.message, message: "Error al guardar." });
    }
  }

  static async createPostWithOutMultimedia(req, res) {
    try {
      const usuario = req.session.userId;
      const { contenido } = req.body;

      if (!usuario)
        return res
          .status(400)
          .json({ message: "No se proporciono Id del usuario." });

      const newPost = new Post({ usuario, contenido });

      const savePost = await newPost.save();

      if (!savePost)
        return res.status(500).json({ message: "Error al guardar." });

      return res.status(200).json(newPost);
    } catch (err) {
      return res
        .status(500)
        .json({ error: err.message, message: "Error al guardar." });
    }
  }

  static async getPosts(req, res) {
    const posts = await Post.find();

    if (!posts)
      return res.status(404).json({ message: "No hay publicaciones." });

    return res.status(200).json(posts);
  }
}

export default PostController;
