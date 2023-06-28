import express from "express";
import usersController from "../controller/users.controller";

const router = express.Router();

//[POST]/user
router.post("/:id", usersController.postUserAccount);
//[POST]/user/register
router.post("/register", usersController.postRegister);
//[POST]/user/login
router.post("/login", usersController.postLogin);
//[GET]/user/:id
router.get("/:id", usersController.getDetailUser);
//[GET]/user
router.get("/", usersController.getAllUsers);
//[PUT]/user/:id
router.put("/:id", usersController.putUserAccount);

export default router;
