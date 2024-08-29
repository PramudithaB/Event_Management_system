import { contributers } from "../models/contributersModel.js";

// Get all speakers
export const getAllcontributors = async (req, res) => {
  try {
    const result = await contributers.find({});

    if (!result) {
      return res.status(400).json({ error: "No data found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Get few speakers by eventId
export const getOnecontributors = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await contributers.find({ eventId: id });

    if (!result) {
      return res.status(400).json({ error: "No data found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Post a speakers
export const postOnecontributors = async (req, res) => {
  try {
    const { name, contribution, eventId } = req.body;
    const profileImage = req.file.filename;

    let emptyFields = [];

    if (!name) {
      emptyFields.push("name");
    }
    if (!contribution) {
      emptyFields.push("contribution");
    }
    if (!profileImage) {
      emptyFields.push("profileimage");
    }
    if (emptyFields.length > 0) {
      return res.status(400).json({ error: "fill all fields", emptyFields });
    }

    const result = await contributers.create({
      name,
      contribution,
      profileImage,
      eventId,
    });

    /*
    if (!result) {
      return res.status(400).json({ error: "No data found" });
    }*/

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// DELETE a speaker
export const deleteContributors = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await contributers.findOneAndDelete({ _id: id });
    if (!result) {
      return res.status(400).json({ error: "No data found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
