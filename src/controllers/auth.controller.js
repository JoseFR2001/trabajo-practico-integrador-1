import { generateToken } from "../helpers/jwt.helper.js";
import ProfileModel from "../models/profile.model.js";
import UserModel from "../models/user.model.js";

export const login = async (req, res) => {
  const { username, password } = req.body;
  // Buscar usuario en base de datos
  const user = await UserModel.findOne({
    where: { username, password },
    include: {
      model: ProfileModel,
      attributes: ["first_name", "last_name"],
      as: "profile",
    },
  });
  if (!user) {
    return res.status(401).json({ message: "Credenciales inválidas" });
  }
  // Generar JWT
  const token = generateToken({
    id: user.id,
    role: user.role,
    first_name: user.profile.first_name,
    last_name: user.profile.last_name,
  });
  // Enviar token como cookie
  res.cookie("token", token, {
    httpOnly: true, // No accesible desde JavaScript
    maxAge: 1000 * 60 * 60, // 1 hora
  });
  return res.json({ message: "Login exitoso" });
};

export const logout = (req, res) => {
  res.clearCookie("token"); // Eliminar cookie del navegador
  return res.json({ message: "Logout exitoso" });
};
