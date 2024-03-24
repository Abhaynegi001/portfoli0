import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDb from "./Database/db.js";
import { User } from "./modules/user.module.js";
import cors from 'cors'
import path from "path"



const app = express();

const __dirname = path.resolve(path.dirname('')); 

connectDb();

// router
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "newPortfolio", "dist")));
  res.sendFile(path.resolve(__dirname, "newPortfolio", "dist", "index.html"));
});



app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const user =  await User.create({ name, email, message });
    if(user){
        res.status(200).json({
            message:"Message Send"
        })
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({
        message:"Message not Send"
    })
  }
});

app.listen(process.env.PORT, () => {
  console.log("server is Connected");
});
