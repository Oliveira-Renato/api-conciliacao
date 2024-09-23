import { Router } from "express";
import contasReceberController from "../controllers/contasReceberController";

const router = Router();

router.get("/contas-receber", contasReceberController.getContasReceber);

export default router;