import express from "express";
import { registerController } from "../controllers/index.js";
const router = express.Router();

router.post("/reg", registerController);

export { router };
