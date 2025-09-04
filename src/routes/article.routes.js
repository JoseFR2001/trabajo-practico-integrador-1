import { Router } from "express";
import {
  createArticle,
  deleteArticle,
  getAllArticles,
  getArticleUserLogin,
  getArticleUserLoginById,
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
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { ownerMiddleware } from "../middlewares/owner.middleware.js";
import { dataValidada } from "../middlewares/matched_data.middleware.js";

const articleRouter = Router();

articleRouter.post(
  "/articles",
  authMiddleware,
  createArticleValidation,
  applyValidations,
  dataValidada,
  createArticle
);

articleRouter.get("/articles", authMiddleware, getAllArticles);

articleRouter.get(
  "/articles/:id",
  authMiddleware,
  getArticleByPkValidation,
  applyValidations,
  getByPkArticle
);

articleRouter.get("/articles/user", authMiddleware, getArticleUserLogin);

articleRouter.get(
  "/articles/user/:id",
  authMiddleware,
  getArticleUserLoginById
);

articleRouter.put(
  "/articles/:id",
  authMiddleware,
  ownerMiddleware,
  updateArticleValidation,
  applyValidations,
  dataValidada,
  updateArticle
);

articleRouter.delete(
  "/articles/:id",
  authMiddleware,
  ownerMiddleware,
  deleteArticleValidation,
  applyValidations,
  deleteArticle
);

export default articleRouter;
