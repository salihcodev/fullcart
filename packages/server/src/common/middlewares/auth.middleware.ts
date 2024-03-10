// import pks:
import jwt from "jsonwebtoken";
import config from "config";
import { NextFunction, Request, Response } from "express";

// get token secret key:
const token_gen_sec_key: any =
    process.env.token_gen_sec_key || config.get("server.token_gen_sec_key");

// auth middleware controller:
const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    try {
        // get the token from coming req:
        const token = req.headers.authorization?.split(" ")[1];

        // verifying the coming token & store decoded token data
        const { id }: any = jwt.verify(token!, token_gen_sec_key);

        // set user id value from verified custom token
        req.userId = id;

        next();
    } catch (err) {
        console.log({
            message: `Failed to verify the coming user's token`,
            error: err,
        });
    }
};

export default authMiddleware;
