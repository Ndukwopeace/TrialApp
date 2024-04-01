const express = require('express');
const userRoute = require('./routes/UserRoute');
const authRoute = require('./routes/AuthRoute');
const app = express();
const cors = require('cors')
const port = 8000;
const {createServer} = require('http')
const {Server} = require('socket.io')
require('dotenv').config();
const cookieParser = require('cookie-parser');
const httpServer = createServer(app);

const io = new Server(httpServer , {
    cors:{
        origin: 'https://localhost:5173',
        credentials: true
    }
})


app.use(cors({origin: `http://localhost:5173` , credentials: true}))
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
require('./config/mongoose.config');

console.log(process.env.MY_SECRET)

// routes
app.use('/user', userRoute);
app.use('/oAuth', authRoute);



// socket.io 



httpServer.listen(port , ()=> console.log('listening on port', port));