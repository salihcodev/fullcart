// pkgs:
import { Request, Response } from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import config from "config";

// utils:
import parsingQueryProps from "../utils/parsing-query-props.util";
import { afterRegistrationMail } from "../../services/mail-sending.service";
const { token_gen_sec_key }:any = config.get("server");

export default class AuthFeatures {
    readonly request;
    readonly response;
    public modelQuery;

    constructor(modelQuery: any, request: Request, response: Response) {
        this.modelQuery = modelQuery;
        this.request = request;
        this.response = response;
    }

    async getAll(): Promise<void> {
        try {
            const result = await this.modelQuery.find().select("-password");
            this.response.status(200).json({
                statue: `SUCCESS`,
                results: result.length,
                data: result,
            });
        } catch (err) {
            this.response.status(500).json({
                message: `Something went wrong, Please try again later`,
                error: err,
            });
        }
    }

    async getById(): Promise<any> {
        const { id } = this.request.params;
        const { fields }: any = this.request.query;

        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return this.response.status(404).json({
                    message: `No user registered with provided the id.`,
                });
            }

            const result = await this.modelQuery
                .findById(id)
                .select(parsingQueryProps(fields));

            this.response.status(200).json({
                statue: `SUCCESS`,
                results: result.length,
                data: result,
            });
        } catch (err) {
            this.response.status(500).json({
                message: `Something went wrong, Please try again later`,
                error: err,
            });
        }
    }

    async login(): Promise<any> {
        const { email, password } = this.request.body;

        try {
            const existedUser = await this.modelQuery.findOne({ email });
            if (!existedUser) {
                return this.response.status(404).json({
                    message: `No user registered with this email: ${email}`,
                });
            }

            const { password: currUserPass }: any = existedUser;
            const isPasswordCorrect = await bcrypt.compare(
                password,
                currUserPass
            );

            if (!isPasswordCorrect) {
                return this.response
                    .status(400)
                    .json({ message: `Invalid credentials` });
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

            this.response.status(200).json({
                statue: `SUCCESS`,
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
            this.response.status(500).json({
                message: `Something went wrong`,
                error: err,
            });
        }
    }

    async signup(): Promise<any> {
        const {
            firstName,
            lastName,
            email,
            password: _password,
            confirmPassword,
        } = this.request.body;

        const restUserObjData: any = {};
        const ignoredFields = [
            "firstName",
            "lastName",
            "email",
            "password",
            "confirmPassword",
        ];
        for (const [key, val] of Object.entries(this.request.body)) {
            if (!ignoredFields.includes(key)) {
                restUserObjData[key] = val;
            }
        }

        console.log(...restUserObjData);

        try {
            const existedUser = await this.modelQuery.findOne({ email });

            if (existedUser) {
                return this.response.status(400).json({
                    message: `This user is already existed: ${email}`,
                });
            }

            if (_password !== confirmPassword) {
                return this.response.status(400).json({
                    message: `Passwords not matched each other.`,
                });
            }

            const password = await bcrypt.hash(_password, 12);

            const createdUser = await this.modelQuery.create({
                email,
                password,
                name: `${firstName} ${lastName}`,
                ...restUserObjData,
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
            // await afterRegistrationMail(email, firstName);

            // finally response back with the processed data.
            this.response.status(201).json({
                statue: `SUCCESS`,
                data: {
                    user: {
                        id: createdUser._id,
                        name: createdUser.name,
                        email: createdUser.email,
                        ...restUserObjData,
                    },
                    accessToken: userToken,
                },
            });
        } catch (err) {
            this.response.status(500).json({
                message: `Something went wrong`,
                error: err,
            });
            console.log(err);
        }
    }

    async terminate(): Promise<any> {
        const { id } = this.request.params;

        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return this.response.status(404).json({
                    message: `No user registered with provided the id.`,
                });
            }

            await this.modelQuery.findByIdAndRemove(id);

            this.response.status(200).json({
                statue: `SUCCESS`,
                message: `Deleted user successfully.`,
            });
        } catch (err) {
            this.response.status(500).json({
                message: `Failed to delete the user.`,
                error: err,
            });
        }
    }

    async changeRole(): Promise<any> {
        const { id } = this.request.params;
        const { role } = this.request.query;

        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return this.response.status(400).json({
                    message: `No user registered with provided the id.`,
                });
            }

            const userToUpdateRole = await this.modelQuery.findById(id);

            userToUpdateRole.role = role;
            await userToUpdateRole.save();

            this.response.status(200).json({
                statue: `SUCCESS`,
                message: `Updated the user role successfully.`,
                data: userToUpdateRole,
            });
        } catch (err) {
            this.response.status(500).json({
                message: `Failed to update the user role.`,
                error: err,
            });
        }
    }
}
