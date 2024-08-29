//const mongoose = require ("mongoose");
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const regiSchema = Schema({
    name:{
        type: String, //dataType
        requried: true, //Validate
    },
    gmail:{
        type:String, 
        required: true,
    },
    address:{
        type:String, 
        required: true,
    },
    age:{
        type:Number, 
        required: true,
    },
    gender:{
        type:String, 
        required: true,
    },
    contact:{
        type:Number, 
        required: true,
    },
    password: {
        type:String,
        requried: true, 
    }
});

const Register = mongoose.model("Register", regiSchema);
export default Register;
/*
module.exports = mongoose.model(
    "Register", //file name
    regiSchema //funtion name
    
) */
//export const Register = mongoose.model('Register', userSchema);
