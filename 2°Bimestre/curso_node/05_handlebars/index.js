
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

// Configuração

    // Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    // Conexão com banco de dados
    const sequelize = new Sequelize('test','root','',{
        host: 'localhost',
        dialect: 'mysql'
    });

// Rotas
app.get('/cadastro', function(req, res){
    // res.send('ROTA DE CADASTRO DE POSTS');
    res.render('formulario')
});

app.post('/add', function(req, res){
    res.send('Formulário recebido.')
});

app.listen(8081, function(){
    console.log('Servidor rodando na porta http://localhost:8081')
});