import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const salarySchema = new mongoose.Schema({
    s_id: {
        type: Number,
        unique: true,
    },
    
    name: {
        type: String,
        required: true
    },
    basicSalary: {
        type: String,
        required: true
    },
    attendance: {
        type: String,
        required: true
    },
    allowance: {
        type: String,
        required: true
    },
    epf: {
        type: String,
        required: true
    },
    etf: {
        type: String,
        required: true
    },
    tax: {
        type: String,
        required: true
    },
    netSalary: {
        type: String,
        required: true
    }
},
{
    timestamps: true,  // Automatically adds createdAt and updatedAt timestamps
});

// Plugin for unique validation
salarySchema.plugin(uniqueValidator, { message: 'Error, {PATH} is Already Exists.' });

// Pre-save middleware to generate s_id
salarySchema.pre('save', async function(next) {
    try {
        // Generate a random 6-digit numeric ID
        const generatedId = Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit number
        this.s_id = generatedId; // Assign generated ID to the s_id field
        next(); // Continue with the save operation
    } catch (error) {
        next(error); // Pass error to next middleware
    }
});

export const Salary = mongoose.model(`salary`, salarySchema);