// pkgs:
import { Request, Response } from "express";

// utils:
import FurnitureModel from "../../../models/furniture.model";

// >>>> read all
export const getAllProducts = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const prods = await FurnitureModel.find();

        res.json({
            statue: `SUCCESS`,
            results: prods.length,
            data: {
                prods,
            },
        });
    } catch (err) {
        res.status(400).json({
            message: `Could not find any doors.`,
            error: err,
        });
    }
};

// >>>> get certain one:
export const getSingleProduct = async (
    req: Request,
    res: Response
): Promise<any> => {
    const { id: _id } = req.params;

    try {
        // should give it valid `id`, otherwise gonna through an error
        const sdoor = await FurnitureModel.findById(_id);

        res.status(200).json(sdoor);
    } catch (err) {
        res.status(404).json({
            message: `Could not find door with ID: ${_id}`,
        });
    }
};
