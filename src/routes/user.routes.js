import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getByPkUser,
  updateUser,
} from "../controllers/user.controller.js";

const userRouter = Router();
userRouter.post("/user", createUser);
userRouter.get("/user", getAllUser);
userRouter.get("/user/:id", getByPkUser);
userRouter.put("/user/:id", updateUser);
userRouter.delete("/user/:id", deleteUser);

export default userRouter;
