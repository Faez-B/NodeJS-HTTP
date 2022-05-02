const http = require('http');

const server = http.createServer( (req , res) => {
    // console.log(req);
    try {
        // console.loga(); // Pour provoquer une erreur et renvoyer l'erreur 500

        if (req.url === '/') {
            
            res.writeHead(200, { 'content-type': 'text/html' });
    
            if (req.method === 'GET') {
                res.write("<h1>HELLO WORLD FAEZ</h1>");   
            }  
    
            else {
                // exemple : curl -X PUT localhost:8000
                res.write("<h1>400 Méthode non autorisée</h1>");   
            }
    
        }
        
        else{
            res.writeHead(404, { 'content-type': 'text/html' });    
            res.write("<h1>404 Page introuvable</h1>");
        }
        
    } catch (error) {
        res.writeHead(500, { 'content-type': 'text/html' });    
        res.write("<h1>500 Erreur Interne au Serveur</h1>");
    }

    res.end();
});

server.listen(8000);
