import { Router } from "express";
import {
  createProfile,
  deleteProfile,
  getAllProfiles,
  getByPkProfile,
  updateProfile,
} from "../controllers/profile.controller.js";

const profileRouter = Router();

profileRouter.post("/", createProfile);
profileRouter.get("/", getAllProfiles);
profileRouter.get("/:id", getByPkProfile);
profileRouter.put("/:id", updateProfile);
profileRouter.delete("/:id", deleteProfile);

export default profileRouter;
