// pks:
import config from "config";
import mongoose from "mongoose";

// utils:
import createInitialDashboardAccount from "./services/create-initial-account.service";
import User from "./models/user.model";

// *******
// get the app which's pre-configured to be ready to run.
import { app } from "./app";
//
//

// >>>> env vars configuration
const { db_connection_uri, port: _port } = config.get("server");
const port = process.env.PORT || _port;

// >>>> CONNECTING TO THE DATABASE:
const connectWithDB = async () => {
    try {
        await mongoose.connect(db_connection_uri, {
            dbName: "full-cart",
        });

        // >>>> create initial dashboard account:
        if ((await User.countDocuments()) === 0) {
            await createInitialDashboardAccount(`companyDomain@mail.com`);
            console.log(`Created initial dashboard account succeeded.`);
        }

        // >>>> listen to the app
        app.listen(port, () => {
            console.log(`Successfully connected to the db.`);
            console.log(`App running on http://localhost:${port}`);
        });
    } catch (err) {
        console.error(err);
    }
};

// connection to the db elegantly:
(async (connectionTries = 5) => {
    while (connectionTries) {
        try {
            await connectWithDB();
            break;
        } catch (error) {
            console.error(error);
            connectionTries -= 1;

            // wait 5sec. until firing another new DB connecting try.
            await new Promise((res) => setTimeout(res, 5000));
        }
    }
})();

// *******
//
