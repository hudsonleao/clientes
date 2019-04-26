function clienteDAO(connection){
    this._connection = connection;
}
//Insere os dados de um novo cliente
clienteDAO.prototype.incluirCliente = function(nome,usuario,senhaHash,cpf,rg,data_nasc,email,tel1,tel2,tel3,tel4,nivel,callback){    
this._connection.query("INSERT INTO `cliente` (`nome`, `usuario`, `senha`, `cpf`, `rg`, `data_nasc`, `email`, `tel1`, `tel2`, `tel3`, `tel4`, `nivel`) VALUES ('" + nome + "','"+ usuario +"','"+ senhaHash + "', '" + cpf +"','" + rg +"','" + data_nasc +"','" + email +"','" + tel1 +"','" + tel2 +"','" + tel3 +"','" + tel4 +"','" + nivel +"'); ",callback);
}
//Alterar os dados de um cliente já cadastrado
clienteDAO.prototype.alterarClientes = function(id,nome,usuario,email,tel1,tel2,tel3,tel4,nivel,callback){
    this._connection.query("UPDATE cliente SET `nome` = '"+nome+"', `usuario` = '"+usuario+"',`email` = '"+email+"',`tel1` = '"+tel1+"',`tel2` = '"+tel2+"',`tel3` = '"+tel3+"',`tel4` = '"+tel4+"',`nivel` = '"+nivel+"' WHERE id = '"+ id +"'", callback);
}
//Altera a senha do cliente
clienteDAO.prototype.alterarSenha = function(id,senhaHash,callback){
    this._connection.query("UPDATE cliente SET `senha` = '"+senhaHash+"' WHERE id = '"+ id +"'", callback);
}
//Altera a senha do cliente
clienteDAO.prototype.excluirClientes = function(id,callback){
    this._connection.query("DELETE FROM cliente WHERE id = '"+ id +"'",callback);
}
//Consulta os dados do cliente
clienteDAO.prototype.consultaClientes = function(id,callback){
    this._connection.query("SELECT * FROM cliente WHERE id = '"+ id +"'", callback);
}
//Exporta o módulo
module.exports = function(){
    return clienteDAO;
}
