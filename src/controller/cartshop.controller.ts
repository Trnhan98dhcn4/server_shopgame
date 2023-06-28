import { Request, Response, NextFunction } from "express";
import cartShopSchema from "../identity/cartshop.indentity";
import createHttpError from "http-errors";
import { ICardShopModel } from "../model/cartshop.model";
import mongoose from "mongoose";

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
    putCartShop = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id;
        const body: ICardShopModel = req.body;
        const { img1, price, title, SL } = body;
        await cartShopSchema
            .findById(id)
            .then((response) => {
                if (!mongoose.isValidObjectId(id)) {
                    throw createHttpError(400, "Invalid note id");
                }
                if (response) {
                    response.img1 = img1;
                    response.price = price;
                    response.title = title;
                    response.SL = SL;
                    response.save();
                    res.sendStatus(200).json(response);
                } else {
                    throw createHttpError(404, "Cart shop not found");
                }
            })
            .catch((error) => {
                next(error);
            });
    };
    deleteCardShop = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const key = req.params.key;
        await cartShopSchema
            .findById(key)
            .then((response) => {
                if (!mongoose.isValidObjectId(key)) {
                    throw createHttpError(400, "Invalid note id");
                }
                if (response) {
                    response.deleteOne();
                    res.sendStatus(200).json(response);
                } else {
                    throw createHttpError(404, "Student not found");
                }
            })
            .catch((error) => next(error));
    };
    deleteAllCartShop = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const result = await cartShopSchema.deleteMany({});
            res.status(200).json({
                message: `${result.deletedCount} documents deleted`,
            });
        } catch (error) {
            next(error);
        }
    };
}

export default new CardShopController();
