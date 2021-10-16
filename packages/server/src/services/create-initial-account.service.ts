// pkgs:
import bcrypt from "bcryptjs";
import User from "../models/user.model";

const createInitialDashboardAccount = async (
    companyMail: string
): Promise<void | { message: string; error: unknown }> => {
    try {
        await User.create({
            email: companyMail,
            password: await bcrypt.hash(`admin`, 12),
            name: `admin`,
            role: `MANAGER`,
        });
    } catch (err) {
        return {
            message: `Can not to create initial dashboard account`,
            error: err,
        };
    }
};

export default createInitialDashboardAccount;
