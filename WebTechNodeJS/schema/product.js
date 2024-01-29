const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    pid:Number,
    pname:String,
    pprice:String,
    pcategory:String,
    pdiscription:String,
    pquantity:String
})

module.exports = mongoose.model('product', userSchema)