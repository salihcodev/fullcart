// pkgs:
import { Request, Response } from "express";
import Newsletter from "../../models/news-letter.model";

const newsLetterSubscription = async (
    req: Request,
    res: Response
): Promise<any> => {
    const { userEmail } = req.params;

    try {
        if (false) {
            return res.status(401).json({
                status: "failed",
                message: `The given data: ${userEmail} not a valid email.`,
            });
        }
        await Newsletter.create({
            userEmail,
        });

        return res.status(201).json({
            status: "ok",
            message: `Thanks, We've just added you at our mailing list.`,
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: `An error occurred while adding ${userEmail} to the newsletter/mailing list.`,
            error: err,
        });
    }
};

export default newsLetterSubscription;
