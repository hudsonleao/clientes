//Arquivo utilizado para inicializar a aplicação
//Importa o arquivo com as configurações do server para a variável app
var app = require('./config/server');

//Se a página não existir o usuário irá para a página 404
app.get('*', function(req, res){
    res.render('404');
  });
//A aplicação irá escutar na porta 80, no log é apresentado uma frase para confirmar que o app foi iniciado.
app.listen(80,function(){
console.log('APP clientes - Online');
});
