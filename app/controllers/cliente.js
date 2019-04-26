//A variável crypto recebe a importação do método crypto
var crypto = require('crypto');

//Renderiza a página adiciona.ejs
module.exports.adiciona = function (app, request, response) {
    //A página é renderizada e alguns dados que serão utilizados na mesma também são enviados
    response.render('adiciona', { parametros: { nivel: request.session.nivel } });
}

//Salva o novo usuário, função do botão Salvar na página adiciona.ejs
module.exports.adicionaSalvar = function (app, request, response) {
    //A variável dados recebe os dados do JSON
    var dados = request.body;

    //Verifica se os dados não estão vazios
    request.assert('nome', 'Digite o nome').notEmpty();

    request.assert('usuario', 'Digite o usuário').notEmpty();

    request.assert('senha', 'Digite a senha').notEmpty();

    request.assert('cpf', 'Digite o CPF').notEmpty();

    request.assert('rg', 'Digite o RG').notEmpty();

    request.assert('data_nasc', 'Digite a data de nascimento').notEmpty();

    request.assert('email', 'Digite seu e-mail').notEmpty();

    request.assert('tel1', 'Digite seu telefone').notEmpty();

    request.assert('nivel', 'Digite o nivel').notEmpty();

    //A variável conexao recebe o resultado da função conexao
    var conexao = app.config.conexao();
    /*A variável model recebe os modelos de conexão definidos no arquivo clienteDAO e recebe como parametro a variável 
    conexao */
    var model = new app.app.models.clienteDAO(conexao);
    //A variável senha recebe a senha inserida
    var senha = dados.senha;
    //A variável senhaHash recebe a seja codificada
    var senhaHash = crypto.createHash('md5').update(senha).digest("hex");

    /*Os dados são enviados para o model clienteDAO que executa o prototype definido após o model."alguma_coisa",
    os parâmetros são enviados entre parentese.
    */
    model.incluirCliente(dados.nome, dados.usuario, senhaHash, dados.cpf, dados.rg, dados.data_nasc, dados.email, dados.tel1, dados.tel2, dados.tel3, dados.tel4, dados.nivel, function (erro, resultado) {
        console.log(resultado);
        if (erro != null)
            response.send(erro);
        else {
            //Ocorre o redirecionamento para a página definida entre aspas
            response.redirect('/dashboard')
        }
    });

}

//Salva a edição dos dados do usuário, função do botão Salvar na página edicao.ejs
module.exports.editarSalvar = function (app, request, response) {
    //A variável dados recebe os dados do JSON
    var dados = request.body;
    //A variável conexao recebe o resultado da função conexao
    var conexao = app.config.conexao();
    /*A variável model recebe os modelos de conexão definidos no arquivo clienteDAO e recebe como parametro a variável 
    conexao */
    var model = new app.app.models.clienteDAO(conexao);

    //Verifica se os dados não estão vazios
    request.assert('nome', 'Digite o nome').notEmpty();

    request.assert('usuario', 'Digite o usuário').notEmpty();

    request.assert('email', 'Digite seu email').notEmpty();

    request.assert('tel1', 'Digite seu telefone').notEmpty();

    request.assert('nivel', 'Digite o nivel').notEmpty();

    /*Os dados são enviados para o model clienteDAO que executa o prototype definido após o model."alguma_coisa",
    os parâmetros são enviados entre parentese.
    */
    model.alterarClientes(dados.id, dados.nome, dados.usuario, dados.email, dados.tel1, dados.tel2, dados.tel3, dados.tel4, dados.nivel, function (erro, resultado) {
        console.log(resultado);
        if (erro != null)
            response.send(erro);
        else {
            //Ocorre o redirecionamento para a página definida entre aspas
            response.redirect('/dashboard')
        }
    });
}

//Renderiza a página edicao.ejs
module.exports.paginaEditarCliente = function (app, request, response) {
    //A variável dados recebe os dados do JSON
    var dados = request.body;
    //A variável conexao recebe o resultado da função conexao
    var conexao = app.config.conexao();
    /*A variável model recebe os modelos de conexão definidos no arquivo clienteDAO e recebe como parametro a variável 
    conexao */
    var model = new app.app.models.clienteDAO(conexao);

    /*Os dados são enviados para o model clienteDAO que executa o prototype definido após o model."alguma_coisa",
    os parâmetros são enviados entre parentese.
    */
    model.consultaClientes(dados.id, function (erro, resultado) {
        console.log(resultado);
        if (erro != null)
            response.send(erro);
        else {
            console.log(resultado);
            if (resultado.length > 0) {
                nome = request.session.usuario
            }
            //A página é renderizada e alguns dados que serão utilizados na mesma também são enviados
            response.render('edicao', { usuario: request.session.usuario, resultado, parametros: { nivel: request.session.nivel } })

        }
    });
}

