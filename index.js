const express = require("express");
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 5500;
const app = express();


hbs.registerPartials(__dirname)
app.set("view engine","hbs");
app.set("views",__dirname);
app.use(express.static(__dirname));
app.get("/",(req,res)=>{
    res.render("home");
});

app.listen(port,()=>{
    console.log("Website hosted successfully at "+port);
});
