// pkgs:
import { Request, Response } from "express";

// utils:
import FurnitureModel from "../../../models/furniture.model";
import userRoles from "../../../common/constants/user/user-roles.const";

// >>>> create
export const createNewProduct = async (
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

    const doorToCreate = req.body;
    const newdoor = new FurnitureModel({
        ...doorToCreate,
    });

    try {
        await newdoor.save();

        res.status(201).json(newdoor);
    } catch (err) {
        res.status(409).json({
            message: `Something went wrong while creating new door, Please try again later.`,
            error: err,
        });
    }
};
