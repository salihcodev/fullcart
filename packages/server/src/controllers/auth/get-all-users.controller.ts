// pkgs:
import { Request, Response } from "express";

// utils:
import User from "../../models/user.model";

// get all users
export const getRegisteredUsers = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const allUsers = await User.find();
        res.status(200).json({ results: allUsers.length, data: allUsers });
    } catch (err) {
        res.status(500).json({
            message: `Something went wrong, Please try again later`,
            error: err,
        });
    }
};
