const http = require("http")
const fs = require("fs")
const PORT =4000

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html")

    if(req.url==='/'){
        res.write("hello world")
    }else if(req.url==='/about'){
        res.write("about page")
    }else{
        res.write(404)
        res.end()
    }
})
server.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})