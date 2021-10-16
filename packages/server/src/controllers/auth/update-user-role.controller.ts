// pkgs:
import { Request, Response } from "express";
import mongoose from "mongoose";

// utils:
import User from "../../models/user.model";

export const updateUserRole = async (
    req: Request,
    res: Response
): Promise<any> => {
    const { id, role } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: `No user registered with provided the id.`,
            });
        }

        const userToUpdateRole = await User.findById(id);

        userToUpdateRole.role = role;
        await userToUpdateRole.save();

        res.status(200).json({
            message: `Updated the user role successfully.`,
            data: userToUpdateRole,
        });
    } catch (err) {
        res.status(500).json({
            message: `Failed to update the user role.`,
            error: err,
        });
    }
};
