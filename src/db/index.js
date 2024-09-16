import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import 'dotenv/config'

const connectDB= async () => {
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongodb connected !! db  host: ${connectionInstance.connection.host}`);
    }catch(error){
        console.log("mongodb connection failed",error);
        process.exit(1)
    }
}

export default connectDB;