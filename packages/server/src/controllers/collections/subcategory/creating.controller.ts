// pkgs:
import { Request, Response } from "express";

// utils:
import userRoles from "../../../common/constants/user/user-roles.const";
import SubCategory from "../../../models/subcategory.model";

// >>> create
export const createSubCategory = async (
    req: Request,
    res: Response
): Promise<any> => {
    const { userRole, userId } = req;

    if (userRole === userRoles.SUPPLER) {
        return res
            .status(401)
            .json({ message: `You don't have the right access.` });
    }

    const catToAdd = req.body;

    try {
        const newSubCategory = new SubCategory({
            ...catToAdd,
            // mainCategory: userId,
        });

        await newSubCategory.save();
        res.status(201).json({
            status: `SUCCESS`,
            data: newSubCategory,
        });
    } catch (err) {
        res.status(409).json({
            message: `Something went wrong while creating new category with the name of ${catToAdd.name} ,Please try again later.`,
            error: err,
        });
    }
};
