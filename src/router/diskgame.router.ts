import express from "express";
import DiskGameController from "../controller/diskgame.controller";

const router = express.Router();

//[GET]/disk
router.get("/", DiskGameController.getAllDiskGame);
//[GET]/disk/:key
router.get("/:key", DiskGameController.getDetailDiskGame);

export default router;
