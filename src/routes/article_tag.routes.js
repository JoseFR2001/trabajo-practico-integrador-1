import { Router } from "express";
import {
  createArticleTag,
  deleteArticleTag,
} from "../controllers/article_tag.controller.js";

import {
  createArticleTagValidation,
  deleteArticleTagValidation,
} from "../middlewares/validations/article_tag.validation.js";

import applyValidations from "../middlewares/validator.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { authorMiddleware } from "../middlewares/owner.middleware.js";

const articleTagRouter = Router();

articleTagRouter.post(
  "/articles-tags",
  authMiddleware,
  authorMiddleware,
  createArticleTagValidation,
  applyValidations,
  createArticleTag
);

articleTagRouter.delete(
  "/articles-tags/:articleTagId",
  authMiddleware,
  authorMiddleware,
  deleteArticleTagValidation,
  applyValidations,
  deleteArticleTag
);

export default articleTagRouter;
