
const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.sendfile(__dirname + '/pags/index.html')
});

app.get('/sobre', function(req, res){
    res.sendfile(__dirname + '/pags/sobre.html')
});

app.get('/teste/:cargo/:nome', function(req, res){
    res.send('Cadastro de: '+req.params.nome+'\nCargo de '+req.params.nome+': '+req.params.cargo)
});

app.listen(8081, function(){
    console.log('Servidor rodando na porta http://localhost:8081')
});