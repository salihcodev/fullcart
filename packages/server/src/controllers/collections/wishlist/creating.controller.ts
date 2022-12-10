// pkgs:
import { Request, Response } from "express";
import mongoose from "mongoose";

// utils:
import userRoles from "../../../common/constants/user/user-roles.const";
import WishlistItem from "../../../models/wishlist-item.model";

// >>> create
export const createNewWishlistItem = async (
    req: Request,
    res: Response
): Promise<any> => {
    const { userId, userRole } = req;
    const { _id } = req.body;
    const prodToAddToWishlist = req.body;

    if (!userId) {
        return res.status(401).json({ message: `Unauthenticated!!` });
    }

    if (userRole && userRole === userRoles.CUSTOMER) {
        return res
            .status(401)
            .json({ message: `You don't have the right access.` });
    }

    try {
        if (!mongoose.Types.ObjectId.isValid(_id))
            return res.status(404).json({
                statue: `FAILED`,
                message: `There's no items in wishlist with ID: ${_id}`,
            });

        // Check if this product is existed in the cart already or not.
        // by checking on its ID and the user who added it ID
        const existedCartItem = await WishlistItem.findById(_id);

        // If it true
        if (existedCartItem) {
            if (existedCartItem?.addedBy?.toString() === userId) {
                const updatedCartItem = await WishlistItem.findByIdAndUpdate(
                    _id,
                    { ...prodToAddToWishlist, _id },
                    { new: true } // to return a new version
                );

                res.status(200).json({
                    statue: `SUCCESS`,
                    data: updatedCartItem,
                });
            }
        } else {
            const newWishlistItem = new WishlistItem({
                ...prodToAddToWishlist,
                addedBy: userId,
            });

            await newWishlistItem.save();
            res.status(201).json({
                statue: `SUCCESS`,
                data: newWishlistItem,
            });
        }
    } catch (err) {
        res.status(409).json({
            message: `Something went wrong while creating new wishlist item, Please try again later.`,
            error: err,
        });
    }
};
