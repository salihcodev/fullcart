// pkgs:
import { Request, Response } from "express";

// utils:
import APIFeaturesBuilder from "../../../common/shared/api-features-builder.shared";
import WishlistItem from "../../../models/wishlist-item.model";

// >>> read all
export const getAllWishlistItems = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { userId } = req;
    try {
        const apiPipsResult = new APIFeaturesBuilder(
            WishlistItem.find({ addedBy: userId }),
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
            message: `Could not find any products.`,
            error: err,
        });
    }
};
