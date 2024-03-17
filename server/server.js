require('dotenv').config();
const express = require("express");
const db = require('./config/db');
const router = require('./routes/router');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(router);

const PORT = process.env.PORT || 3000;


app.listen(PORT, ()=> {
    console.log("listening");
})