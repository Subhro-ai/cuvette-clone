import { connect, ConnectOptions } from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
export const dbConnect = () => {
    connect(process.env.MONGO_URI!, {

    } as ConnectOptions).then (
        () => console.log("Connection succesful"),
        (error) => console.log(error)
    )
}