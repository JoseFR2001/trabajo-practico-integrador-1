import ArticleTagModel from "../models/article_tag.model.js";

export const createArticleTag = async (req, res) => {
  try {
    const articleTag = await ArticleTagModel.create(req.body);
    return res.status(201).json(articleTag);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteArticleTag = async (req, res) => {
  const { articleTagId } = req.params;
  try {
    const deleted = await ArticleTagModel.destroy({ where: { articleTagId } });
    if (!deleted)
      return res.status(404).json({ message: "La relación no existe" });
    return res
      .status(200)
      .json({ message: "Relación eliminada correctamente" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
