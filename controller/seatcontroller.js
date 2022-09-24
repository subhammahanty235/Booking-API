const Seat = require('../model/seat')

const allSeats =async (req,res)=>{
    try {
        const {availability} = req.query
        const queryobj = {};
        if(availability){
            if(availability === 'booked'){
                queryobj.booked = true;
            }
            if(availability === 'available'){
                queryobj.booked = false;
            }

        }
        const data = await Seat.find(queryobj);

        res.json(data)
    } catch (error) {
        console.log('Error')
    }
}

const bookSeat = async(req,res)=>{
    try {
        const {seatno} = req.params;
        const seat = await Seat.findOne({serialno:seatno});
        const bookseat = await Seat.findByIdAndUpdate(seat._id , {$set:{booked:true}})

        res.json(bookseat)
    } catch (error) {
        console.log(error)
    }
    
}

// const addSeats = async(req,res)=>{
//     try {
//         for(let  i = 401 ; i<=500;i++){
//             let data = {
//                 serialno : i
//             }
//             const data2 =await Seat.create(data);
//             console.log("added" + i)
//         }

//         res.send('Successfully added ')
//     } catch (error) {
//         console.log(error)
//         console.log("unsuccessfull")
//     }
// }

module.exports = {allSeats , bookSeat }