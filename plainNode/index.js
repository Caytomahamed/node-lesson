// import http 

const HTTP = require("http")

// local host 

const hostName = "127.0.0.1"

// port 

const PORT = 3000;

// crate a server 

const server = HTTP.createServer((req,res) => {
    res.statusCode = 200;
    
    res.setHeader('Content-Type', 'text/plain')
    
    res.end("what up mother fuckers")
})


// lisete server 

server.listen(PORT,hostName, () => {
    console.log(`server runnint on http://${hostName}:${PORT}`);
})