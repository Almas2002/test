const server = require('express')
require('dotenv').config()
const app = server();

app.get('/',(req,res)=>{
    res.json({message:process.env.HELLO})
})


app.listen(8080,()=>{
    console.log("server starting")
})