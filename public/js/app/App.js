define(['jquery', 'backbone', 'marionette', 'underscore'],
    function ($, Backbone, Marionette, _) {
        Backbone.Marionette.Renderer.render = function(template, data){
            return _.template(template, data);
        };

        var App = new Backbone.Marionette.Application();

        App.addRegions({
            headerRegion:"header",
            mainRegion:"#main"
        });

        App.addInitializer(function () {
            Backbone.history.start();
        });

        return App;
    });