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
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";

const tagRouter = Router();

tagRouter.post(
  "/tags",
  authMiddleware,
  adminMiddleware,
  createTagValidation,
  applyValidations,
  createTag
);

tagRouter.get("/tags", authMiddleware, getAllTags);

tagRouter.get(
  "/tags/:id",
  authMiddleware,
  adminMiddleware,
  getTagByPkValidation,
  applyValidations,
  getByPkTag
);

tagRouter.put(
  "/tags/:id",
  authMiddleware,
  adminMiddleware,
  updateTagValidation,
  applyValidations,
  updateTag
);

tagRouter.delete(
  "/tags/:id",
  authMiddleware,
  adminMiddleware,
  deleteTagValidation,
  applyValidations,
  deleteTag
);

export default tagRouter;
