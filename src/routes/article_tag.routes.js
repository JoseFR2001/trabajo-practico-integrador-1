import { Router } from "express";
import {
  createArticleTag,
  deleteArticleTag,
  getAllArticleTags,
  getByPkArticleTag,
  updateArticleTag,
} from "../controllers/article_tag.controller.js";

const articleTagRouter = Router();

articleTagRouter.post("/articles-tags", createArticleTag);
articleTagRouter.get("/articles-tags", getAllArticleTags);
articleTagRouter.get("/articles-tags/:id", getByPkArticleTag);
articleTagRouter.put("/articles-tags/:id", updateArticleTag);
articleTagRouter.delete("/articles-tags/:id", deleteArticleTag);

export default articleTagRouter;
