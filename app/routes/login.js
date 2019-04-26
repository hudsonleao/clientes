//Exporta o módulo
module.exports = function(app){
    //Executa o módulo que irá renderizar a página login.ejs
    app.get('/', function(request, response){
        app.app.controllers.login.paginaLogin(app,request,response)
    });
    //Executa o módulo que irá renderizar a página index.ejs
    app.post('/dashboard', function(request, response){
        app.app.controllers.login.paginaAdmin(app,request,response)
    });
    //Executa o módulo que irá renderizar a página index.ejs
    app.get('/dashboard', function(request, response){
    //Verifica se o usuário está logado, caso esteja renderiza a página index.ejs
        if(request.session.autorizado){
        app.app.controllers.login.dash(app,request,response)
    //Se o usuário não estiver logado renderiza a página acesso-restrito
    }else{
        response.render('acesso-restrito');
    }
    });
    //Executa o módulo que irá destruir a sessão do usuário 
    app.get('/logout', function(request, response){
        app.app.controllers.login.sair(app,request,response)
    });
}