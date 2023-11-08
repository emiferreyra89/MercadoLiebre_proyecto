const { log } = require("console");
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const path = require("path");

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/registro",(req,res) => {
    res.sendFile(path.join(__dirname,"/views/register.html"))
})

app.post("/registro",(req,res) => {
    console.log(req.body);
    res.redirect("/");
})

app.get("/login",(req,res) => {
    res.sendFile(path.join(__dirname,"/views/login.html"))
})

app.post("/login",(req,res) => {
    console.log(req.body);
    res.redirect("/");
})

app.use(express.static(__dirname+"/public"));

app.listen(3030,()=>{
    console.log("Servidor en puerto 3030")
})