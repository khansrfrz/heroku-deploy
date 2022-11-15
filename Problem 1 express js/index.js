const express = require('express');
const server=express();
const fs = require('fs');
const list = require('./list.json');
server.post('/student/add',(req,res)=>{
    res.status(200)
    res.send(JSON.stringify(list));
})
server.get('/student/getDetails',(req,res)=>{
    res.status(200).send(JSON.stringify(list));
})

const data = fs.readFileSync("list.json","utf-8");
console.log(data);

server.listen(3000,()=>console.log('server started...'))