//Exporta o módulo
module.exports = function (app) {
    //Função utilizada para renderizar a página adiciona.ejs
    app.get('/cliente/adicionar', function (request, response) {
        //Verifica se o usuário está logado, caso esteja executa a função
        if (request.session.autorizado) {
            app.app.controllers.cliente.adiciona(app, request, response)
        //Se o usuário não estiver logado o mesmo é direcionado para a página acesso-restrito.ejs
        } else {
            response.render('acesso-restrito');
        }
    });
    //Caso o método seja post ele executa o módulo que irá salvar o novo usuário ao banco
    app.post('/cliente/adicionar/salvar', function (request, response) {
        app.app.controllers.cliente.adicionaSalvar(app, request, response)
    });
    //Caso o método seja get a página 404 será renderizada, pois o método está incorreto
    app.get('/cliente/adicionar/salvar', function (request, response) {
        response.render('404');
    });
    //Caso o método seja post ele executa o módulo que irá salvar a edição dos dados no banco
    app.post('/cliente/editar/salvar', function (request, response) {
        app.app.controllers.cliente.editarSalvar(app, request, response)
    });
     //Caso o método seja get a página 404 será renderizada, pois o método está incorreto
    app.get('/cliente/editar/salvar', function (request, response) {
        response.render('404');
    });
    //Caso o método seja post ele executa o módulo que irá renderizar a página edicao.ejs
    app.post('/cliente/editar', function (request, response) {
        app.app.controllers.cliente.paginaEditarCliente(app, request, response)
    });
     //Caso o método seja get a página de 404 será renderizada, pois o método está incorreto
    app.get('/cliente/editar', function (request, response) {
        response.render('404');
    });
     //Caso o método seja get a página 404 será renderizada, pois o método está incorreto
    app.get('/cliente/excluir', function (request, response) {
        response.render('404');
    });
    //Caso o método seja post ele executa o módulo que irá excluir os dados no banco
    app.post('/cliente/excluir', function (request, response) {
        app.app.controllers.cliente.excluir(app, request, response)
    });
     //Caso o método seja get a página 404 será renderizada, pois o método está incorreto
    app.get('/cliente/detalhes', function (request, response) {
        response.render('404');
    });
    //Caso o método seja post ele executa o módulo que irá consultar o banco e mostrará o os dados do cliente
    app.post('/cliente/detalhes', function (request, response) {
        app.app.controllers.cliente.detalhes(app, request, response)
    });
     //Caso o método seja get a página 404 será renderizada, pois o método está incorreto
    app.get('/cliente/alterar-senha', function (request, response) {
        response.render('404');
    });
    //Caso o método seja post ele executa o módulo que irá renderizar a página alterar-senha.ejs
    app.post('/cliente/alterar-senha', function (request, response) {
        app.app.controllers.cliente.alterarSenha(app, request, response)
    });
    //Caso o método seja post ele executa o módulo que irá salvar a edição da senha no banco
    app.post('/cliente/alterar-senha/salvar', function (request, response) {
        app.app.controllers.cliente.alterarSenhaSalvar(app, request, response)
    });
    //Caso o método seja get a página 404 será renderizada, pois o método está incorreto
    app.get('/cliente/alterar-senha/salvar', function (request, response) {
        response.render('404');
    });
}