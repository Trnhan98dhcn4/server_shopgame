import express from "express";
import cartShopController from "../controller/cartshop.controller";

const router = express.Router();

//[POST]/cart
router.post("/", cartShopController.postCartShop);
//[GET]/cart
router.get("/", cartShopController.getAllCartShop);
//[PUT]/cart/:key
router.put("/:id", cartShopController.putCartShop);
//[DELETE]/cart/:key
router.delete("/:key", cartShopController.deleteCardShop);
//[DELETE]/cart/all
router.delete("/", cartShopController.deleteAllCartShop);

export default router;
