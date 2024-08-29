import express from "express";
import {
  getAllagendas,
  getOneagenda,
  createAnagenda,
  deleteAnagenda,
  updateAnagendas,
} from "../controllers/agendaController.js";

const router = express.Router();

// GET all agendas
router.get("/", getAllagendas);

// GET few agenda by eventId
router.get("/:id", getOneagenda);

// post an agenda
router.post("/", createAnagenda);

// DELETE an agenda
router.delete("/:id", deleteAnagenda);

// PUT an agenda
router.put("/:id", updateAnagendas);

export default router;
