import express from "express";
import { getSecurityCode, resetPassword } from "../controller/forgot";

const router = express.Router()

router.post("/forgotpassword", getSecurityCode)
router.post("/reset-password", resetPassword)

export default router