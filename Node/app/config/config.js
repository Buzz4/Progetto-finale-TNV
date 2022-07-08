import { Sequelize } from "sequelize";

const db = new Sequelize({
  database: "Progetto_finale",
  username: "root",
  password: "",
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

export default db;
