import mongoose from "mongoose";

const paymentSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
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

export const Payment = mongoose.model("Payment", paymentSchema);
