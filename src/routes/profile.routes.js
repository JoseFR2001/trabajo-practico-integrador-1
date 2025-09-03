import { Router } from "express";
import {
  createProfile,
  deleteProfile,
  getAllProfiles,
  getByPkProfile,
  updateProfile,
} from "../controllers/profile.controller.js";

import {
  // createProfileValidation,
  deleteProfileValidation,
  getProfileByPkValidation,
  updateProfileValidation,
} from "../middlewares/validations/profile.validation.js";

import applyValidations from "../middlewares/validator.js";

const profileRouter = Router();

profileRouter.post(
  "/profiles",
  // createProfileValidation,
  applyValidations,
  createProfile
);

profileRouter.get("/profiles", getAllProfiles);

profileRouter.get(
  "/profiles/:id",
  getProfileByPkValidation,
  applyValidations,
  getByPkProfile
);

profileRouter.put(
  "/profiles/:id",
  updateProfileValidation,
  applyValidations,
  updateProfile
);

profileRouter.delete(
  "/profiles/:id",
  deleteProfileValidation,
  applyValidations,
  deleteProfile
);

export default profileRouter;
