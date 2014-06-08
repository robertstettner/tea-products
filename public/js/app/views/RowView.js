define( ['App', 'backbone', 'marionette', 'jquery', 'text!templates/row.html'],
    function(App, Backbone, Marionette, $, template) {
        return Backbone.Marionette.ItemView.extend( {
            tagName: "tr",
            template: template,
            events: {
                'click a': 'onClickRemove'
            },
            onClickRemove: function(e){
                e.preventDefault();
                this.model.destroy();
            }
        });
    });