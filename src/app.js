const express = require('express')
const mongoose = require('mongoose')
const hbs = require('hbs')
const path = require('path')
const {PORT} = require('../ignore') //imported variable from ignore.js

// const port = process.env.PORT || 5500
const port = PORT

const app = express();
require('./db/conn');
// const router = ;
app.use(require('./routers/router'));

const collection1 = require('./models/collection1');
app.use(express.json());
app.use(express.urlencoded({
    extended:false
}
))

const staticPath = path.join(__dirname,"../public"); //defining static dir path
const tempPath = path.join(__dirname,"../templates/views");
console.log(staticPath);
console.log(tempPath);

app.use(express.static(staticPath))  //Serving static files using express
app.set("view engine", "hbs");
app.set("views", tempPath);


app.listen(port,()=>{
    console.log(`\n\nDeveloped by - 'LazyPeter'.\n\nhttp://localhost:${port}/home`);
})