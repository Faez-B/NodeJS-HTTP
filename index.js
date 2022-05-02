const http = require('http');

const server = http.createServer( (req , res) => {
    console.log("HELLO WORLD FAEZ");

});

server.listen(4000);
