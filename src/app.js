const express = require('express')
const mongoose = require('mongoose')
const hbs = require('hbs')
const path = require('path')

const port = process.env.PORT || 5500

const app = express();

require('./db/conn');
const router = require('./routers/router');
app.use(router);

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
    console.log(`listening to port no. ${port}`);
})