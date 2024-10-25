
const  mongoose = require('mongoose');

mongoose.connect('mongodb+srv://AbhinavSuraj:Suraj7860@tinderapp.ouvwk.mongodb.net/');

const userSchema = new mongoose.Schema({
    name : String,
    userName : String,
    emailId : String,
})

module.exports = mongoose.model('user',userSchema);