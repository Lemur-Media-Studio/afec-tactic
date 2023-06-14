const mongoose = require('../bin/mongodb')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const MainSchema = new Schema({
    name:{
        type: String,
        trim: true
    },
    user:{
        type: String,
        unique: true,
        required: [true,"El campo usuario es obligatorio"]
    },
    password:{
        type: String,
        required: true
    }
})
MainSchema.pre('save',function(next){
    console.log(this.password)
    this.password = bcrypt.hashSync(this.password,10);
    next();
})
module.exports = mongoose.model('usuarios',MainSchema)
