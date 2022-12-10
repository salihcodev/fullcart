// pkgs:
import { Request, Response } from "express";

// utils:
import userRoles from "../../../common/constants/user/user-roles.const";
import Category from "../../../models/category.model";

// >>> create
export const createCategory = async (
    req: Request,
    res: Response
): Promise<any> => {
    const { userRole } = req;

    // if (userRole === userRoles.SUPPLER) {
    //     return res
    //         .status(401)
    //         .json({ message: `You don't have the right access.` });
    // }

    const catToAdd = req.body;

    try {
        const newCategory = new Category({
            ...catToAdd,
        });

        await newCategory.save();
        res.status(201).json({
            status: `SUCCESS`,
            data: newCategory,
        });
    } catch (err) {
        res.status(409).json({
            message: `Something went wrong while creating new category with the name of ${catToAdd.name} ,Please try again later.`,
            error: err,
        });
    }
};
