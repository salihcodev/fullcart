// pkgs:
import { Request, Response } from "express";

// utils:
import userRoles from "../../../common/constants/user/user-roles.const";
import Product from "../../../models/product.model";

// >>> create
export const createNewProduct = async (
    req: Request,
    res: Response
): Promise<any> => {
    // const { userId, userRole } = req;

    // if (!userId) {
    //     return res.status(401).json({ message: `Unauthenticated!!` });
    // }

    // if (userRole && userRole === userRoles.CUSTOMER) {
    //     return res
    //         .status(401)
    //         .json({ message: `You don't have the right access.` });
    // }

    const prodToCreate = req.body;
    const newProd = new Product({
        ...prodToCreate,
        // suppler: userId
    });

    try {
        await newProd.save();

        res.status(201).json({
            statue: `SUCCESS`,
            data: newProd,
        });
    } catch (err) {
        res.status(409).json({
            message: `Something went wrong while creating new product, Please try again later.`,
            error: err,
        });
    }
};
