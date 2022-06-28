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
    try {
        const apiPipsResult = new APIFeaturesBuilder(Order.find(), req.query)
            .filtering()
            .sorting()
            .selectingFields()
            .paginating();

        const prods = await apiPipsResult.modelQuery;
        res.json({
            statue: `SUCCESS`,
            results: prods.length,
            data: {
                orders: prods,
            },
        });
    } catch (err) {
        res.status(400).json({
            message: `Could not find any products.`,
            error: err,
        });
    }
};

// >>> get certain one:
// via slug::
export const getSingleOrderBySlug = async (
    req: Request,
    res: Response
): Promise<any> => {
    const { slug } = req.params;

    try {
        const result = await Order.find({ slug });

        res.status(200).json({
            statue: `SUCCESS`,
            data: {
                prod: result[0],
            },
        });
    } catch (err) {
        res.status(404).json({
            message: `Could not find product with name: ${slug}`,
        });
    }
};

// via id::
export const getSingleOrderById = async (
    req: Request,
    res: Response
): Promise<any> => {
    const { id } = req.params;

    try {
        const result = await Order.findById({ id });

        res.status(200).json({
            statue: `SUCCESS`,
            data: {
                prod: result,
            },
        });
    } catch (err) {
        res.status(404).json({
            message: `Could not find product with id: ${id}`,
        });
    }
};
