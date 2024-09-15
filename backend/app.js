const express = require('express');
const app = express();

// app.use('/' , (req,res)=>{
//     res.send('Hello from backend Side');
// });

app.use(express.json());

const dbConnect = require('./config/database');
dbConnect();

const userRoute = require('./routes/user');
app.use('/api/v1', userRoute);

app.listen(1000, ()=>{
    console.log("Server started Successfully");
})