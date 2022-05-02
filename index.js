const http = require('http');

const server = http.createServer( (req , res) => {
    // console.log(req);
    if (req.url === '/') {
        if (req.method === 'GET') {
            res.write("<h1>HELLO WORLD FAEZ</h1>");   
        }  

        else {
            // exemple : curl -X PUT localhost:8000
            res.write("<h1>400 Méthode non autorisée</h1>");   
        }

        res.end();
    }
});

server.listen(8000);
