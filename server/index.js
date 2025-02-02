import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDb from "./config/connectDb.js"
import noteRouter from "./routes/NoteRoutes.js";
import userRouter from "./routes/UserRoutes.js";

const PORT =  process.env.PORT;
const DB_URL = process.env.DB_URL;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res) => { 
    return res.json({
        "msg" : "backend ready"
    });
});
app.use("/api/user", userRouter);
app.use("/api/user-note",noteRouter);

connectDb(DB_URL);
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});

