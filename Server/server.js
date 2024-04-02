const express = require('express');
const userRoute = require('./routes/UserRoute');
const authRoute = require('./routes/AuthRoute');
const chatRoute = require('./routes/chatRoute');
const MessageRoute = require('./routes/MessageRoute')
const app = express();
const cors = require('cors')
const port = 8000;
const {createServer} = require('http')
const {Server} = require('socket.io')
require('dotenv').config();
const cookieParser = require('cookie-parser');
// const messageController = require('./controller/message.controller');
const httpServer = createServer(app);

const io = new Server(httpServer , {
    cors:{
        // origin: 'https://localhost:8000',
        methods: ['GET', 'POST'],
        credentials: true,
        allowedHeaders: ['*']
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
app.use('/chats', chatRoute);
app.use('/messages', MessageRoute)



// socket.io 

io.on('connection', (socket)=>{
    console.log(socket.id)
    socket.emit('Welcome', socket.id);
})


























































httpServer.listen(port , ()=> console.log('listening on port', port));