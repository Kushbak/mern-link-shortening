const { Schema, model } = require('mongoose')

const linkSchema = new Schema({
    link: {
        required: true,
        type: String,
    },
    short: {
        required: true,
        type: String,
    },
    author: {
        required: true,
        type: String,
    },
    clicks: {
        required: true,
        type: Number,
    }
})

module.exports = model('Link', linkSchema)