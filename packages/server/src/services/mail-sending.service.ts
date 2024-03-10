// pkgs:
import config from "config";
import nodemailer from "nodemailer";

// get local vars:
const email_user: any =
    process.env.email_user || config.get("services.email_user");
const email_pass: any =
    process.env.email_pass || config.get("services.email_pass");

export const afterRegistrationMail = async (
    toMail: string,
    firstName: string
): Promise<any> => {
    const transporter = nodemailer.createTransport({
        service: `gmail`,
        auth: {
            user: email_user,
            pass: email_pass,
        },
        tls: {
            rejectUnauthorized: false,
        },
        secure: false,
    });

    try {
        await transporter.sendMail({
            from: email_user,
            to: toMail,
            subject: `Hello ${firstName}, Your always welcomed in our platform`,
            html: `<p>Welcome to our prods service we provide... </p>`,
        });
    } catch (err) {
        return err;
    }
};

export const contactUsMail = async (data: any): Promise<any> => {
    const { name, fromMail, message } = data;

    const transporter = nodemailer.createTransport({
        service: `gmail`,
        auth: {
            user: email_user,
            pass: email_pass,
        },
        tls: {
            rejectUnauthorized: false,
        },
        secure: false,
    });

    try {
        await transporter.sendMail({
            from: fromMail,
            to: email_user,
            subject: `test, ${name}`,
            html: `<h1>Message</h1><br><p>${message}</p>`,
        });
    } catch (err) {
        console.log(err);

        return err;
    }
};
