import { matchedData } from "express-validator";
import { generateToken } from "../helpers/jwt.helper.js";
import ProfileModel from "../models/profile.model.js";
import UserModel from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const data = matchedData(req, { locations: ["body"] });
    console.log(data);

    if (Object.keys(data).length === 0) {
      return res
        .status(404)
        .json({ message: "La data tiene que ser correcta" });
    }

    const user = await UserModel.create({
      username: data.username,
      email: data.email,
      password: data.password,
      role: data.role,
    });

    await ProfileModel.create({
      user_id: user.id,
      first_name: data.first_name,
      last_name: data.last_name,
      biography: data.biography,
      avatar_url: data.avatar_url,
      birth_date: data.birth_date,
    });

    res.status(201).json({
      msg: "usuario creado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error interno del servidor",
    });
  }
};

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
