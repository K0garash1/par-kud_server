import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { User } from "./User.js";
import { Parking } from "./Parking.js";

export const Reservations = sequelize.define(
  "Reservations",
  {
    reservationId: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    status: {
      type: DataTypes.ENUM("Pendiente", "Confirmada", "Cancelada"),
      allowNull: false,
      defaultValue: "Pendiente",
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

// Define las relaciones de llaves foráneas
Reservations.belongsTo(User, { foreignKey: "identityCard" });
Reservations.belongsTo(Parking, { foreignKey: "parkingId" });
User.hasMany(Reservations, { foreignKey: "identityCard" });
Parking.hasMany(Reservations, { foreignKey: "parkingId" });
