import { Router } from "express";
import { login, logout, register } from "../controllers/auth.controller.js";
import {
  createProfileValidation,
  createUserValidation,
} from "../middlewares/validations/auth.validation.js";

import applyValidations from "../middlewares/validator.js";

export const authRoutes = Router();

authRoutes.post(
  "/auth/register",
  createUserValidation,
  createProfileValidation,
  applyValidations,
  register
);

authRoutes.post("/auth/login", login);

authRoutes.post("/logout", logout);
