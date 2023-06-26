import express from "express";
import usersController from "../controller/users.controller";

const router = express.Router();

//[POST]/user/register
router.post("/register", usersController.postRegister);
//[POST]/user/login
router.post("/login", usersController.postLogin);
//[GET]/user
router.get("/", usersController.getAllUsers);

export default router;
