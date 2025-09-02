import { body, param } from "express-validator";

// title: 3-200 caracteres, obligatorio.
// content: mínimo 50 caracteres, obligatorio.
// excerpt: máximo 500 caracteres.
// status: solo valores permitidos ('published', 'archived').
// user_id: debe existir y coincidir con usuario autenticado (excepto admin).
