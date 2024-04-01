const express = require('express');
const userRoute = require('./routes/UserRoute');
const authRoute = require('./routes/AuthRoute');
const app = express();
const cors = require('cors')
const port = 8000;
require('dotenv').config();
const cookieParser = require('cookie-parser')
app.use(cors({origin: `http://localhost:5173` , credentials: true}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('./config/mongoose.config');

// console.log(process.env)

// routes
app.use('/user', userRoute);
app.use('/oAuth', authRoute);



app.listen(port , ()=> console.log('listening on port', port));