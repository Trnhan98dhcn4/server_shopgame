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
        const { user, password } = body;
        try {
            const existingUser = await usersIdentity.findOne({ user }).lean();
            if (existingUser) {
                throw createHttpError(409, "User already exists");
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await usersIdentity.create({
                user,
                password: hashedPassword,
            });
            res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    };
}

export default new userController();
