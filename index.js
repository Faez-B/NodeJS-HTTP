const http = require('http');

const server = http.createServer( (req , res) => {
    // console.log(req);
    if (req.url === '/' && req.method === 'GET') {  
        res.write("<h1>HELLO WORLD FAEZ</h1>");   
        res.end();
    }
});

server.listen(8000);