//Exclui um usuário, função do botão Excluir na página index.ejs
module.exports.excluir = function (app, request, response) {
    //A variável dados recebe os dados do JSON
    var dados = request.body;
    //A variável conexao recebe o resultado da função conexao
    var conexao = app.config.conexao();
    /*A variável model recebe os modelos de conexão definidos no arquivo clienteDAO e recebe como parametro a variável 
    conexao */
    var model = new app.app.models.clienteDAO(conexao);

    /*Os dados são enviados para o model clienteDAO que executa o prototype definido após o model."alguma_coisa",
    os parâmetros são enviados entre parentese.
    */
    model.excluirClientes(dados.id, function (erro, resultado) {
        console.log(resultado);
        if (erro != null)
            response.send(erro);
        else {
            //Ocorre o redirecionamento para a página definida entre aspas
            response.redirect('/dashboard')

        }

    });
}

//Renderiza a página detalhes.ejs
module.exports.detalhes = function (app, request, response) {
    //A variável dados recebe os dados do JSON
    var dados = request.body;
    //A variável conexao recebe o resultado da função conexao
    var conexao = app.config.conexao();
    /*A variável model recebe os modelos de conexão definidos no arquivo clienteDAO e recebe como parametro a variável 
    conexao */
    var model = new app.app.models.clienteDAO(conexao);

    /*Os dados são enviados para o model clienteDAO que executa o prototype definido após o model."alguma_coisa",
    os parâmetros são enviados entre parentese.
    */
    model.consultaClientes(dados.id, function (erro, resultado) {
        console.log(resultado);
        if (erro != null)
            response.send(erro);
        else {
            console.log(resultado);
            if (resultado.length > 0) {
                nome = request.session.usuario
            }
            //A página é renderizada e alguns dados que serão utilizados na mesma também são enviados
            response.render('detalhes', { usuario: request.session.usuario, resultado, parametros: { nivel: request.session.nivel } })

        }
    });
}

//Renderiza a página edicao.ejs
module.exports.alterarSenha = function (app, request, response) {
    //A variável dados recebe os dados do JSON
    var dados = request.body;
    //A variável conexao recebe o resultado da função conexao
    var conexao = app.config.conexao();
    /*A variável model recebe os modelos de conexão definidos no arquivo clienteDAO e recebe como parametro a variável 
    conexao */
    var model = new app.app.models.clienteDAO(conexao);

    /*Os dados são enviados para o model clienteDAO que executa o prototype definido após o model."alguma_coisa",
    os parâmetros são enviados entre parentese.
    */
    model.consultaClientes(dados.id, function (erro, resultado) {
        console.log(resultado);
        if (erro != null)
            response.send(erro);
        else {
            console.log(resultado);
            if (resultado.length > 0) {
                nome = request.session.usuario
            }
            //A página é renderizada e alguns dados que serão utilizados na mesma também são enviados
            response.render('alterar-senha', { usuario: request.session.usuario, resultado, parametros: { nivel: request.session.nivel } })

        }
    });
}

//Salva a alteração da senha, função do botão salvar na página alterar-senha.ejs
module.exports.alterarSenhaSalvar = function (app, request, response) {
    //A variável dados recebe os dados do JSON
    var dados = request.body;
    //A variável conexao recebe o resultado da função conexao
    var conexao = app.config.conexao();
    /*A variável model recebe os modelos de conexão definidos no arquivo clienteDAO e recebe como parametro a variável 
    conexao */
    var model = new app.app.models.clienteDAO(conexao);

    //Verifica se os dado não está vazio
    request.assert('senha', 'Digite a senha').notEmpty();

    //A variável senha recebe a senha inserida
    var senha = dados.senha;
    //A variável senhaHash recebe a seja codificada
    var senhaHash = crypto.createHash('md5').update(senha).digest("hex");

    /*Os dados são enviados para o model clienteDAO que executa o prototype definido após o model."alguma_coisa",
    os parâmetros são enviados entre parentese.
    */
    model.alterarSenha(dados.id, senhaHash, function (erro, resultado) {
        console.log(resultado);
        if (erro != null)
            response.send(erro);
        else {
            //Ocorre o redirecionamento para a página definida entre aspas
            response.redirect('/dashboard')
        }
    });
}