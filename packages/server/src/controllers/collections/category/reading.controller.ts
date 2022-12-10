// pkgs:
import { Request, Response } from "express";

// utils:
import APIFeaturesBuilder from "../../../common/shared/api-features-builder.shared";
import Category from "../../../models/category.model";
import SubCategory from "../../../models/subcategory.model";

// >>> read all
export const getAllCategoriesComputed = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
        const apiPipsResult = new APIFeaturesBuilder(Category.find(), req.query)
            .sorting()
            .paginating();

        const apiPipsResult2 = new APIFeaturesBuilder(
            SubCategory.find(),
            req.query
        )
            .sorting()
            .paginating();

        const categories = await apiPipsResult.modelQuery;
        const subCategories = await apiPipsResult2.modelQuery;

        // Assign collecting point.
        let main: Array<{ value: string; path: string; subCats?: string[] }> =
            [];

        categories.forEach(({ name: value, slug: path, _id }: any) => {
            let subCats: any[] = [];

            // Check if the subcategory is matchs main category.
            subCategories.forEach(
                ({ name: value, slug: path, mainCategory }: any) => {
                    if (mainCategory === _id.toString())
                        subCats.push({ value, path });
                }
            );
            main.push({ value, path, subCats });
        });

        res.json({
            statue: `SUCCESS`,
            data: main,
        });
    } catch (err) {
        res.status(400).json({
            message: `Could not find any categories.`,
            error: err,
        });
    }
};

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

export const getCategoryById = async (
    req: Request,
    res: Response
): Promise<any> => {
    const { id: _id } = req.params;
    try {
        const data = await Category.find({ _id });

        res.json({
            statue: `SUCCESS`,
            data,
        });
    } catch (err) {
        res.status(400).json({
            message: `Could not find any categories.`,
            error: err,
        });
    }
};
