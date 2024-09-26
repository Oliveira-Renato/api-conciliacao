import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import contasReceberRoutes from "./routes/contasReceberRoutes";
import redeRoutes from "./routes/redeRoutes";

dotenv.config();
const app = express();

app.use(bodyParser.json());

//importa rotas
app.use("/api/contas", contasReceberRoutes);
app.use("/api/rede", redeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})