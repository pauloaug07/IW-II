
const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Hello World!!!')
});

app.get('/blog', function(req, res){
    res.send('Página do blog')
});

app.get('/sobre', function(req, res){
    res.send('Sobre')
});

app.get('/cadastro/:usuario/:idade', function(req, res){
    res.send('Cadastro de: '+req.params.usuario+'\nIdade de: '+req.params.usuario+': '+req.params.idade)
});

app.listen(8081, function(){
    console.log('Servidor rodando na porta http://localhost:8081')
});