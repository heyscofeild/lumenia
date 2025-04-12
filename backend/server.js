const express = require('express')
const dotenv = require('dotenv').config()

const cors = require('cors');// to control how web pages can request resources from a different domain(ports)
const port = process.env.PORT || 5000 //you can set your port on the env
const app = express(); //this take the main library and run it
//const pool = require('./database/db') //this is the connection to the database

//configuring cors
const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:5000'],
    methods: ['GET', 'POST'], //caus ethey are the only methods we are using for now
    allowedHeaders: ['Content-Type'],
    credentials: true
  }

//middleware


app.use(cors(corsOptions));

app.use(express.json()) //This middleware parses incoming JSON payloads in the request body.
app.use(express.urlencoded({ extended: false }))
//register route
app.use('/', require('./routes/luminiaroutes'))



//app.use('/api/goals', require('./routes/goalroutes'))
//app.use(errorhandler)


app.listen(port, () => console.log(`Server running on port ${port}`))
