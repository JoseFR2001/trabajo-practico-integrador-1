import { Router } from "express";
import {
  deleteUser,
  getAllUser,
  getByPkUser,
  updateUser,
} from "../controllers/user.controller.js";
import {
  idParamsUserValidation,
  updateUserValidation,
} from "../middlewares/validations/user.validation.js";
import applyValidations from "../middlewares/validator.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";
import { dataValidada } from "../middlewares/matched_data.middleware.js";

const userRouter = Router();

userRouter.get("/users", authMiddleware, adminMiddleware, getAllUser);

userRouter.get(
  "/users/:id",
  authMiddleware,
  adminMiddleware,
  idParamsUserValidation,
  applyValidations,
  getByPkUser
);

userRouter.put(
  "/users/:id",
  authMiddleware,
  adminMiddleware,
  updateUserValidation,
  applyValidations,
  dataValidada,
  updateUser
);
userRouter.delete(
  "/users/:id",
  authMiddleware,
  adminMiddleware,
  idParamsUserValidation,
  applyValidations,
  deleteUser
);

export default userRouter;
