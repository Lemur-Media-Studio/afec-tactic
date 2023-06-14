const mongoose = require('../bin/mongodb')
const Schema = mongoose.Schema;

const MainSchema = new Schema({
    q1:{
        type: String,
        index: true,
        trim: true
    },
    q2:{
        type: String,
        index: true,
        trim: true
    },

})

MainSchema.set('toJSON',{getters:true,virtuals:true})
MainSchema.plugin(mongoose.mongoosePaginate)
module.exports = mongoose.model('answers',MainSchema)



