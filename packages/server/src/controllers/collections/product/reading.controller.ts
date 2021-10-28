// pkgs:
import { Request, Response } from "express";

// utils:
import APIFeaturesBuilder from "../../../common/helpers/api-features-builder.helper";
import Product from "../../../models/product.model";

// >>> read all
export const getAllProducts = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const apiPipsResult = new APIFeaturesBuilder(req.query, Product.find())
            .filtering()
            .sorting()
            .selectingFields()
            .paginating();

        // awaiting for the final result, then response back with it.
        const prods = await apiPipsResult.modelQuery;
        res.json({
            statue: `SUCCESS`,
            results: prods.length,
            data: {
                prods,
            },
        });
    } catch (err) {
        console.log(err);

        res.status(400).json({
            message: `Could not find any products.`,
            error: err,
        });
    }
};

// >>> get certain one:
export const getSingleProduct = async (
    req: Request,
    res: Response
): Promise<any> => {
    const { id: _id } = req.params;

    try {
        // should give it valid `id`, otherwise gonna through an error
        const prod = await Product.findById(_id);

        res.status(200).json({
            statue: `SUCCESS`,
            data: {
                prod,
            },
        });
    } catch (err) {
        res.status(404).json({
            message: `Could not find product with ID: ${_id}`,
        });
    }
};
