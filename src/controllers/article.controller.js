import ArticleModel from "../models/article.model.js";

export const createArticle = async (req, res) => {
  try {
    const article = await ArticleModel.create(req.body);
    return res.status(201).json(article);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllArticles = async (req, res) => {
  try {
    const articles = await ArticleModel.findAll();
    if (articles.length === 0)
      return res.status(404).json({ message: "No existen artículos" });
    return res.status(200).json(articles);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getByPkArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await ArticleModel.findByPk(id);
    if (!article)
      return res.status(404).json({ message: "El artículo no existe" });
    return res.status(200).json(article);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await ArticleModel.update(req.body, { where: { id } });
    if (updated === 0) {
      return res.status(404).json({ message: "El artículo no existe" });
    } else {
      const article = await ArticleModel.findByPk(id);
      return res.status(200).json(article);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await ArticleModel.destroy({ where: { id } });
    if (!deleted)
      return res.status(404).json({ message: "El artículo no existe" });
    return res
      .status(200)
      .json({ message: "El artículo eliminado correctamente" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
