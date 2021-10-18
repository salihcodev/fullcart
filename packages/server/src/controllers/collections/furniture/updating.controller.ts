// pkgs:
import mongoose from "mongoose";
import { Request, Response } from "express";

// utils:
import Furniture from "../../../models/furniture.model";
import userRoles from "../../../common/constants/user/user-roles.const";

// >>>> update
export const updateProduct = async (
    req: Request,
    res: Response
): Promise<any> => {
    const { userId, userRole } = req;

    if (!userId) {
        return res.status(401).json({
            statue: `FAILED`,
            message: `Unauthenticated!!`,
        });
    }

    if (userRole && userRole === userRoles.REGULAR_USER) {
        return res.status(401).json({
            statue: `FAILED`,

            message: `You don't have the right access.`,
        });
    }

    const { id: _id } = req.params;
    const prodToUpdate = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(_id))
            return res.status(404).json({
                statue: `FAILED`,
                message: `There's no product with ID: ${_id}`,
            });

        const updatedProd = await Furniture.findByIdAndUpdate(
            _id,
            { ...prodToUpdate, _id },
            { new: true } // to return a new version
        );

        res.json({
            statue: `SUCCESS`,
            data: {
                updatedProd,
            },
        });
    } catch (err) {
        res.status(400).json({
            statue: `FAILED`,
            message: "Failed to update the product",
            error: err,
        });
    }
};
