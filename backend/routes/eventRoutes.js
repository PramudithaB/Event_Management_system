import express from "express";
import {
  getOneevents,
  getAllevents,
  createEvents,
  deleteEvents,
  updateEvents,
} from "../controllers/eventController.js";
import { upload } from "../middleware/requirePhoto.js";

const router = express.Router();

// Get one Event
router.get("/:id", getOneevents);

// Get few speakers by eventId
router.get("/", getAllevents);

// Post An Event
router.post("/", upload.single("file"), createEvents);

// Delete An Event
router.delete("/:id", deleteEvents);

// Update An Event
router.put("/:id", upload.single("file"), updateEvents);

export default router;
