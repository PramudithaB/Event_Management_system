import mongoose from "mongoose";

const agendaSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    timeRange: {
      type: String,
      required: true,
    },
    eventId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const agenda = mongoose.model("Agenda", agendaSchema);
