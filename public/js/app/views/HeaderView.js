define(['jquery', 'text!templates/header.html', 'backbone', 'marionette'],
    function ($, template, Backbone) {
        return Backbone.Marionette.ItemView.extend({
            template: template
        });
    });