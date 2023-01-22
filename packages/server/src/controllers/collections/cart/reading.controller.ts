// pkgs:
import { Request, Response } from "express";

// utils:
import APIFeaturesBuilder from "../../../common/shared/api-features-builder.shared";
import CartItem from "../../../models/cart-item.model";

// >>> read all
export const getAllCartItem = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { userId } = req;

    try {
        const apiPipsResult = new APIFeaturesBuilder(
            CartItem.find({ addedBy: userId }),
            req.query
        )
            .sorting()
            .paginating();

        const data = await apiPipsResult.modelQuery;

        // Total items --> no filters
        const _totalCollection = await CartItem.find();
        let totalCost = 0;
        for (const i in _totalCollection) {
            totalCost +=
                _totalCollection[i].priceInDollar! * _totalCollection[i].count;
        }
        res.json({
            statue: `SUCCESS`,
            results: data.length,
            count: _totalCollection.length,
            cost: totalCost,
            data,
        });
    } catch (err) {
        res.status(400).json({
            message: `Could not find any products.`,
            error: err,
        });
    }
};

export const checkIfItemExisted = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        let isItemAddedToTheCart = null;
        const item = await CartItem.findById(req.params.id);

        if (item === null) {
            isItemAddedToTheCart = false;
        } else {
            isItemAddedToTheCart = true;
        }

        res.json({
            statue: `SUCCESS`,
            message: `Successfully found this item in the user cart.`,
            isItemAddedToTheCart,
        });
    } catch (err) {
        res.status(400).json({
            statue: `FAILURE`,
            message: `Couldn't found this item in the user cart.`,
            error: err,
        });
    }
};
