import jwt from "jsonwebtoken";

function generateToken(userId) {
  const token = jwt.sign({ id: userId }, process.env.SECRET, {
    expiresIn: 60 * 60 * 24 * 30,
  });

  return token;
}

export default generateToken;
