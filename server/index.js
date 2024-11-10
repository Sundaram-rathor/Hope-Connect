const express = require('express')
const mongoose = require('mongoose')
const {UserRouter} = require('./routes/userRouter') 
require('dotenv').config();
const cors = require('cors')

const app = express();
const port = 3000;

const corsOption = {
    domain: ['http://localhost:5173/']
}
app.use(express.json());
app.use(cors(corsOption))

app.use('/api/v1/user', UserRouter)
    


async function server(){
    try {
        
       await mongoose.connect(`mongodb+srv://rathorsundaram50:ci5OZsMIdodASZ9a@cluster0.vopm2.mongodb.net/dapp`)
       console.log('mongo connected')
       app.listen(port, ()=>{console.log(`server is listening at ${port}`)})
    } catch (error) {
        console.log(`error connecting to DB : ${error}`)
    }
}

server();