import { Router } from "express";
import {
  createArticle,
  deleteArticle,
  getAllArticles,
  getAllUserLogeado,
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

const articleRouter = Router();

articleRouter.post(
  "/articles",
  authMiddleware,
  createArticleValidation,
  applyValidations,
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

articleRouter.get("/articles/user", authMiddleware, getAllUserLogeado);

articleRouter.get("/articles/user/:id", authMiddleware, getByPkArticle);

articleRouter.put(
  "/articles/:id",
  authMiddleware,
  ownerMiddleware,
  updateArticleValidation,
  applyValidations,
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
