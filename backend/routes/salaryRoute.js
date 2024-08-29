import express from "express";
import { Salary } from "../models/salaryModel.js";

function Calculation(basicSalary, attendance) {

    let data = {
        tax: 0,
        epf: 0,
        etf: 0,
        allowance: 0,
        netSalary: 0

    };
    if (basicSalary > 0 && attendance >= 20) {
        data.tax = basicSalary * 4.5 / 100.0;
        data.epf = basicSalary * 8 / 100.0;
        data.etf = basicSalary * 3 / 100.0;
        data.allowance = basicSalary * 3 / 100.0;

        data.netSalary = (basicSalary - data.tax+ data.allowance - data.epf - data.etf );



    } else if (basicSalary > 0 && attendance < 20) {

        data.tax = basicSalary * 4.5 / 100.0;
        data.epf = basicSalary * 8 / 100.0;
        data.etf = basicSalary * 3 / 100.0;

        data.netSalary = (basicSalary - data.tax - data.epf - data.etf);
    }
    return data;

}
const router = express.Router();

// Route for saving a new Salary
router.post('/', async (request, response) => {
    try {
        if (!request.body.name || !request.body.basicSalary || !request.body.attendance) {
            return response.status(400).send({
                message: 'Send all required fields: name, basicSalary, attendance',
            });
        }

        const newSalary = {
            name: request.body.name,
            basicSalary: request.body.basicSalary,
            attendance: request.body.attendance,
            allowance: request.body.allowance,
            epf: request.body.epf,
            etf: request.body.etf,
            tax: request.body.tax,
            netSalary: request.body.netSalary
        };

        // Calculate salary details
        const calculatedSalary = Calculation(request.body.basicSalary, request.body.attendance);

        // Populate the new salary object with calculated values
        newSalary.epf = calculatedSalary.epf;
        newSalary.etf = calculatedSalary.etf;
        newSalary.tax = calculatedSalary.tax;
        newSalary.allowance = calculatedSalary.allowance;
        newSalary.netSalary = calculatedSalary.netSalary;

        // Create a new Salary entry in the database
        const salary = await Salary.create(newSalary);

        return response.status(201).send(salary);
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});



// Route for Get All Salary from database
router.get('/', async (request, response) => {
    try {
        const salary = await Salary.find({}).sort({ createdAt: -1 });

        return response.status(200).json({
            count: salary.length,
            data: salary,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});
// router for get one salary
router.get('/:_id', async (request, response) => {
    try {
        const { _id } = request.params;

        const salary = await Salary.findById({ _id });
        return response.status(200).json(salary)
    }
    catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

//Route the update

router.put('/:_id', async (request, response) => {
    try {
        if (!request.body.name || !request.body.basicSalary || !request.body.attendance) {
            return response.status(400).send({
                message: 'Send all required fields: name, basicSalary, attendance',
            });
        }

        const { _id } = request.params;

        const newSalary = {
            name: request.body.name,
            basicSalary: request.body.basicSalary,
            attendance: request.body.attendance,
            allowance: request.body.allowance,
            epf: request.body.epf,
            etf: request.body.etf,
            tax: request.body.tax,
            netSalary: request.body.netSalary
        };

        // Calculate salary details
        const calculatedSalary = await Calculation(request.body.basicSalary, request.body.attendance);

        // Populate the new salary object with calculated values
        newSalary.epf = calculatedSalary.epf;
        newSalary.etf = calculatedSalary.etf;
        newSalary.tax = calculatedSalary.tax;
        newSalary.allowance = calculatedSalary.allowance;
        newSalary.netSalary = calculatedSalary.netSalary;

        const result = await Salary.findByIdAndUpdate(_id, newSalary, { new: true });

        if (!result) {
            return response.status(404).json({ message: 'Salary not found' });
        }

        return response.status(200).send({ message: 'Salary updated successfully', result });
    } catch (error) {
        console.error(error.message);
        response.status(500).send({ message: error.message });
    }
});


router.delete('/:_id', async (request, response) => {
    try {

        const { _id } = request.params;

        const result = await Salary.findByIdAndDelete(_id);

        if (!result) {

            return response.status(404).json({ message: 'Salary recoard not found' })

        }

        return response.status(200).send({ message: 'Salary deleted successfully' })


    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

export default router;