import { Router } from "express";
import {
  createTag,
  deleteTag,
  getAllTags,
  getByPkTag,
  updateTag,
} from "../controllers/tag.controller.js";

const tagRouter = Router();

tagRouter.post("/tags", createTag);
tagRouter.get("/tags", getAllTags);
tagRouter.get("/tags/:id", getByPkTag);
tagRouter.put("/tags/:id", updateTag);
tagRouter.delete("/tags/:id", deleteTag);

export default tagRouter;
