import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import routes from "./routes";

dotenv.config();
const app = express();

app.use(bodyParser.json());

//importa rotas
app.use("/api", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})