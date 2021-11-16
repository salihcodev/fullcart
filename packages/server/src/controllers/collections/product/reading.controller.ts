// pkgs:
import { Request, Response } from "express";

// utils:
import APIFeaturesBuilder from "../../../common/shared/api-features-builder.shared";
import Product from "../../../models/product.model";

// >>> read all
export const getAllProducts = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const apiPipsResult = new APIFeaturesBuilder(Product.find(), req.query)
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
        res.status(400).json({
            message: `Could not find any products.`,
            error: err,
        });
    }
};

// >>> get certain one:
// via slug::
export const getSingleProductBySlug = async (
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

// via id::
export const getSingleProductById = async (
    req: Request,
    res: Response
): Promise<any> => {
    const { id } = req.params;

    try {
        const result = await Product.findById({ id });

        res.status(200).json({
            statue: `SUCCESS`,
            data: {
                prod: result,
            },
        });
    } catch (err) {
        res.status(404).json({
            message: `Could not find product with name: ${id}`,
        });
    }
};
