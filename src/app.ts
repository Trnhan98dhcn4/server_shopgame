import express from "express";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";

import router from "./router/app.router";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

router(app);

export default app;
