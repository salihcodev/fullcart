// pkgs:
import { Request, Response } from "express";
import mongoose from "mongoose";

// utils:
import userRoles from "../../../common/constants/user/user-roles.const";
import CartItem from "../../../models/cart-item.model";

// >>> create
export const createCartItem = async (
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

    const prodToAddToCart = req.body;
    const { _id } = req.body; // prod id

    try {
        if (!mongoose.Types.ObjectId.isValid(_id))
            return res.status(404).json({
                statue: `FAILED`,
                message: `There's no product with ID: ${_id}`,
            });

        // Check if this product is existed in the cart already or not.
        // by checking on its ID and the user who added it ID
        const existedCartItem = await CartItem.findById(_id);

        // Total items --> no filters
        const _totalCollection = await CartItem.find();
        let totalCost = 0;
        let totalCount = 0;
        for (const i in _totalCollection) {
            totalCost +=
                _totalCollection[i].priceInDollar! * _totalCollection[i].count;
        }
        totalCount = _totalCollection.length;

        // If it true
        if (existedCartItem) {
            if (existedCartItem?.addedBy?.toString() === userId) {
                const updatedCartItem = await CartItem.findByIdAndUpdate(
                    _id,
                    {
                        ...prodToAddToCart,
                        count: existedCartItem.count + 1,
                        _id,
                    },
                    { new: true } // to return a new version
                );

                res.status(200).json({
                    statue: `SUCCESS`,
                    data: updatedCartItem,
                    count: totalCount,
                    cost: totalCost,
                });
            }
        } else {
            const newCartItem = new CartItem({
                ...prodToAddToCart,
                signature: _id,
                addedBy: userId,
            });

            await newCartItem.save();

            totalCount += newCartItem.count;
            totalCost += newCartItem.priceInDollar!;

            res.status(201).json({
                status: `SUCCESS`,
                count: totalCount,
                cost: totalCost,
                data: newCartItem,
            });
        }
    } catch (err) {
        res.status(409).json({
            message: `Something went wrong while creating new cart item, Please try again later.`,
            error: err,
        });
    }
};
