import express from "express";
import { Transport } from "../models/transportModel.js";
import { upload } from "../middleware/requirePhoto.js";

const router = express.Router();

// Route for Save a new Book for database
router.post("/", upload.single("file"), async (request, response) => {
  try {
    if (
      !request.body.b_Code ||
      !request.body.destination ||
      !request.body.d_time ||
      !request.body.a_time ||
      !request.body.a_seat ||
      !request.body.price ||
      !request.file.filename
    ) {
      return response.status(400).send({
        message: "send all required fields: b_Code,d_time,a_time,a_seat,price",
      });
    }
    const newBook = {
      b_Code: request.body.b_Code,
      destination: request.body.destination,
      d_time: request.body.d_time,
      a_time: request.body.a_time,
      a_seat: request.body.a_seat,
      price: request.body.price,
      photo: request.file.filename,
    };

    const book = await Transport.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get all Books from database
router.get("/", async (request, response) => {
  try {
    const books = await Transport.find({});

    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get one Book from database by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const book = await Transport.findById(id);

    return response.status(200).json(book);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

// Route for update a Book from database
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.b_Code ||
      !request.body.destination ||
      !request.body.d_time ||
      !request.body.a_time ||
      !request.body.a_seat ||
      !request.body.price
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: b_Code,destination, d_time, a_time,a_seat,price",
      });
    }

    const { id } = request.params;

    const result = await Transport.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Bus not found" });
    }
    return response.status(200).send({ message: "Bus updated successfully!" });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a book
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Transport.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Bus not found" });
    }

    return response.status(200).send({ message: "Bus deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
