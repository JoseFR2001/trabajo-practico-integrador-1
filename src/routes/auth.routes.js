import { Router } from "express";
import {
  getProfile,
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/auth.controller.js";
import {
  createProfileValidation,
  createUserValidation,
  updateProfileValidation,
} from "../middlewares/validations/auth.validation.js";

import applyValidations from "../middlewares/validator.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

export const authRoutes = Router();

authRoutes.post(
  "/auth/register",
  createUserValidation,
  createProfileValidation,
  applyValidations,
  register
);

authRoutes.post("/auth/login", login);

authRoutes.post("/auth/logout", logout);

authRoutes.get("/auth/profile", authMiddleware, getProfile);

authRoutes.put(
  "/auth/profile",
  authMiddleware,
  updateProfileValidation,
  applyValidations,
  updateProfile
);
