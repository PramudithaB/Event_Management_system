import mongoose from "mongoose";

const feedbackSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Service: {
      type: String,
      required: true,
    },
    Expected: {
      type: String,
      required: true,
    },
    Feedback: {
      type: String,
      required: true,
    },
    rate: {
      type: Number
    }
  },
  {
    timestamps: true,
  }
);

export const Feedback = mongoose.model("Feedback", feedbackSchema);
