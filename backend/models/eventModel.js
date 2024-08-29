import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
  {
    eventTitle: {
      type: String,
      require: true,
    },
    startDate: {
      type: String,
      require: true,
    },
    startTime: {
      type: String,
      require: true,
    },
    location: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    eventType: {
      type: String,
      require: true,
    },
    photo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const event = mongoose.model("Event", eventSchema);
