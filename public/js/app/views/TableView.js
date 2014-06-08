define( ['App', 'backbone', 'marionette', 'jquery', 'text!templates/table.html', 'views/RowView'],
    function(App, Backbone, Marionette, $, template, RowView) {
        return Backbone.Marionette.CompositeView.extend({
            tagName: "table",
            className: "table",
            template: template,
            itemView: RowView,
            itemViewContainer: "tbody",
            initialize: function(){
                this.listenTo(this.collection, "sort", this.render, this);
            },
            events: {
                'click th': 'onSortColumn'
            },
            onSortColumn: function(e){
                if(this.$(e.currentTarget).attr("for")){
                    this.collection.sortBy = this.$(e.currentTarget).attr("for");
                    this.collection.sort();

                    this.collection.order = (this.collection.order === "asc" ? "desc" : "asc");
                }
            },
            onRender: function(){
                this.$('th[for="'+this.collection.sortBy+'"] span').addClass(this.collection.order);
            }
        });
    });