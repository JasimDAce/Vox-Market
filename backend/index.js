const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const UsrRout = require('./Routers/userRouter');


const app = express();
const port = 5000;

//middlewares
app.use(cors({
    origin:'http://localhost:3000', 
    credentials: true
}))//this allows the cross origin request from port 3000

app.use(express.json());//this middleware is used to convert json_req to object_req value.

app.use(cookieParser());

app.use('/u',UsrRout);//this passes all req(/u) to UsrRouter


app.get('/test',(req,res)=>{
    res.send("test : Working")
});

app.listen(port,()=>{
    console.log("server started at port : "+port);
})