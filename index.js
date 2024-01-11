const express = require('express'); // Importar biblioteca express
const app = express(); // Criar uma aplicação expresss
app.use(express.urlencoded({ extended: true}))

//Folha de estilo / Arquivo estáticos
app.use(express.static('public'));
//Motor de visualização
app.set('view engine', 'ejs');

//Cria rota para a raiz do site
app.get('/tt', function(req, res) {
    res.render('index', {titulo: 'Principal'});
    
});
app.get('/', function(req, res) {
    res.render('login', {titulo: 'Login'});
    
});
app.post('/Inicio', function(req, res) {
    res.render('index', {user: req.body.user, 
    titulo: 'Principal'});
    
});

app.post('/Carrinho', function(req, res) {
    res.render('carrinho', {item: req.body.item, 
    titulo: 'Carrinho'});
    
});

//porta do servidor
app.listen(3000, () => {
    console.log('Mel');
});