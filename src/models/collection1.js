const { strict } = require('assert')
const { time } = require('console')
const mongoose = require('mongoose')

const collection1Schema = mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    organiser:{
        type: String,
        // required: true
    },
    date: {
        type: String,
        // required: true
    },
    time: {
        type: Number,
        // required: true
    },
    venue : {
        type: String,
        // required: true
    },
    partlink: {
        type: String,
        // required: true
    },
    description:{
        type: String,
        // required: true
    },
    posterlink:{
        type: String,
        // required: true
    }
})

const collection1 = new mongoose.model("eventData1",collection1Schema)

module.exports = collection1