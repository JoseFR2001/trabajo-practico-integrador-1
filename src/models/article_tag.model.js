import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import ArticleModel from "./article.model.js";
import TagModel from "./tag.model.js";

const ArticleTagModel = sequelize.define("Article_Tag", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default ArticleTagModel;
