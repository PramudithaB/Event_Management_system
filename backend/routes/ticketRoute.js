import express from "express";
import { Ticket } from "../models/ticketModel.js";
import { upload } from "../middleware/requirePhoto.js";

const router = express.Router();

// Route for Save a new Book
router.post("/", upload.single("file"), async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.email ||
      !request.body.registrationNumber ||
      !request.body.eventType ||
      !request.body.contactNumber ||
      !request.body.requestType ||
      !request.body.subject ||
      !request.body.message
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: name,email,registrationNumber,eventType,contactNo,InquiryType,subject,massage,attachment",
      });
    }
    const newBook = {
      name: request.body.name,
      email: request.body.email,
      registrationNumber: request.body.registrationNumber,
      eventType: request.body.eventType,
      contactNumber: request.body.contactNumber,
      requestType: request.body.requestType,
      subject: request.body.subject,
      message: request.body.message,
      attachment: request.body.attachment,
      photo: request.file.filename,
    };

    const book = await Ticket.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Books from database
router.get("/", async (request, response) => {
  try {
    const books = await Ticket.find({});

    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Book from database by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const book = await Ticket.findById(id);

    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Book
router.put("/:id", upload.single("file"), async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.email ||
      !request.body.registrationNumber ||
      !request.body.eventType ||
      !request.body.contactNumber ||
      !request.body.requestType ||
      !request.body.subject ||
      !request.body.message
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: name,email,registrationNumber,eventType,contactNo,InquiryType,subject,massage,attachment",
      });
    }

    const { id } = request.params;
    const {
      name,
      email,
      registrationNumber,
      eventType,
      contactNumber,
      requestType,
      subject,
      message,
    } = request.body;
    const photo = request.file.filename;

    const result = await Ticket.findByIdAndUpdate(id, {
      name,
      email,
      registrationNumber,
      eventType,
      contactNumber,
      requestType,
      subject,
      message,
      photo,
    });

    if (!result) {
      return response.status(404).json({ message: "Ticket not found" });
    }

    return response.status(200).send({ message: "Ticket updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a book
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Ticket.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Ticket not found" });
    }

    return response.status(200).send({ message: "Ticket deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
