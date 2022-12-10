// pkgs:
import { Request, Response } from "express";

// utils:
import APIFeaturesBuilder from "../../../common/shared/api-features-builder.shared";
import Order from "../../../models/order.model";

// >>> read all
export const getAllOrders = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { userId } = req;
    try {
        const apiPipsResult = new APIFeaturesBuilder(
            Order.find({ orderedBy: userId }),
            req.query
        )
            .sorting()
            .paginating();

        const data = await apiPipsResult.modelQuery;
        res.json({
            statue: `SUCCESS`,
            results: data.length,
            data,
        });
    } catch (err) {
        res.status(400).json({
            message: `Could not find any orders.`,
            error: err,
        });
    }
};
