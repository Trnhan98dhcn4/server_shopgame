import express from "express";
import cartShopController from "../controller/cartshop.controller";

const router = express.Router();

//[POST]/cart
router.post("/", cartShopController.postCartShop);
//[GET]/cart
router.get("/", cartShopController.getAllCartShop);

export default router;
