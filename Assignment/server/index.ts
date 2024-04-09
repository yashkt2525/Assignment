import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/index.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(1234, () => {
  console.log("Server Started on the port 1234");
});
