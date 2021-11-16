// pkgs:
import { Request, Response } from "express";
import AuthFeatures from "../../common/shared/auth-features.shared";

// utils:
import Suppler from "../../models/suppler.model";

export const getRegisteredUsers = async (
    req: Request,
    res: Response
): Promise<void> => {
    await new AuthFeatures(Suppler, req, res).getAll();
};

export const getUserById = async (
    req: Request,
    res: Response
): Promise<void> => {
    await new AuthFeatures(Suppler, req, res).getById();
};

export const signinHandler = async (
    req: Request,
    res: Response
): Promise<void> => {
    await new AuthFeatures(Suppler, req, res).login();
};

export const signupHandler = async (
    req: Request,
    res: Response
): Promise<void> => {
    await new AuthFeatures(Suppler, req, res).signup();
};

export const updateUserRole = async (
    req: Request,
    res: Response
): Promise<void> => {
    await new AuthFeatures(Suppler, req, res).changeRole();
};

export const terminateUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    await new AuthFeatures(Suppler, req, res).terminate();
};
