import express from "express";
import dotenv from "dotenv";
// import bodyParser from "body-parser";
import contasReceberRoutes from "./routes/contasReceberRoutes";
import redeRoutes from "./routes/redeRoutes";
import pedidosYampiRoutes from "./routes/pedidosYampiRoutes";

dotenv.config();
const app = express();

app.use(express.json());

//importa rotas
app.use("/api/contas", contasReceberRoutes);
app.use("/api/rede", redeRoutes);
app.use("/api/pedidos", pedidosYampiRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
})