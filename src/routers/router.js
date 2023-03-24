const express = require('express')
const collection1 = require('../models/collection1')
const router = express.Router()


router.use(express.urlencoded({
    extended:false
}
))

router.post('/form',async(req,res)=>{
    try{
        // let data = req.body.eventname;
    let data = new collection1({
        "name": req.body.eventname,
        "organiser": req.body.organiser,
        "date": req.body.date,
        "time": req.body.time,
        "venue" : req.body.venue,
        "partlink": req.body.plink,
        "description": req.body.des,
        "posterlink": req.body.posterlink
    })
    // let data = new collection1(req.body);
    let savedData = await data.save();
    // console.log(data);
    res.redirect("/home");
    }
    catch(e){
        console.log(e);
        res.send(e)
    }
})
router.get('/home',(req,res)=>{
    res.render('index')
})
router.get('/team',(req,res)=>{
    res.render('team')
})
router.get('/form',(req,res)=>{
    res.render('form')
})
router.get('/form/api',async(req,res)=>{
    try{
    let data = await collection1.find({});
    console.log(data);
    res.send(data);
    }
    catch(e){
        console.log(e);
    }
})
module.exports = router