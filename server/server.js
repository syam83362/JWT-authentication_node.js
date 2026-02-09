const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv  = require('dotenv')
const cookieParser = require('cookie-parser')


dotenv.config();

const app = express();


// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:process.env.CLIENT_URL,
    Credentials:true
}))

// database connection
mongoose.connect(
    process.env.MONGODB_URL,
).then(()=>console.log('mongo db connected'))
.catch((err)=>console.log(err))

// routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/user',require('./routes/user'));

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`app is listening to the port ${port}`)
})