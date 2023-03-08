const http = require("http");

const html = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Основы NodeJS</title>
            <link rel="stylesheet" href="app.css">

        </head>

        <body>
            <h1> kaef </h1>
            <button>Click Me!</button>
            <script src="app.js"></script>
        </body>
    </html>
`;

const css = ` 
    body {
        margin: 0;
        padding: 0;
        text-align: center;
    }

    h1 {
        background-color: aqua;
        color: white;
        padding: .5em;
        font-family: "Consolas";
    }
`;

const js = `
    const button = document.querySelector('button');
    button.addEventListener('click', event => alert('Node.js kaef'));
`;

const server = http.createServer((request, response) => {
    console.log(request.url);
    //console.log(request.method);
    //console.log(request.headers);
    switch(request.url) {
        case "/": 
            response.writeHead(200, { "Content-Type": "text/html" });
            response.end(html);
            break;
        case "/app.css":
            response.writeHead(200, { "Content-Type": "text/css" });
            response.end(css);
            break;
        case "/app.js":
            response.writeHead(200, { "Content-Type": "text/javascript" });
            response.end(js);
            break;
        default:
            response.writeHead(404, { "Content-Type": "text/plain" });
            response.end("404 not found");
    }
    
});

server.listen(5000, () => console.log("Server is working")); // "127.0.0.1" or localhost  