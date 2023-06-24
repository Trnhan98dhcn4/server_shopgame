import { Request, Response, NextFunction } from "express";
import cartShopSchema from "../identity/cartshop.indentity";
import createHttpError from "http-errors";
import { ICardShopModel } from "../model/cartshop.model";

class CardShopController {
    getAllCartShop = async (
        _req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const diskGame = await cartShopSchema.find().exec();
            if (!diskGame) {
                throw createHttpError(404, "not diskGame the found");
            }
            res.status(200).json(diskGame);
        } catch (error) {
            next(error);
        }
    };
    postCartShop = async (req: Request, res: Response, next: NextFunction) => {
        const body: ICardShopModel = req.body;
        try {
            const cartShop = await cartShopSchema.create(body);
            if (!cartShop) {
                throw createHttpError(404, "Courses not found");
            }
            res.sendStatus(201).json(cartShop);
        } catch (error) {
            next(error);
        }
    };
}

export default new CardShopController();
