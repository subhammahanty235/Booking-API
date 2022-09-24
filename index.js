// const mysql = require('mysql')
require('dotenv').config()
const express = require('express')
const cors  = require('cors')
const hbs = require('hbs')
const path = require('path')
const mongoose = require('mongoose')
const app = express()
const uri = process.env.MONGO_URI;
app.use(express.json());
mongoose.connect(uri , ()=>{
    console.log('connection to database sucessfull')
})
app.use(cors());
app.set('view engine' , 'hbs')
app.set('views' , path.join(__dirname , 'views'))
app.use('/static' , express.static('static'))
app.use(express.urlencoded());
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/api',(req,res)=>{
    res.render('api')
})
app.use('/api/seats' , require('./routes/seatRoutes'))



let port = process.env.PORT || 5100
app.listen(port, ()=>{
    console.log('Connected')
})