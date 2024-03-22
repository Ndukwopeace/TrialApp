const express = require('express');
const userRoute = require('./routes/UserRoute');
const authRoute = require('./routes/AuthRoute');

const app = express();
const port = 7000;

require('./config/mongoose.config');

// console.log(process.env)

// routes
app.use('/user', userRoute);
app.use('/oAuth', authRoute);



app.listen(port , ()=> console.log('listening on port', port));