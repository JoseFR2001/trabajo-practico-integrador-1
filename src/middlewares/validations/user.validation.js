import { body, param } from "express-validator";
import UserModel from "../../models/user.model.js";

// username: 3-20 caracteres, alfanumérico, único.
// email: formato válido, único.
// password: mínimo 8 caracteres, al menos una mayúscula, minúscula y número.
// role: solo valores permitidos ('user', 'admin').

export const createUserValidator = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("El username es obligatorio")
    .isLength({ min: 3, max: 20 })
    .withMessage(
      "El username debe tener un minimo de 3 caracteres y un maximo de 20"
    )
    .isAlphanumeric()
    .withMessage("El username debe ser alfanumerico")
    .custom(async (username) => {
      const usernameMinuscula = username.toLowerCase();
      const user = await UserModel.findOne({
        where: { username: usernameMinuscula },
      });
      if (user) {
        throw new Error("El usurname ya existe");
      }
      return true;
    }),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("El email es obliatorio")
    .isEmail()
    .withMessage("No tiene el formato ejemplo@gmail.com")
    .custom(async (email) => {
      const emailMinuscula = email.toLowerCase();
      const email = await UserModel.findOne({
        where: { email: emailMinuscula },
      });
      if (email) {
        throw new Error("El email ya existe");
      }
      return true;
    }),
];
