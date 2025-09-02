import { Router } from "express";
import {
  createArticle,
  deleteArticle,
  getAllArticles,
  getByPkArticle,
  updateArticle,
} from "../controllers/article.controller.js";

import {
  createArticleValidation,
  deleteArticleValidation,
  getArticleByPkValidation,
  updateArticleValidation,
} from "../middlewares/validations/article.validation.js";

import applyValidations from "../middlewares/validator.js";

const articleRouter = Router();

articleRouter.post(
  "/articles",
  createArticleValidation,
  applyValidations,
  createArticle
);

articleRouter.get("/articles", getAllArticles);

articleRouter.get(
  "/articles/:id",
  getArticleByPkValidation,
  applyValidations,
  getByPkArticle
);

articleRouter.put(
  "/articles/:id",
  updateArticleValidation,
  applyValidations,
  updateArticle
);

articleRouter.delete(
  "/articles/:id",
  deleteArticleValidation,
  applyValidations,
  deleteArticle
);

export default articleRouter;
