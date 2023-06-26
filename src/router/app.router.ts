import createHttpError, { isHttpError } from "http-errors";
import { Request, Response, NextFunction } from "express";
import nintendoRouter from "./nintendo.router";
import diskGameRouter from "./diskgame.router";
import cartShopRouter from "./cartshop.router";
import usersRouter from "./users.router";

const router = (app: any) => {
    app.use("/nintendo", nintendoRouter);
    app.use("/disk", diskGameRouter);
    app.use("/cart", cartShopRouter);
    app.use("/user", usersRouter);

    app.use((req: Request, res: Response, next: NextFunction) => {
        next(createHttpError(404, "Endpoint not found"));
    });
    app.use(
        (error: string, req: Request, res: Response, next: NextFunction) => {
            console.error(error);
            let errorMessage = "An unknown error occurred";
            let statusCode = 500;
            if (isHttpError(error)) {
                statusCode = error.status;
                errorMessage = error.message;
            }
            res.status(statusCode).json({ error: errorMessage });
        }
    );
};

export default router;
