import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";
import UserModel from "./user.model.js";

const ProfileModel = sequelize.define("Profile", {
  first_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  biography: { type: DataTypes.TEXT },
  avatar_url: { type: DataTypes.STRING(255) },
  birth_date: { type: DataTypes.DATE },
});

export default ProfileModel;

//Relaciones
ProfileModel.belongsTo(UserModel, { foreignKey: "user_id", as: "user" });

UserModel.hasOne(ProfileModel, { foreignKey: "user_id", as: "profile" });
