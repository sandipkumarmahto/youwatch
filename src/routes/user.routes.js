import { Router } from "express";
import { registerUser } from "../controller/user.controller.js";

const router =Router()

router.route("/register").post(registerUser.js)
router.route("/register").post(registerUser.js)


export default router