const express =require("express")
const fs = require('fs')
const app = express()
const PORT = 3000


app.get("/login/:userid",(req,res)=>{
    let userid =req.params.userid
    res.send(`userid is ${userid}`)
    fs.writeFile("user.txt",userid,(err)=>{
        if(err){
            console.error('error',err)
        }
    })
    
})

app.get("/add",(req,res)=>{
    let a = parseInt(req.query.a)
    let b = parseInt(req.query.b)
    let sum=parseInt(a+b)
    let output = `sum is ${sum}`
    res.send(output)
    fs.writeFile("output.txt",output,(err)=>{
        if(err) console.log(err)
    })
})

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})