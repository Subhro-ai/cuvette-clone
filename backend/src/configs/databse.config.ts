import { connect, ConnectOptions } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const dbConnect = () => {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
        console.error("MONGO_URI is not defined in the .env file.");
        return;
    }

    connect(mongoUri, {} as ConnectOptions)
        .then(() => console.log("Connection successful"))
        .catch((error) => console.error("MongoDB connection error:", error));
};
