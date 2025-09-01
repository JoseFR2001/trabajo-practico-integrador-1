import { Router } from "express";
import {
  createArticleTag,
  deleteArticleTag,
  getAllArticleTags,
  getByPkArticleTag,
  updateArticleTag,
} from "../controllers/article_tag.controller.js";

const articleTagRouter = Router();

articleTagRouter.post("/", createArticleTag);
articleTagRouter.get("/", getAllArticleTags);
articleTagRouter.get("/:id", getByPkArticleTag);
articleTagRouter.put("/:id", updateArticleTag);
articleTagRouter.delete("/:id", deleteArticleTag);

export default articleTagRouter;
