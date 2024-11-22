require("dotenv").config();
const express = require("express");
const routes = require("./routers/router");
const { sequelize } = require("./models/admin");

const app = express();
app.use(express.json());

app.use("/api", routes);

sequelize
  .authenticate()
  .then(async () => {
    console.log("Conexão com o banco de dados com êxito!");
    await sequelize.sync({});
  })
  .catch((err) => {
    console.error("Erro ao conectar com o banco: ", err);
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("---------------------------");
  console.log(`Running on http://${PORT}`);
  console.log("---------------------------");
});