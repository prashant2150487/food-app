import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import myUserRoute from "./routes/myUserRoutes"

dotenv.config()
mongoose.connect(process.env.DB_URL as string).then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.error("Error connecting to DB:", err);
});
const app = express();
app.use(express.json());
app.use(cors());



app.use("/api/my/user" ,myUserRoute)
app.get("/test", (req: Request, res: Response) => {
    res.json({ message: 'hello!' });
});

app.listen(7000, () => {
    console.log("Server is running on port 7000");
});