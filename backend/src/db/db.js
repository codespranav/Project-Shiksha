import mongoose from "mongoose"
import dotenv from "dotenv"
import { DB_NAME } from "../constant.js";

dotenv.config();
const connectToDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\napp is successfully connected || DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("mongodb connection error : ", error);
        process.exit(1)
    }
}

export default connectToDB;