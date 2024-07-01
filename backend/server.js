import dotenv from "dotenv";
dotenv.config();

import express from "express";

import { connectDB } from "./db/config.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  connectDB();
});
