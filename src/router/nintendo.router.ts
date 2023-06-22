import express from "express";
import nintendoController from "../controller/nintendo.controller";

const router = express.Router();

//[GET]/nintendo
router.get("/", nintendoController.getAllNintendo);
//[GET]/nintendo/:params
router.get("/:key", nintendoController.getDetailNintendo);

export default router;
