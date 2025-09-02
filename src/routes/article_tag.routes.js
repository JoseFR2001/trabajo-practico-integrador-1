import { Router } from "express";
import {
  createArticleTag,
  deleteArticleTag,
  getAllArticleTags,
  getByPkArticleTag,
  updateArticleTag,
} from "../controllers/article_tag.controller.js";

import {
  createArticleTagValidation,
  deleteArticleTagValidation,
  getByPkArticleTagValidation,
  updateArticleTagValidation,
} from "../middlewares/validations/article_tag.validation.js";

import applyValidations from "../middlewares/validator.js";

const articleTagRouter = Router();

articleTagRouter.post(
  "/articles-tags",
  createArticleTagValidation,
  applyValidations,
  createArticleTag
);

articleTagRouter.get("/articles-tags", getAllArticleTags);

articleTagRouter.get(
  "/articles-tags/:id",
  getByPkArticleTagValidation,
  applyValidations,
  getByPkArticleTag
);

articleTagRouter.put(
  "/articles-tags/:id",
  updateArticleTagValidation,
  applyValidations,
  updateArticleTag
);

articleTagRouter.delete(
  "/articles-tags/:id",
  deleteArticleTagValidation,
  applyValidations,
  deleteArticleTag
);

export default articleTagRouter;
