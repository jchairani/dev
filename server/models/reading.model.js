const mongoose = require('mongoose');
const ReadingSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    reading: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required:true
    },
    dates: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
module.exports = mongoose.model(`Reading`,ReadingSchema)