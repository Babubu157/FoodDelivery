import { Router } from "express";
import { signup } from "../controller/user/signup";
import { login } from "../controller/user/login";
import { sendOtp, updatePass, verifyOtp } from "../controller/user/forgot";
import { verify } from "../controller/user/verify";

export const UserRouter = Router();

UserRouter.post("/signup", signup);
UserRouter.post("/login", login);
UserRouter.post("/verify", verify);

UserRouter.post("/sendOtp", sendOtp);
UserRouter.post("/verifyOtp", verifyOtp);
UserRouter.put("/updatePass", updatePass);
