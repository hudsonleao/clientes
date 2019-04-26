//Neste arquivo está os dados utilizados para conectar-se ao banco
//Importa o módulo mysql
var driver = require('mysql')

//Função para conectar ao banco, os parâmetros são os dados de acesso ao servidor de banco de dados
var conectar = function(){
    var parametros = {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'clientes'
    };
    
//A variável cnn recebe a variável driver e os parâmetros para neste ponto realizar a conexão com o banco
    var cnn = driver.createConnection(parametros);
    console.log('Conectou com o MYSQL');
    return cnn;

}

//Exporta o módulo para ser utilizado nos arquivos que precisarem se conectar ao banco
module.exports = function(){
    return conectar;
}
