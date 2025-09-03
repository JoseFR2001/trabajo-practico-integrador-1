import ArticleTagModel from "../models/article_tag.model.js";

export const createArticleTag = async (req, res) => {
  try {
    const articleTag = await ArticleTagModel.create(req.body);
    return res.status(201).json(articleTag);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllArticleTags = async (req, res) => {
  try {
    const articleTags = await ArticleTagModel.findAll();
    if (articleTags.length === 0)
      return res
        .status(404)
        .json({ message: "No existen relaciones artículo-etiqueta" });
    return res.status(200).json(articleTags);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getByPkArticleTag = async (req, res) => {
  const { id } = req.params;
  try {
    const articleTag = await ArticleTagModel.findByPk(id);
    if (!articleTag)
      return res.status(404).json({ message: "La relación no existe" });
    return res.status(200).json(articleTag);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateArticleTag = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await ArticleTagModel.update(req.body, { where: { id } });
    if (updated === 0) {
      return res.status(404).json({ message: "La relación no existe" });
    } else {
      const articleTag = await ArticleTagModel.findByPk(id);
      return res.status(200).json(articleTag);
    }
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
