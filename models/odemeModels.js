var mongoose = require('mongoose');

const odemeSchema = mongoose.Schema({
     
    odemeBaslik: {
        type: String,
        required: true
    },
    odemeMiktar: {
        type: Number,
        required: true
    },
    odemeUserID: {
        type: String,
        required: true
    },
    odemeDate: {
        type: Date,
        default: Date.now
    }
     
})

module.exports = mongoose.model('Odeme', odemeSchema)
 
