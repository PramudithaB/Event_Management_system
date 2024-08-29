import express from "express";
import {
  getOnecontributors,
  getAllcontributors,
  deleteContributors,
  postOnecontributors,
} from "../controllers/contributersController.js";
import { upload } from "../middleware/requirePhoto.js";

const router = express.Router();

// Get all speakers
router.get("/", getAllcontributors);

// Get one speakers
router.get("/:id", getOnecontributors);

// Post a speakers
router.post("/", upload.single("file"), postOnecontributors);

// DELETE a speaker
router.delete("/:id", deleteContributors);

export default router;
