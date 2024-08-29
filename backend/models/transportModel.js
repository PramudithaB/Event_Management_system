import mongoose from "mongoose";

const transportSchema = mongoose.Schema(
  {
    b_Code: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    d_time: {
      type: String,
      required: true,
    },
    a_time: {
      type: String,
      required: true,
    },
    a_seat: {
      type: Number,
      required: true,
    },
    price: {
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

export const Transport = mongoose.model("Transport", transportSchema);
