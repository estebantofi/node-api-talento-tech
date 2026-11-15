import { signToken } from "../utils/jwt.js";
import { loginWithUsernamePassword } from "../services/login.service.js";

export const login = async (req, res) => {
  const { username, password } = req.body || {};

  if (username && password) {
    try {
      const user = await loginWithUsernamePassword(username, password);

      if (!user) {
        return res.status(404).json({ mensaje: "Usuario no encontrado" });
      }

      const token = signToken(user);

      return res.json({
        mensaje: "Login exitoso",
        token,
      });
    } catch (error) {
      console.error("error:", error);
      return res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  res.status(401).json({ error: "Credenciales Obligatorias" });
};
