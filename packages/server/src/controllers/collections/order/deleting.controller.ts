// pkgs:
import mongoose from "mongoose";
import { Request, Response } from "express";

// utils:
import userRoles from "../../../common/constants/user/user-roles.const";
import Order from "../../../models/order.model";

// >>> delete
export const deleteAnOrder = async (
    req: Request,
    res: Response
): Promise<any> => {
    const { userId, userRole } = req;
    const { id: _id } = req.params;

    if (!userId) {
        return res.status(401).json({ message: `Unauthenticated!!` });
    }

    if (
        (userRole && userRole === userRoles.CUSTOMER) ||
        userRole === userRoles.SUPPLER
    ) {
        return res
            .status(401)
            .json({ message: `You don't have the right access.` });
    }

    try {
        if (!mongoose.Types.ObjectId.isValid(_id))
            res.status(404).json({
                message: `There is no order with provided id: ${_id}`,
            });

        await Order.findByIdAndRemove(_id);
        res.status(200).json({
            statue: `SUCCESS`,
            message: "Order item has been deleted successfully",
        });
    } catch (err) {
        res.status(400).json({
            statue: `FAILED`,
            message: "Failed to delete the order",
            error: err,
        });
    }
};

export const dropOrderCollection = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
        Order.collection.drop();
        res.status(200).json({
            statue: `SUCCESS`,
            message: "The collection has been dropped successfully",
        });
    } catch (err) {
        res.status(400).json({
            statue: `FAILED`,
            message: "Failed to drop the collection",
        });
    }
};
