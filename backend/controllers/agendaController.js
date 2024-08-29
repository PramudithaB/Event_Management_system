import { agenda } from "../models/agendaModel.js";

// GET all agendas
export const getAllagendas = async (req, res) => {
  try {
    const result = await agenda.find({}).sort({ createdAt: -1 });

    if (!result) {
      return res.status(400).json({ error: "No data found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// GET few agenda by eventId
export const getOneagenda = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await agenda.find({ eventId: id });

    if (!result) {
      return res.status(400).json({ error: "No data found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// post an agenda
export const createAnagenda = async (req, res) => {
  const { title, date, startTime, endTime, timeRange, eventId } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!date) {
    emptyFields.push("startdate");
  }
  if (!startTime) {
    emptyFields.push("starttime");
  }
  if (!endTime) {
    emptyFields.push("endtime");
  }
  if (!timeRange) {
    emptyFields.push("timerange");
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: "fill all fields", emptyFields });
  }

  try {
    const result = await agenda.create({
      title,
      date,
      startTime,
      endTime,
      timeRange,
      eventId,
    });

    if (!result) {
      return res.status(400).json({ error: "No data found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// DELETE an agenda
export const deleteAnagenda = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await agenda.findOneAndDelete({ _id: id });
    if (!result) {
      return res.status(400).json({ error: "No data found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// PUT an agenda
export const updateAnagendas = async (req, res) => {
  const { id } = req.params;
  const { title, date, startTime, endTime, timeRange, eventId } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!date) {
    emptyFields.push("startdate");
  }
  if (!startTime) {
    emptyFields.push("starttime");
  }
  if (!endTime) {
    emptyFields.push("endtime");
  }
  if (!timeRange) {
    emptyFields.push("timerange");
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: "fill all fields", emptyFields });
  }

  try {
    const result = await agenda.findOneAndUpdate(
      { _id: id },
      { date, startTime, endTime, title, timeRange }
    );
    // const result = await agenda.findOneAndUpdate({ _id: id }, { ...req.body });
    console.log({ ...req.body });

    if (!result) {
      return res.status(400).json({ error: "No data found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
