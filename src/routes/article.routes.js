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
  idArticleValidation,
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

articleRouter.get("/articles/user", authMiddleware, getArticleUserLogin);

articleRouter.get(
  "/articles/user/:id",
  authMiddleware,
  idArticleValidation,
  applyValidations,
  getArticleUserLoginById
);
articleRouter.get(
  "/articles/:id",
  authMiddleware,
  idArticleValidation,
  applyValidations,
  getByPkArticle
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
  idArticleValidation,
  applyValidations,
  deleteArticle
);

export default articleRouter;
