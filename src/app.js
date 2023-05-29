import express, { json } from "express";
import morgan from "morgan";
const app = express();
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// Import routes
import authRoutes from "./routes/authRoutes.js";
import parkingRoutes from "./routes/parkingRoutes.js";
import reservationsRoutes from "./routes/reservationsRoutes.js";

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Routes
app.use(authRoutes);
app.use(parkingRoutes);
app.use(reservationsRoutes);
app.use("/uploads", express.static("uploads"));

export default app;
