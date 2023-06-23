import { Request, Response, NextFunction } from "express";
import diskGameIdentity from "../identity/diskgame.identity";
import createHttpError from "http-errors";

class DiskGameController {
    getAllDiskGame = async (
        _req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const diskGame = await diskGameIdentity.find().exec();
            if (!diskGame) {
                throw createHttpError(404, "not diskGame the found");
            }
            res.status(200).json(diskGame);
        } catch (error) {
            next(error);
        }
    };
    getDetailDiskGame = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const key = req.params.key;
        try {
            const diskGame = await diskGameIdentity.findById(key);
            if (!diskGame) {
                throw createHttpError(404, "not diskGame");
            }
            res.status(200).json(diskGame);
        } catch (error) {
            next(error);
        }
    };
    getSearchDiskGame = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const searchQuery = req.query.q;
        await diskGameIdentity
            .find({ title: { $regex: searchQuery, $options: "i" } })
            .then((response) => res.status(200).json(response))
            .catch((error) => {
                next(error);
            });
    };
}

export default new DiskGameController();
