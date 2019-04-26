//A variável crypto recebe a importação do método crypto
var crypto = require('crypto');

//Renderiza a página login.ejs
module.exports.paginaLogin = function (app, request, response) {
    response.render('login', { validacoes: {} });
}

//Renderiza a página index.ejs
module.exports.paginaAdmin = function (app, request, response) {
    //A variável dados recebe os dados do JSON
    var dados = request.body;

    //Verifica se os dados não estão vazios
    request.assert('login', 'Digite o usuario').notEmpty();

    request.assert('senha', 'Digite a senha').notEmpty();

    var rolouAlgumErro = request.validationErrors();
    if (rolouAlgumErro) {
        response.render('login', { validacoes: rolouAlgumErro });
        console.log(rolouAlgumErro);
        return;
    }
    //A variável conexao recebe o resultado da função conexao
    var conexao = app.config.conexao();
    /*A variável model recebe os modelos de conexão definidos no arquivo loginDAO e recebe como parametro a variável 
    conexao */
    var model = new app.app.models.loginDAO(conexao);
    //A variável senha recebe a senha inserida
    var senha = dados.senha;
    //A variável senhaHash recebe a seja codificada
    var senhaHash = crypto.createHash('md5').update(senha).digest("hex");

    /*Os dados são enviados para o model loginDAO que executa o prototype definido após o model."alguma_coisa",
    os parâmetros são enviados entre parentese.
    */
    model.login(dados.login, senhaHash, function (erro, resultado) {
        console.log(resultado);
        if (erro != null)
            response.send(erro);
        else {
            console.log(resultado);
            if (resultado.length > 0) {
                //Alguns dados são armazenados na sessão do usuário
                request.session.autorizado = true;
                request.session.id = resultado[0].id;
                request.session.usuario = resultado[0].usuario;
                request.session.nivel = resultado[0].nivel;
                model.consulta(dados.id, function (erro, resultado) {
                    console.log(resultado);
                    if (erro != null)
                        response.send(erro);
                    else {
                        //A página é renderizada e alguns dados que serão utilizados na mesma também são enviados
                        response.render('index', { usuarios: request.session.usuario, resultado, parametros: { nivel: request.session.nivel } });
                    }

                });

            } else {
                //Ocorre o redirecionamento para a página definida entre aspas
                response.redirect('/')
            }
        }
    });
}

//Destrói a sessão do usuário e redireciona para a tela de Login
module.exports.sair = function (app, request, response) {
    request.session.destroy(function (erro) {
        //Ocorre o redirecionamento para a página definida entre aspas
        response.redirect('/');
    });
}
//Renderiza a página index.ejs
module.exports.dash = function (app, request, response) {
    //A variável dados recebe os dados do JSON
    var dados = request.body;
    //A variável conexao recebe o resultado da função conexao
    var conexao = app.config.conexao();
    /*A variável model recebe os modelos de conexão definidos no arquivo loginDAO e recebe como parametro a variável 
    conexao */
    var model = new app.app.models.loginDAO(conexao);
    model.consulta(dados.id, function (erro, resultado) {
        console.log(resultado);
        if (erro != null)
            response.send(erro);
        else {
            //A página é renderizada e alguns dados que serão utilizados na mesma também são enviados
            response.render('index', { usuarios: request.session.usuario, resultado, parametros: { nivel: request.session.nivel } });
        }

    });
}
