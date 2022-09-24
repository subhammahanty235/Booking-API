const {Schema, model} = require('mongoose')

const SeatScheama = new Schema({
    serialno :{
        type:Number , 
    },
    booked:{
        type:Boolean,
        default:false,
    },

})

const Seat = new model('seat' , SeatScheama)

module.exports = Seat