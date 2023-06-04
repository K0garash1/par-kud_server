import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DATABASE_URL, // URL de conexión proporcionada por Railway
  {
    dialect: "postgres",
    host: process.env.PGHOST, // Host de la base de datos
    port: process.env.PGPORT, // Puerto de la base de datos
    database: process.env.PGDATABASE, // Nombre de la base de datos
    username: process.env.PGUSER, // Nombre de usuario
    password: process.env.PGPASSWORD, // Contraseña
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
  }
);