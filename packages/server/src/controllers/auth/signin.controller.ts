// pkgs:
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import config from "config";

// utils:
import User from "../../models/user.model";

// get token secret key:
const { token_gen_sec_key } = config.get("server");

// logging existed user handler
export const signinHandler = async (
    req: Request,
    res: Response
): Promise<any> => {
    const { email, password } = req.body;

    try {
        const existedUser = await User.findOne({ email });
        if (!existedUser) {
            return res.status(404).json({
                message: `No user registered with this email: ${email}`,
            });
        }

        const { password: currUserPass }: any = existedUser;
        const isPasswordCorrect = await bcrypt.compare(password, currUserPass);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: `Invalid credentials` });
        }

        const userToken = jwt.sign(
            {
                email: existedUser,
                role: existedUser?.role,
                id: existedUser?._id,
            },
            token_gen_sec_key,
            {
                expiresIn: `1h`,
            }
        );

        res.status(200).json({
            data: {
                user: {
                    id: existedUser._id,
                    name: existedUser.name,
                    email: existedUser.email,
                },
                accessToken: userToken,
            },
        });
    } catch (err) {
        res.status(500).json({
            message: `Something went wrong`,
            error: err,
        });
    }
};
