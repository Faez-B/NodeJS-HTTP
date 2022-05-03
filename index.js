const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer( (req , res) => {
    // console.log(req);
    try {
        // console.loga(); // Pour provoquer une erreur et renvoyer l'erreur 500

        if (req.url === '/') {
            
            if (req.method === 'GET') {
                res.writeHead(200, { 'content-type': 'text/html' });
                // res.write("<h1>HELLO WORLD FAEZ</h1>");
                // console.log( fs.readFileSync(path.join(__dirname, "/public/pages/index.html"), "utf8") );

                res.write(fs.readFileSync(path.join(__dirname, "/public/pages/index.html"), "utf8"))
            }  

            else {
                // exemple : curl -X PUT localhost:8000
                res.writeHead(400, { 'content-type': 'text/html' });
                // res.write("<h1>400 Méthode non autorisée</h1>");   
                // console.log( fs.readFileSync(path.join(__dirname, "/public/pages/400.html"), "utf8") );

                res.write(fs.readFileSync(path.join(__dirname, "/public/pages/400.html")));
            }
    
        }

        else if (req.url === '/public/image.png') {
            if (req.method === 'GET') {
                let extension = path.extname(req.url);
                extension = extension.slice(1, extension.length);
                // res.write(extension);
                res.writeHead(200, { 'content-type': 'image/png' }); 
                // res.write(fs.readFileSync(path.join(__dirname, req.url ) ));
                res.write(fs.readFileSync(path.join(__dirname, `/public/${extension}/image.png` ) ));
            }
        }

        else if (req.url === '/public/css/style.css') {
            if (req.method === 'GET') {
                res.writeHead(200, { 'content-type': 'text/css' }); 
                // console.log( fs.readFileSync(path.join(__dirname, req.url ) ) );

                res.write(fs.readFileSync(path.join(__dirname, req.url ) ));
            }  
        }

        else if (req.url === '/public/js/script.js') {
            if (req.method === 'GET') {
                res.writeHead(200, { 'content-type': 'script' }); 
                // console.log( fs.readFileSync(path.join(__dirname, req.url ) ) );

                res.write(fs.readFileSync(path.join(__dirname, req.url ) ));
            }  
        }
        
        else{
            res.writeHead(404, { 'content-type': 'text/html' });    
            // res.write("<h1>404 Page introuvable</h1>");
            // console.log( fs.readFileSync(path.join(__dirname, "/public/pages/404.html"), "utf8") );

            res.write(fs.readFileSync(path.join(__dirname, "/public/pages/404.html")));
        }
        
    } catch (error) {
        res.writeHead(500, { 'content-type': 'text/html' });    
        // res.write("<h1>500 Erreur Interne au Serveur</h1>");
        // console.log( fs.readFileSync(path.join(__dirname, "/public/pages/500.html"), "utf8") );

        res.write(fs.readFileSync(path.join(__dirname, "/public/pages/500.html")))
    }

    res.end();
});

server.listen(8000);
