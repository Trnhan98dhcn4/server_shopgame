import usersIdentity from "../identity/users.identity";
import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import { IUsersModel } from "../model/users.model";
import bcrypt from "bcrypt";

class userController {
    getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
        await usersIdentity
            .find()
            .exec()
            .then((response) => {
                if (!response) {
                    throw createHttpError(404, "Not is Users");
                }
                res.status(200).json(response);
            })
            .catch((error) => next(error));
    };
    getDetailUser = async (req: Request, res: Response, next: NextFunction) => {
        const id = req.params.id;
        await usersIdentity
            .findById(id)
            .then((response) => {
                if (!response) {
                    throw createHttpError(404, "Not is Users");
                }
                res.status(200).json(response);
            })
            .catch((error) => next(error));
    };
    postLogin = async (req: Request, res: Response, next: NextFunction) => {
        const body: IUsersModel = req.body;
        const { user, password } = body;
        try {
            const userAdmin = await usersIdentity.findOne({ user }).lean();
            if (userAdmin) {
                if (userAdmin.password) {
                    const isPasswordValid = await bcrypt.compare(
                        password,
                        userAdmin.password
                    );
                    if (isPasswordValid) {
                        res.status(200).json(userAdmin);
                    } else {
                        throw createHttpError(401, "Invalid password");
                    }
                } else {
                    throw createHttpError(401, "Missing password");
                }
            } else {
                throw createHttpError(404, "User not found");
            }
        } catch (error) {
            next(error);
        }
    };
    postRegister = async (req: Request, res: Response, next: NextFunction) => {
        const body: IUsersModel = req.body;
        const { user, password, name, avatar } = body;
        try {
            const existingUser = await usersIdentity
                .findOne({ user, name, avatar })
                .lean();
            if (existingUser) {
                throw createHttpError(409, "User already exists");
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await usersIdentity.create({
                user,
                name,
                avatar: "data:image/png;base64,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",
                password: hashedPassword,
            });
            res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    };
}

export default new userController();
