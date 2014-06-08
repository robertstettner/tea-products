require(["App", "routers/AppRouter", "controllers/Controller", "jquery", "backbone", "marionette", "jqueryui", "bootstrap"],
    function (App, AppRouter, AppController) {
        App.appRouter = new AppRouter({
            controller:new AppController()
        });
        
        App.start();
    });