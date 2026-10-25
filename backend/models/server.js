
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Student from "./students.js";
import Faculty from "./faculty.js";
const app = express();

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch(error => {
        console.log(error);
    });

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello From Express!");
});

app.get("/api/students", async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

app.get("/api/faculty", async (req, res) => {
    const faculty = await Faculty.find();
    res.json(faculty);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});

export default app;
