const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Course extends Model {}

Course.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    creditHours: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    availableSeats: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  { sequelize, modelName: "courses" }
);

module.exports = Course;
