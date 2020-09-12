const mongoose = require('mongoose');

const AdminSchema  = new mongoose.Schema({
    adminName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = AdminSchema