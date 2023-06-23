import express from "express";
import DiskGameController from "../controller/diskgame.controller";

const router = express.Router();

//[GET]/disk/search
router.get("/search", DiskGameController.getSearchDiskGame);
//[GET]/disk/:key
router.get("/:key", DiskGameController.getDetailDiskGame);
//[GET]/disk
router.get("/", DiskGameController.getAllDiskGame);

export default router;
