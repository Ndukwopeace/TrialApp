const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Sample",{ 
    useUnifiedTopology : true,
    useNewUrlParser : true,
}).then(()=> console.log("Connected"))
.catch((err)=> console.log("Sorry something went wrong", err))