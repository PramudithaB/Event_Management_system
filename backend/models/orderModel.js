import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    itemname: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
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

export const Order = mongoose.model(`order`, orderSchema);
