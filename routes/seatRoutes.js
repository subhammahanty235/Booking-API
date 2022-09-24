const express = require('express')

const {allSeats, bookSeat} = require('../controller/seatcontroller')
const router = express.Router()

router.get('/all' ,allSeats )
// router.post('/add' , addSeats)
router.put('/book/:seatno' , bookSeat)

module.exports = router