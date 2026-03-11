import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";

import auth from "./middleware/auth.js";
import User from "./models/User.js";
import Note from "./models/Note.js";

const app = express();

app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://localhost:27017/notesapp")
.then(() => console.log("MongoDB Connected"));

app.get("/",(req,res) => {
    res.json({
        message:"Backend Running"
    })
});


//Register
app.post("/register", async (req,res)=>{
    const existuser=await User.findOne({email: req.body.email});
    if(existuser){
        return res.status(400).json({message: "User already exists"});
    }
    const hashedPassword=await bcrypt.hash(req.body.password,10);
    const user=new User({
        email: req.body.email,
        password: hashedPassword
    });

    await user.save();
    res.json({message: "User Registered"});
});

//login
app.post("/login", async (req,res)=>{
    const user=await User.findOne({email: req.body.email});
    if(!user){
        return res.status(400).json({message: "User not found"});

    }
    const valid=await bcrypt.compare(req.body.password, user.password);
    if(!valid){
        return res.status(400).json({message: "Wrong Password"});
    }
    const token=jwt.sign(
        {id:user._id},
        "secret123"
    );
    res.json({token});
});

//Create Note
app.post("/notes", auth, async (req,res)=>{
    const note=new Note({
        text: req.body.text,
        userId: req.user.id
    });
    const saved=await note.save();
    res.json(saved);

});

//get all notes
app.get("/notes",auth,async (req,res)=>{
    const Notes=await Note.find({
        userId:req.user.id
    });
    res.json(Notes);
});

//Delete notes
app.delete("/notes/:id", auth, async (req,res)=>{
    await Note.findByIdAndDelete(req.params.id);
    res.json({message:"Note Deleted"})
});

app.listen(3000, ()=>{
    console.log("Backend is running on PORT: 3000");
});