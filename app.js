const express = require("express");

const app = express();
const path = require('path');

app.set("view engine","ejs");


app.use(express.static(path.join(__dirname,'views')));

app.get("/logon",(req,res)=>{
    res.sendFile('./views/signup_signin.html',{ root : __dirname});
})

app.listen(3000);


