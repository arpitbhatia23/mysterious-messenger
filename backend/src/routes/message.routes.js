import { Router } from "express";
import { deletemessage, message } from "../controllers/message.controler.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router =Router()
router.route("/sendmessage/:reciverid").post(message)
router.route("/deletemesage/:messageid").delete(verifyJwt, deletemessage)
export default router;