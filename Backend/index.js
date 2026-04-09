import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// 🔥 Start server properly
const startServer = async () => {
  try {
    // DB connect
    await connectDB();

    // PORT from .env
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("❌ Server start failed:", error.message);
  }
};

startServer();