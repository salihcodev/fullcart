// pkgs:
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import config from "config";

// utils:
import User from "../../models/user.model";
import { afterRegistrationMail } from "../../services/mail-sending.service";

// get token secret key:
const { token_gen_sec_key } = config.get("server");

// crete new user handler
export const signupHandler = async (
    req: Request,
    res: Response
): Promise<any> => {
    const {
        firstName,
        lastName,
        email,
        password: _password,
        confirmPassword,
    } = req.body;

    try {
        const existedUser = await User.findOne({ email });

        if (existedUser) {
            return res.status(400).json({
                message: `This user is already existed: ${email}`,
            });
        }

        if (_password !== confirmPassword) {
            return res.status(400).json({
                message: `Passwords not matched each other.`,
            });
        }

        const password = await bcrypt.hash(_password, 12);

        const createdUser = await User.create({
            email,
            password,
            name: `${firstName} ${lastName}`,
        });

        const userToken = jwt.sign(
            {
                email: createdUser,
                role: createdUser?.role,
            },
            token_gen_sec_key,
            {
                expiresIn: `1h`,
            }
        );

        // send a confirmation mail;
        await afterRegistrationMail(email, firstName);

        // finally response back with the processed data.
        res.status(201).json({
            data: {
                user: {
                    id: createdUser._id,
                    name: createdUser.name,
                    email: createdUser.email,
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
