process.env.NODE_ENV = "development";

// pks:
import config from "config";
import mongoose from "mongoose";

// utils:

// *******
// get the app which's pre-configured to be ready to run.
import { app } from "./app";
//
//

// >>> env vars configuration
const db_connection_uri: any = config.get("server.db_connection_uri");
const port: any = process.env.PORT || config.get("server.port");

// >>> CONNECTING TO THE DATABASE:
const connectWithDB = async () => {
    try {
        await mongoose.connect(db_connection_uri, {
            dbName: "fullcart",
        });

        // >>> listen to the app
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
