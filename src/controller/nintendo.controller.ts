import { Request, Response, NextFunction } from "express";
import nintendoIdentity from "../identity/nintendo.identity";
import createHttpError from "http-errors";

class NintendoController {
    getAllNintendo = async (
        _req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const nintendo = await nintendoIdentity.find().exec();
            if (!nintendo) {
                throw createHttpError(404, "Nintendo not found");
            }
            res.status(200).json(nintendo);
        } catch (error) {
            next(error);
        }
    };
    getDetailNintendo = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const key = req.params.key;
        try {
            const nintendo = await nintendoIdentity.findById(key);
            if (!nintendo) {
                throw createHttpError(404, "Nintendo not found");
            }
            res.status(200).json(nintendo);
        } catch (error) {
            next(error);
        }
    };
    getSearchNintendo = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const searchQuery = req.query.q;
        await nintendoIdentity
            .find({ title: { $regex: searchQuery, $options: "i" } })
            .then((response) => res.status(200).json(response))
            .catch((error) => {
                next(error);
            });
    };
}

export default new NintendoController();
