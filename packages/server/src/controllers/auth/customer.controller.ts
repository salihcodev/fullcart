// pkgs:
import { Request, Response } from "express";
import AuthFeatures from "../../common/shared/auth-features.shared";

// utils:
import Customer from "../../models/customer.model";

export const getRegisteredUsers = async (
    req: Request,
    res: Response
): Promise<void> => {
    await new AuthFeatures(Customer, req, res).getAll();
};

export const signinHandler = async (
    req: Request,
    res: Response
): Promise<void> => {
    await new AuthFeatures(Customer, req, res).login();
};

export const signupHandler = async (
    req: Request,
    res: Response
): Promise<void> => {
    await new AuthFeatures(Customer, req, res).signup();
};

export const updateUserRole = async (
    req: Request,
    res: Response
): Promise<void> => {
    await new AuthFeatures(Customer, req, res).changeRole();
};

export const terminateUser = async (
    req: Request,
    res: Response
): Promise<void> => {
    await new AuthFeatures(Customer, req, res).terminate();
};
