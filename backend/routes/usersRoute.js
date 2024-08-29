import express from "express";
import { User } from "../models/userModel.js";

const router = express.Router();

//Route save for new User
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.email ||
      !request.body.gender ||
      !request.body.age ||
      !request.body.address ||
      !request.body.contact
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: name,email,gender,age,address,contact",
      });
    }
    const newUser = {
      name: request.body.name,
      email: request.body.email,
      gender: request.body.gender,
      age: request.body.age,
      address: request.body.address,
      contact: request.body.contact,
    };

    const user = await User.create(newUser);

    return response.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for Get All Users from database
router.get("/", async (request, response) => {
  try {
    const users = await User.find({});

    return response.status(200).json({
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for Get One book from database by id
router.get("/:_id", async (request, response) => {
  try {
    const { _id } = request.params;
    const user = await User.findById(_id);

    return response.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for Update a Book
router.put("/:_id", async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.email ||
      !request.body.gender ||
      !request.body.age ||
      !request.body.address ||
      !request.body.contact
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: name,email,gender,age,address,contact",
      });
    }

    const { _id } = request.params;

    const result = await User.findByIdAndUpdate(_id, request.body);
    if (!result) {
      return response.status(404).json({ message: "Book not found " });
    }
    return response.status(404).json({ message: "Book update successfully " });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
//Route for Delete a Book
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await User.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Book not found " });
    }

    return response.status(404).json({ message: "Book Delete successfully " });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
