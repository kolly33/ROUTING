const http = require('http')

port = 4000



const requestHandler = (req, res)=>{

if(req.url === "/books"  &&  req.method ==="DELETE"){
console.log("I love coding with nodejs")
}else if(req.url === "/books"  &&  req.method ==="PUT"){ 
     console.log("i like getting resources")

     }else if(req.url === "/books"  &&  req.method ==="GET"){
     console.log("this is not what i prayed for ")

     }else if(req.url === "/books/author/"  &&  req.method ==="PUT"){
        console.log("this is route with a PUT method")
     }else if(req.url === "/books/author/"  &&  req.method ==="POST"){
        console.log("this is a post method")
     }else if(req.url === "/books/author/"  &&  req.method ==="GET"){
        console.log("this is a GET method")
     }

    }

const server = http.createServer(requestHandler)



server.listen(port, ()=>{
    console.log(`this server is runing @ ${port}`)
})