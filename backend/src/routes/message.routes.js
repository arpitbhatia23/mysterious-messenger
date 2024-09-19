import { Router } from "express";
import { deleteAllMessage, deletemessage, message } from "../controllers/message.controler.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router =Router()
router.route("/sendmessage").post(message)
router.route("/deletemesage").delete(verifyJwt, deletemessage)
router.report("/deleteallmessage").delete(verifyJwt,deleteAllMessage)
export default router;