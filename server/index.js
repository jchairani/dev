const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const readsRoute = require('./routes/read');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');

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

app.get(/.*/, (_req, res) => {
    res.sendFile(__dirname + '../client/build/index.html');
});

const buildPath = path.join(__dirname, '../client/build');
app.use(express.static(buildPath));

app.use(cors({
    credentials:true,
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
}));

app.use('/api/reads',readsRoute);
app.use('/api/user',userRoute);
app.use('/api/auth',authRoute);

app.use((err,req,res,next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(process.env.PORT || 3001,()=>{
    console.log(`Listening on port ${process.env.PORT}`);
})