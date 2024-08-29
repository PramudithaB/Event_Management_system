import mongoose from "mongoose";

const contributersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contribution: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
    },
    eventId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const contributers = mongoose.model("Contributors", contributersSchema);
