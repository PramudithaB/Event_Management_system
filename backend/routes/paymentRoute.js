import express from "express";
import { Payment } from "../models/paymentModel.js";
import { upload } from "../middleware/requirePhoto.js";
const router = express.Router();

// Route for Save a new Book for database
router.post("/", upload.single("file"),async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear ||
      !request.file.filename
    ) {
      return response.status(400).send({
        message: "send all required fields: title,author,publishYear",
      });
    }
    const  {
      title,
      author,
      publishYear
    } = request.body;

    const photo = request.file.filename

    const book = await Payment.create({title,author,publishYear,photo});

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get all Books from database
router.get("/", async (request, response) => {
  try {
    const books = await Payment.find({});

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

    const book = await Payment.findById(id);

    return response.status(200).json(book);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

// Route for update a Book from database
router.put("/:id",upload.single("file") ,async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear ||
      !request.file.filename
    ) {
      return response.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const { id } = request.params;

    const {title,author,publishYear} = request.body
    const photo = request.file.filename

    const result = await Payment.findByIdAndUpdate(id, {title,author,publishYear,photo});

    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }
    return response.status(200).send({ message: "Book updated successfully!" });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a book
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Payment.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
