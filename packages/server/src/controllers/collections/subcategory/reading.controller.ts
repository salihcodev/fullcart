// pkgs:
import { Request, Response } from "express";

// utils:
import APIFeaturesBuilder from "../../../common/shared/api-features-builder.shared";
import SubCategory from "../../../models/subcategory.model";

// >>> read all
export const getAllSubCategories = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
        const apiPipsResult = new APIFeaturesBuilder(
            SubCategory.find(),
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
            message: `Could not find any categories.`,
            error: err,
        });
    }
};
