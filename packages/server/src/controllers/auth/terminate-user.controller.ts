// pkgs:
import { Request, Response } from "express";
import mongoose from "mongoose";

// utils:
import User from "../../models/user.model";

export const terminateUser = async (
    req: Request,
    res: Response
): Promise<any> => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({
                message: `No user registered with provided the id.`,
            });
        }

        await User.findByIdAndRemove(id);

        res.status(200).json({ message: `Deleted user successfully.` });
    } catch (err) {
        res.status(500).json({
            message: `Failed to delete the user.`,
            error: err,
        });
    }
};
