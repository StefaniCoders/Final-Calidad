import jwt from "jsonwebtoken";

function validateToken(req, res, next) {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token)
    return res.status(401).json({ error: "No se ha enviado el token" });

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    if (err) return res.status(403).json({ error: "Token inválido" });

    req.usuario = decoded;

    next();
  });
}

export default validateToken;
