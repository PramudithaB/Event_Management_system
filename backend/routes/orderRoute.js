import express from "express";
import { Order } from "../models/orderModel.js";

import { upload } from "../middleware/requirePhoto.js";

const router = express.Router();

// Route for saving a new order
router.post("/", upload.single("file"), async (request, response) => {
  try {
    if (
      !request.body.itemname ||
      !request.body.price ||
      !request.body.description ||
      !request.file.filename
    ) {
      return response.status(400).send({
        message: "Send all required fields: itemname, price, description",
      });
    }

    const newOrder = {
      itemname: request.body.itemname,
      price: request.body.price,
      description: request.body.description,
      photo: request.file.filename,
    };

    const order = await Order.create(newOrder);
    return response.status(201).send(order);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

// Route for Get All order from database
router.get("/", async (request, response) => {
  try {
    const order = await Order.find({});

    return response.status(200).json({
      count: order.length,
      data: order,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// router for get one salary
router.get("/:_id", async (request, response) => {
  try {
    const { _id } = request.params;

    const order = await Order.findById({ _id });
    return response.status(200).json(order);
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

//Route the update
router.put("/:_id", async (request, response) => {
  try {
    if (
      !request.body.itemname ||
      !request.body.price ||
      !request.body.description
    ) {
      return response.status(400).send({
        message: "Send all required fields: itemname,price,description",
      });
    }

    const { _id } = request.params;

    const result = await Order.findByIdAndUpdate(_id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Item not found" });
    }

    return response.status(200).send({ message: "Item updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route the delete
router.delete("/:_id", async (request, response) => {
  try {
    const { _id } = request.params;

    const result = await Order.findByIdAndDelete(_id);

    if (!result) {
      return response.status(404).json({ message: "item recoard not found" });
    }

    return response.status(200).send({ message: "item deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
