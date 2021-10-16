// pks:
import cors from "cors";
import morgan from "morgan";
import express, { Express, Request, Response } from "express";

// utils:
import furnitureRouter from "./routes/furniture.router";
import userRouter from "./routes/user.router";
import contactUs from "./routes/contact-us.router";

// *******
// >>>> INITIALIZING EXPRESS APP:
export const app: Express = express();
const API_VERSION = `/api/v1`;

// *******
// >>>> APPLY THE MIDDLEWARES:
// use cors
app.use(cors());
// >>>> parsing the body

app.use(express.json());
app.use(express.json());

// HTTPs logger:
app.use(morgan("tiny"));

// *******
// >>>> SETUP ROUTES:
// initial routes, check the server is running::
app.get(API_VERSION, (req: Request, res: Response): void => {
    res.status(200).json({
        status: `SUCCESS`,
        message: `Ok! server is working well.`,
        api_version: API_VERSION,
    });
});

// >>>> use implemented routers:
app.use(`${API_VERSION}/categories/furniture`, furnitureRouter);
app.use(`${API_VERSION}/auth`, userRouter);
app.use(`${API_VERSION}/services`, contactUs);

// *******
//
