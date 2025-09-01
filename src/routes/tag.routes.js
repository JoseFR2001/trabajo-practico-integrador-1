import { Router } from "express";
import {
  createTag,
  deleteTag,
  getAllTags,
  getByPkTag,
  updateTag,
} from "../controllers/tag.controller.js";

const tagRouter = Router();

tagRouter.post("/", createTag);
tagRouter.get("/", getAllTags);
tagRouter.get("/:id", getByPkTag);
tagRouter.put("/:id", updateTag);
tagRouter.delete("/:id", deleteTag);

export default tagRouter;
