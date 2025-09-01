import { Router } from "express";
import {
  createArticle,
  deleteArticle,
  getAllArticles,
  getByPkArticle,
  updateArticle,
} from "../controllers/article.controller.js";

const articleRouter = Router();

articleRouter.post("/", createArticle);
articleRouter.get("/", getAllArticles);
articleRouter.get("/:id", getByPkArticle);
articleRouter.put("/:id", updateArticle);
articleRouter.delete("/:id", deleteArticle);

export default articleRouter;
