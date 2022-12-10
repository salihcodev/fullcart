// pkgs:
import { Request, Response } from "express";

// utils:
import { contactUsMail } from "../../services/mail-sending.service";

export const handelContactUsForm = async (
    req: Request,
    res: Response
): Promise<any> => {
    try {
        const data = req.body;

        await contactUsMail(data);
        res.status(200).json({
            status: "ok",
            message: `Thanks, We received your message.`,
        });
    } catch (err) {
        res.status(500).json({
            status: "failed",
            message: `Could not to send your email, Please retry again.`,
            error: err,
        });
    }
};
