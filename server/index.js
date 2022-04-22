import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json({limit:"30mb",extended:true}));

app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));

app.use(cors());
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    });

app.get('/',(req,res) => {
    res.json({message: "this is the home page"});
});
app.get('/signup',(req,res) => {
    res.json({message: "this is the signup page"});
});
app.get('/login',(req,res) => {
    res.json({message: "this is the login page"});
});
app.get('/visualier',(req,res) => {
    res.json({message: "this is the visualier page"});
});