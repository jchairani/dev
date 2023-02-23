const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const readsRoute = require('./routes/read');
const userRoute = require('./routes/user');

const URI = process.env.MONGO;
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Connected to MongoDB");
})

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
})

mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
})

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/api/reads',readsRoute);
app.use('/api/user',userRoute);

app.listen(8000,()=>{
    console.log("Listening on port 8000");
})