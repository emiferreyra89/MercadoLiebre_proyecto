const express = require("express");
const app = express();
const path = require("path");

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"/views/home.html"))
})

app.use(express.static(__dirname+"/public"));

app.listen(3030,()=>{
    console.log("Servidor en puerto 3030")
})