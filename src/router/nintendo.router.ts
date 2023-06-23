import express from "express";
import nintendoController from "../controller/nintendo.controller";

const router = express.Router();

//[GET]/nintendo/search
router.get("/search", nintendoController.getSearchNintendo);
//[GET]/nintendo/:params
router.get("/:key", nintendoController.getDetailNintendo);
//[GET]/nintendo
router.get("/", nintendoController.getAllNintendo);

export default router;
