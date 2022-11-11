const express = require('express');
const server = express();
const list = require('./list.json')
server.get('/student/studentList',(req,res)=>{
    res.status(200).send(JSON.stringify(list))
})

server.listen(5000,()=>console.log('server started...'))