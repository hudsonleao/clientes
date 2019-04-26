function loginDAO(connection){
    this._connection = connection;
}
//Verifica se os dados digitado na tela de login existem no banco
loginDAO.prototype.login = function(login,senhaHash,callback){
    this._connection.query("SELECT * FROM cliente WHERE usuario = '" + login + "'and senha = '" + senhaHash +"'",callback);
}
//Consulta o nível do cliente
loginDAO.prototype.consulta_nivel = function(login,callback){
    this._connection.query("SELECT * FROM cliente WHERE usuario = '" + login +"'",callback);
}
//Consulta os dados de todos os cliente e ordena de forma alfabética pelo nome
loginDAO.prototype.consulta = function(login,callback){
    this._connection.query('SELECT * FROM cliente ORDER BY nome ASC', callback);
}
//Exporta o módulo
module.exports = function(){
    return loginDAO;
}
