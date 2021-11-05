// pkgs:
import { Request, Response } from "express";

// utils:
import APIFeaturesBuilder from "../../../common/shred/api-features-builder.shred";
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
    const { slug } = req.params;

    try {
        const result = await Product.find({ slug });

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
