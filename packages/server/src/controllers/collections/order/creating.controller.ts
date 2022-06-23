// pkgs:
import { Request, Response } from "express";

// utils:
import userRoles from "../../../common/constants/user/user-roles.const";
import Customer from "../../../models/customer.model";
import Order from "../../../models/order.model";

// >>> create
export const createNewOrder = async (
    req: Request,
    res: Response
): Promise<any> => {
    const { userId: _id, userRole } = req;

    if (!_id) {
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
        orderedBy: _id,
    });

    try {
        await newOrder.save();

        // Send the order id to the orders list of the customer.
        const currentUser = await Customer.findById(_id);
        await Customer.findByIdAndUpdate(_id, {
            orders: [...currentUser.orders, newOrder._id],
        });

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
