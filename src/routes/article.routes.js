import { Router } from "express";
import {
  createArticle,
  deleteArticle,
  getAllArticles,
  getByPkArticle,
  updateArticle,
} from "../controllers/article.controller.js";

const articleRouter = Router();

articleRouter.post("/articles", createArticle);
articleRouter.get("/articles", getAllArticles);
articleRouter.get("/articles/:id", getByPkArticle);
articleRouter.put("/articles/:id", updateArticle);
articleRouter.delete("/articles/:id", deleteArticle);

export default articleRouter;
