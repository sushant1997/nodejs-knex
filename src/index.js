const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const userRouters = require('./routes/userRoutes')
const taskRouters = require('./routes/taskRoutes')


app.use(express.json());

app.use('/users',userRouters)
app.use('/tasks',taskRouters)



app.listen(PORT,(err)=>{
    if(err){
        throw err    
    }else{
        console.log(`Server running on port : http://localhost:${PORT} .`)
    }
});