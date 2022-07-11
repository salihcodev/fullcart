// pkgs:
import { Request, Response } from "express";

// utils:
import userRoles from "../../../common/constants/user/user-roles.const";
import Order from "../../../models/order.model";

// >>> create
export const createNewOrder = async (
    req: Request,
    res: Response
): Promise<any> => {
    const { userId, userRole } = req;

    if (!userId) {
        return res.status(401).json({ message: `Unauthenticated!!` });
    }

    if (userRole && userRole === userRoles.CUSTOMER) {
        return res
            .status(401)
            .json({ message: `You don't have the right access.` });
    }

    // Create an order with the customer ID
    const prodToOrder = req.body;
    const newOrder = new Order({
        ...prodToOrder,
        orderedBy: userId,
    });

    try {
        await newOrder.save();
        res.status(201).json({
            statue: `SUCCESS`,
            data: newOrder,
        });
    } catch (err) {
        res.status(409).json({
            message: `Something went wrong while creating new order, Please try again later.`,
            error: err,
        });
    }
};
