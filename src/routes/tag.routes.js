import { Router } from "express";
import {
  createTag,
  deleteTag,
  getAllTags,
  getByPkTag,
  updateTag,
} from "../controllers/tag.controller.js";

import {
  createTagValidation,
  deleteTagValidation,
  getTagByPkValidation,
  updateTagValidation,
} from "../middlewares/validations/tag.validation.js";

import applyValidations from "../middlewares/validator.js";

const tagRouter = Router();

tagRouter.post("/tags", createTagValidation, applyValidations, createTag);
tagRouter.get("/tags", getAllTags);
tagRouter.get("/tags/:id", getTagByPkValidation, applyValidations, getByPkTag);
tagRouter.put("/tags/:id", updateTagValidation, applyValidations, updateTag);
tagRouter.delete("/tags/:id", deleteTagValidation, applyValidations, deleteTag);

export default tagRouter;
