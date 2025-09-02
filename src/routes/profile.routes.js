import { Router } from "express";
import {
  createProfile,
  deleteProfile,
  getAllProfiles,
  getByPkProfile,
  updateProfile,
} from "../controllers/profile.controller.js";

const profileRouter = Router();

profileRouter.post("/profiles", createProfile);
profileRouter.get("/profiles", getAllProfiles);
profileRouter.get("/profiles/:id", getByPkProfile);
profileRouter.put("/profiles/:id", updateProfile);
profileRouter.delete("/profiles/:id", deleteProfile);

export default profileRouter;
