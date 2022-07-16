// pkgs:
import mongoose from "mongoose";
import { Request, Response } from "express";

// utils:
import userRoles from "../../../common/constants/user/user-roles.const";
import Category from "../../../models/category.model";

// >>> delete
export const deleteCategory = async (
    req: Request,
    res: Response
): Promise<any> => {
    const { userRole } = req;
    const { id: _id } = req.params;

    try {
        if (userRole === userRoles.SUPPLER) {
            return res
                .status(401)
                .json({ message: `You don't have the right access.` });
        }
        if (!mongoose.Types.ObjectId.isValid(_id))
            res.status(404).json({
                message: `There is no category with provided id: ${_id}`,
            });

        await Category.findByIdAndRemove(_id);
        res.status(200).json({
            statue: `SUCCESS`,
            message: "Category has been deleted successfully",
        });
    } catch (err) {
        res.status(400).json({
            statue: `FAILED`,
            message: "Failed to delete the category",
            data: _id,
            error: err,
        });
    }
};
