import express from "express";
import dotenv from "dotenv";
import { initDB } from "./src/config/database.js";

import userRouter from "./src/routes/user.routes.js";
import profileRouter from "./src/routes/profile.routes.js";
import articleRouter from "./src/routes/article.routes.js";
import tagRouter from "./src/routes/tag.routes.js";
import articleTagRouter from "./src/routes/article_tag.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api", userRouter);
app.use("/api", profileRouter);
app.use("/api", articleRouter);
app.use("/api", tagRouter);
app.use("/api", articleTagRouter);

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
  });
});
