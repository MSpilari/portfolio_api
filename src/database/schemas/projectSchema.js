const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    thumbnail: {
        type: String,
        required: true
    },
    name: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    href:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        required: true
    }
})

module.exports = projectSchema
