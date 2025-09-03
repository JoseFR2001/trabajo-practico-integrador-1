import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getByPkUser,
  updateUser,
} from "../controllers/user.controller.js";

import {
  // createUserValidator,
  deleteUserValidation,
  getUserByPkValidation,
  updateUserValidation,
} from "../middlewares/validations/user.validation.js";
import applyValidations from "../middlewares/validator.js";

const userRouter = Router();

userRouter.post("/users", applyValidations, createUser);

userRouter.get("/users", getAllUser);

userRouter.get(
  "/users/:id",
  getUserByPkValidation,
  applyValidations,
  getByPkUser
);

userRouter.put(
  "/users/:id",
  updateUserValidation,
  applyValidations,
  updateUser
);

userRouter.delete(
  "/users/:id",
  deleteUserValidation,
  applyValidations,
  deleteUser
);

export default userRouter;
