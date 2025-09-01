import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

const TagModel = sequelize.define("Tag", {
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
});

export default TagModel;
