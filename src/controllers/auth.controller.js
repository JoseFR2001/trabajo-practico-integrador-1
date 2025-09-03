import { matchedData } from "express-validator";
import { generateToken } from "../helpers/jwt.helper.js";
import ProfileModel from "../models/profile.model.js";
import UserModel from "../models/user.model.js";
import { comparePassword, hashPassword } from "../helpers/bcrypt.helper.js";

export const register = async (req, res) => {
  try {
    const data = matchedData(req, { locations: ["body"] });

    console.log(data);

    if (Object.keys(data).length === 0) {
      return res
        .status(404)
        .json({ message: "La data tiene que ser correcta" });
    }

    const hashedPassword = await hashPassword(data.password);

    const user = await UserModel.create({
      username: data.username,
      email: data.email,
      password: hashedPassword,
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
    where: { username },
    include: {
      model: ProfileModel,
      attributes: ["first_name", "last_name"],
      as: "profile",
    },
  });
  if (!user) {
    return res.status(401).json({ message: "Credenciales inválidas" });
  }

  // 2. Comparar contraseña ingresada con hash almacenado
  const validPassword = await comparePassword(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ message: "password inválidas" });
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

//● GET /api/auth/profile: Obtener perfil del usuario autenticado. (usuario autenticado)

export const getProfile = async (req, res) => {
  try {
    const perfil = await ProfileModel.findByPk(req.user.id);
    if (!perfil)
      return res.status(404).json({ message: "El perfil no encontrado" });
    return res.status(200).json(perfil);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const data = matchedData(req, { locations: ["body"] });

    if (Object.keys(data).length === 0) {
      return res
        .status(404)
        .json({ message: "La data tiene que ser correcta" });
    }

    const perfil = await ProfileModel.findByPk(req.user.id);
    if (!perfil)
      return res.status(404).json({ message: "El perfil no encontrado" });

    await perfil.update(data);
    return res.json({
      message: "Perfil actualizado correctamente",
      perfil,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
