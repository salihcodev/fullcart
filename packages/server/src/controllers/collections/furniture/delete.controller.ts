// pkgs:
import mongoose from "mongoose";
import { Request, Response } from "express";

// utils:
import FurnitureModel from "../../../models/furniture.model";
import userRoles from "../../../common/constants/user/user-roles.const";

// >>>> delete
export const deleteProduct = async (
    req: Request,
    res: Response
): Promise<any> => {
    const { userId, userRole } = req;
    const { id: _id } = req.params;

    if (!userId) {
        return res.status(401).json({ message: `Unauthenticated!!` });
    }

    if (
        (userRole && userRole === userRoles.REGULAR_USER) ||
        userRole === userRoles.MODERATOR
    ) {
        return res
            .status(401)
            .json({ message: `You don't have the right access.` });
    }

    try {
        if (!mongoose.Types.ObjectId.isValid(_id))
            res.status(404).json({
                message: `There is no door with provided ID: ${_id}`,
            });

        await FurnitureModel.findByIdAndRemove(_id);
        res.status(200).json({
            message: "door has been deleted successfully",
        });
    } catch (err) {
        res.status(400).json({
            message: "Failed to delete the door",
            error: err,
        });
    }
};
