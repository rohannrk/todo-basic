import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth";
import todoRoutes from "./routes/todo";
import cors from "cors";
require("dotenv").config()

const app = express();

const PORT = process.env.PORT
const MONGO_URI  = process.env.MONGO_URI || "fallback-url"

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

mongoose.connect( MONGO_URI, { dbName: "todo" });
