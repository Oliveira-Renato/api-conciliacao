import { Router } from "express";
import pedidosController from "../controllers/pedidosYampiController";

const router = Router();

router.get("/listar", pedidosController.getPedidos);

export default router;