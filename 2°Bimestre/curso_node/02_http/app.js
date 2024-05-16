// Solicitar um módulo interno do Node chamado HTTP
var http = require('http');

// Abrindo um servidor HTTP
http.createServer(function(req,res) {
    res.end('Hello World!');
}).listen(8081);

console.log('Servidor rodando.');