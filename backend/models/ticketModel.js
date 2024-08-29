import mongoose from "mongoose";

const ticketSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    registrationNumber: {
      type: String,
      required: true,
    },
    eventType: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    requestType: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Ticket = mongoose.model("Ticket", ticketSchema);
