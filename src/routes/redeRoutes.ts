import { Router } from "express";
import redeController from "../controllers/redeController";

const router = Router();

router.get("/transacao", redeController.getRedeTransactions);

export default router;  
