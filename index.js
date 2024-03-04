const express = require("express");
const app = express();
require('dotenv').config()
// console.log(process.env) 
// const PORT = 3000;

 app.get('/',(req, res)=>{
    res.send("Hello Chandan Yadav");
 });

 app.listen(process.env.PORT, () => {
    console.log(`App is listening on ${process.env.PORT}`);
 });