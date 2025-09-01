import ProfileModel from "../models/profile.model.js";

export const createProfile = async (req, res) => {
  try {
    const profile = await ProfileModel.create(req.body);
    return res.status(201).json(profile);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllProfiles = async (req, res) => {
  try {
    const profiles = await ProfileModel.findAll();
    if (profiles.length === 0)
      return res.status(404).json({ message: "No existen perfiles" });
    return res.status(200).json(profiles);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getByPkProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const profile = await ProfileModel.findByPk(id);
    if (!profile)
      return res.status(404).json({ message: "El perfil no existe" });
    return res.status(200).json(profile);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await ProfileModel.update(req.body, { where: { id } });
    if (updated === 0) {
      return res.status(404).json({ message: "El perfil no existe" });
    } else {
      const profile = await ProfileModel.findByPk(id);
      return res.status(200).json(profile);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await ProfileModel.destroy({ where: { id } });
    if (!deleted)
      return res.status(404).json({ message: "El perfil no existe" });
    return res.status(200).json({ message: "Perfil eliminado correctamente" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
