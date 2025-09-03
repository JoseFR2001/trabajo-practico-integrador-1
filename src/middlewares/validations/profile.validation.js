import { body, param } from "express-validator";
import ProfileModel from "../../models/profile.model.js";
import UserModel from "../../models/user.model.js";

// export const createProfileValidation = [
//   body("first_name")
//     .trim()
//     .notEmpty()
//     .withMessage("El nombre es obligatorio")
//     .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/)
//     .withMessage("El nombre solo puede contener letras y espacios")
//     .isLength({ min: 2, max: 50 })
//     .withMessage("El nombre debe tener entre 2 y 50 caracteres")
//     .escape(),
//   body("last_name")
//     .trim()
//     .notEmpty()
//     .withMessage("El apellido es obligatorio")
//     .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/)
//     .withMessage("El apellido solo puede contener letras y espacios")
//     .isLength({ min: 2, max: 50 })
//     .withMessage("El apellido debe tener entre 2 y 50 caracteres")
//     .escape(),
//   body("biography")
//     .optional()
//     .notEmpty()
//     .withMessage("La biografía no puede estar vacía")
//     .isLength({ max: 500 })
//     .withMessage("La biografía tiene un máximo de 500 caracteres"),
//   body("avatar_url")
//     .optional()
//     .notEmpty()
//     .withMessage("El avatar_url no puede estar vacío")
//     .isURL()
//     .withMessage("El avatar_url no tiene el formato correcto"),
//   body("birth_date")
//     .optional()
//     .notEmpty()
//     .withMessage("La fecha de nacimiento no puede estar vacía")
//     .isISO8601()
//     .withMessage("El birth_date debe estar en formato YYYY-MM-DD"),
//   body("user_id")
//     .notEmpty()
//     .withMessage("El user_id es obligatorio")
//     .isInt()
//     .withMessage("El id debe ser un número entero")
//     .custom(async (user_id) => {
//       if (Number(user_id) < 1) throw new Error("El user_id debe ser positivo");
//       return true;
//     })
//     .custom(async (user_id) => {
//       const user = await UserModel.findByPk(user_id);
//       if (!user) throw new Error("El usuario no existe");
//       return true;
//     }),
// ];

export const getProfileByPkValidation = [
  param("id")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (id) => {
      if (Number(id) < 1) throw new Error("El id debe ser positivo");
      return true;
    })
    .custom(async (id) => {
      const user = await ProfileModel.findByPk(id);
      if (!user) throw new Error("El Perfil no existe");
      return true;
    }),
];

export const updateProfileValidation = [
  param("id")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (id) => {
      if (Number(id) < 1) throw new Error("El id debe ser positivo");
      return true;
    })
    .custom(async (id) => {
      const user = await ProfileModel.findByPk(id);
      if (!user) throw new Error("El Perfil no existe");
      return true;
    }),
  body("first_name")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/)
    .withMessage("El nombre solo puede contener letras y espacios")
    .isLength({ min: 2, max: 50 })
    .withMessage("El nombre debe tener entre 2 y 50 caracteres")
    .escape(),
  body("last_name")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("El apellido es obligatorio")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/)
    .withMessage("El apellido solo puede contener letras y espacios")
    .isLength({ min: 2, max: 50 })
    .withMessage("El apellido debe tener entre 2 y 50 caracteres")
    .escape(),
  body("biography")
    .optional()
    .notEmpty()
    .withMessage("La biografía no puede estar vacía")
    .isLength({ max: 500 })
    .withMessage("La biografía tiene un máximo de 500 caracteres"),
  body("avatar_url")
    .optional()
    .notEmpty()
    .withMessage("El avatar_url no puede estar vacío")
    .isURL()
    .withMessage("El avatar_url no tiene el formato correcto"),
  body("birth_date")
    .optional()
    .notEmpty()
    .withMessage("La fecha de nacimiento no puede estar vacía")
    .isISO8601()
    .withMessage("El birth_date debe estar en formato YYYY-MM-DD"),
  body("user_id")
    .optional()
    .notEmpty()
    .withMessage("El user_id es obligatorio")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (user_id) => {
      if (Number(user_id) < 1) throw new Error("El user_id debe ser positivo");
      return true;
    })
    .custom(async (user_id) => {
      const user = await UserModel.findByPk(user_id);
      if (!user) throw new Error("El usuario no existe");
      return true;
    }),
];

export const deleteProfileValidation = [
  param("id")
    .isInt()
    .withMessage("El id debe ser un número entero")
    .custom(async (id) => {
      if (Number(id) < 1) throw new Error("El id debe ser positivo");
      return true;
    })
    .custom(async (id) => {
      const user = await ProfileModel.findByPk(id);
      if (!user) throw new Error("El Perfil no existe");
      return true;
    }),
];
