import Register from "../models/Register.js";
import express from "express";
const router = express.Router();

router.post("/", async (req, res) => {
  const { gmail, password } = req.body;
  try {
    const user = await Register.findOne({ gmail });
    if (!user) {
      return res.json({ err: "User Not Found" });
    }
    // Assuming password comparison is correct based on your storage method
    if (user.password === password) {
      //return res.json({ status: "ok" });
      return res.json(user);
    } else {
      return res.json({ err: "Incorrect Password" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Server Error" });
  }
});

export default router;
