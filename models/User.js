const { Schema, model, Types } = require('mongoose')

const userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true, unique: true},
    links: { type: Types.ObjectId, ref: 'Link' }
})

module.exports = model('User', userSchema)