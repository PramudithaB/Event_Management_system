import { event } from "../models/eventModel.js";

// GET all events
export const getAllevents = async (req, res) => {
  try {
    const result = await event.find({}).sort({ createdAt: -1 });

    if (!result) {
      return res.status(400).json({ error: "No Data Found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//Get one event
export const getOneevents = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await event.findById(id);

    if (!result) {
      return res.status(400).json({ error: "No data found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//Post an Events
export const createEvents = async (req, res) => {
  try {
    const {
      eventTitle,
      startDate,
      startTime,
      location,
      description,
      eventType,
    } = req.body;
    const photo = req.file.filename;

    let emptyFields = [];

    if (!eventTitle) {
      emptyFields.push("title");
    }
    if (!startDate) {
      emptyFields.push("startdate");
    }
    if (!startTime) {
      emptyFields.push("starttime");
    }
    if (!location) {
      emptyFields.push("location");
    }
    if (!description) {
      emptyFields.push("description");
    }
    if (!eventType) {
      emptyFields.push("eventtype");
    }
    if (!photo) {
      emptyFields.push("photo");
    }
    if (emptyFields.length > 0) {
      return res.status(400).json({ error: "fiil all fields", emptyFields });
    }

    const result = await event.create({
      eventTitle,
      startDate,
      startTime,
      location,
      description,
      eventType,
      photo,
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

//Delete an event
export const deleteEvents = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await event.findOneAndDelete({ _id: id });
    if (!result) {
      return res.status(400).json({ error: "No data found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//Update an evnt
export const updateEvents = async (req, res) => {
  const { id } = req.params;

  try {
    const {
      eventTitle,
      startDate,
      startTime,
      location,
      description,
      eventType,
    } = req.body;
    const photo = req.file.filename;

    let emptyFields = [];

    if (!eventTitle) {
      emptyFields.push("title");
    }
    if (!startDate) {
      emptyFields.push("startdate");
    }
    if (!startTime) {
      emptyFields.push("starttime");
    }
    if (!location) {
      emptyFields.push("location");
    }
    if (!description) {
      emptyFields.push("description");
    }
    if (!eventType) {
      emptyFields.push("eventtype");
    }
    if (!photo) {
      emptyFields.push("photo");
    }
    if (emptyFields.length > 0) {
      return res.status(400).json({ error: "fiil all fields", emptyFields });
    }

    //const patchData = { ...req.body, photo: req.file.filename };

    const result = await event.findOneAndUpdate(
      { _id: id },
      {
        eventTitle,
        startDate,
        startTime,
        location,
        description,
        eventType,
        photo,
      }
    );
    //const result = await event.findOneAndUpdate({ _id: id }, { ...patchData });

    if (!result) {
      return res.status(400).json({ error: "No data found" });
    }

    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
