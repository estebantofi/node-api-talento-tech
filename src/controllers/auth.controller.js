import { signToken } from "../utils/jwt.js";

export const login = (req, res) => {
  const { username, password } = req.body || {};

  if (username === "admin" && password === "1234") {
    const usuarioData = { id: 1, username: "admin", role: "admin" };

    const token = signToken(usuarioData);

    return res.json({
      mensaje: "Login exitoso",
      token,
    });
  }

  res.status(401).json({ error: "Credenciales incorrectas" });
};
