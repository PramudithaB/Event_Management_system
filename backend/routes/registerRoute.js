import Register from "../models/Register.js";
import express from "express";
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, gmail, address, age, gender, contact, password } = req.body;
  try {
    const newUser = new Register({
      name,
      gmail,
      address,
      age,
      gender,
      contact,
      password,
    });
    await newUser.save();
    res.status(200).json({ status: "ok" });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ status: "error", message: "Failed to save user" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Register.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.gender ||
      !req.body.age ||
      !req.body.address ||
      !req.body.contact
    ) {
      return res.status(400).send({
        message: "Send all required fields: name,gender,age,address,contact",
      });
    }

    const { id } = req.params;

    const result = await Register.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).json({ message: "Book not found " });
    }
    return res.status(404).json({ message: "Book update successfully " });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route for Get All Users from database
router.get("/", async (req, res) => {
  try {
    const users = await Register.find({});

    return res.status(200).json({
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route for Delete a Book
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Register.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Book not found " });
    }

    return res.status(404).json({ message: "Book Delete successfully " });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
