var mongoose = require('mongoose');

const degerSchema=mongoose.Schema
({
    userid:{type:String, required:true},
    degerDate:{type:Date, default:Date.now},
    karbonMonoksit:{type:Number},
    metan:{type:Number},
    propan:{type:Number},
    butan:{type:Number},
    havaTemiz:{type:Number}


})

module.exports = mongoose.model('Degerler',degerSchema)
 
