// pkgs:
import { Request, Response } from "express";

// utils:
import APIFeaturesBuilder from "../../../common/shared/api-features-builder.shared";
import Category from "../../../models/category.model";

// >>> read all
export const getAllCategories = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
        const apiPipsResult = new APIFeaturesBuilder(Category.find(), req.query)
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
            message: `Could not find any categories.`,
            error: err,
        });
    }
};
