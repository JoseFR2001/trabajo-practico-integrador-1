import UserModel from "../models/user.model.js";

export const createUser = async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    if (users.length === 0)
      return res.status(404).json({ message: "No existen usuarios" });
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getByPkUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findByPk(id);
    if (!user) return res.status(404).json({ message: "El usuario no existe" });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const [update] = await UserModel.update(req.body, { where: { id } });
    if (update === 0) {
      return res.status(404).json({ message: "El usuario no existe" });
    } else {
      const user = await UserModel.findByPk(id);
      return res.status(200).json(user);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await UserModel.destroy({ where: { id } });
    if (!deleted)
      return res.status(200).json({ message: "El usuario no existe" });
    return res.status(200).json({ message: "Usuario eliminado" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
