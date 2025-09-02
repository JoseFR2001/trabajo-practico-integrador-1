import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getByPkUser,
  updateUser,
} from "../controllers/user.controller.js";
import { createUserValidator } from "../middlewares/validations/user.validation.js";
import applyValidations from "../middlewares/validator.js";

const userRouter = Router();
userRouter.post("/users", createUserValidator, applyValidations, createUser);
userRouter.get("/users", getAllUser);
userRouter.get("/users/:id", getByPkUser);
userRouter.put("/users/:id", updateUser);
userRouter.delete("/users/:id", deleteUser);

export default userRouter;
