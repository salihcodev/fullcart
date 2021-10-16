// pkgs:
import mongoose from "mongoose";
import { Request, Response } from "express";

// utils:
import FurnitureModel from "../../../models/furniture.model";
import userRoles from "../../../common/constants/user/user-roles.const";

// >>>> update
export const updateProduct = async (
    req: Request,
    res: Response
): Promise<any> => {
    const { userId, userRole } = req;

    if (!userId) {
        return res.status(401).json({ message: `Unauthenticated!!` });
    }

    if (userRole && userRole === userRoles.REGULAR_USER) {
        return res
            .status(401)
            .json({ message: `You don't have the right access.` });
    }

    const { id: _id } = req.params;
    const doorToUpdate = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(_id))
            return res.status(404).json({
                message: `There's no door with ID: ${_id}`,
            });

        const updateddoor = await FurnitureModel.findByIdAndUpdate(
            _id,
            { ...doorToUpdate, _id },
            { new: true } // to return a new version
        );

        res.json(updateddoor);
    } catch (err) {
        res.status(400).json({
            message: "Failed to update the door",
            error: err,
        });
    }
};
