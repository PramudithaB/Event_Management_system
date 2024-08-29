import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        age: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        contact: {
            type: String, 
            required: true,
        },
       
    },
    {
        timestamps: true,
    }
);


export const User = mongoose.model('crud', userSchema);
