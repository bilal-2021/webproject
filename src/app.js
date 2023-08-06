const express = require("express");
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.local || 3000;
// <<<<-------Public Static Path------>>>>>>
const static_path = path.join(__dirname, "../public");

// <<<<-------template Path------>>>>>>
const templates_path = path.join(__dirname, "../templates/views");

// <<<<-------template Path------>>>>>>
const partials_path = path.join(__dirname, "../templates/partials");


app.set('view engine', 'hbs');
app.set('views',templates_path);
hbs.registerPartials(partials_path);

// <<<<--------Routing------>>>>>
app.use(express.static(static_path));
app.get("/", (req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/weather",(req,res)=>{
    res.render("weather");
})

app.get("*",(req,res)=>{
    res.render("404error", {
        errorMsg : "Opps! Page Not Found"
    });
})

app.listen(port , ()=>{
    console.log(`Listening to the port ${port}`);
})