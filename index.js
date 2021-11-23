const server = require('express')

const app = server();

app.get('/',(req,res)=>{
    res.json({message:"hello world"})
})


app.listen(8080,()=>{
    console.log("server starting")
})