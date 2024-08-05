import mongoose from "mongoose";
import {config} from "./config.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(config.db)
        console.log('Connected to database successfully!!! ✅✅✅');
    } catch (error) {
        console.log('Error connecting to database');
    }
};
