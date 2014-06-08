define(['App', 'backbone', 'marionette', 'views/TableView', 'views/HeaderView', 'collections/Collection'],
    function (App, Backbone, Marionette, TableView, HeaderView, Collection) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            App.headerRegion.show(new HeaderView());
        },
        index:function () {
            var collection = new Collection([
                {
                    "name": "Darjeeling",
                    "popularity": 2.0,
                    "price": 22.5
                },
                {
                    "name": "Breakfast",
                    "popularity": 1.0,
                    "price": 22.5
                },
                {
                    "name": "Earl Grey",
                    "popularity": 3.0,
                    "price": 22.5
                },
                {
                    "name": "Peppermint",
                    "popularity": 1.0,
                    "price": 22.5
                },
                {
                    "name": "Chai",
                    "popularity": 1.5,
                    "price": 22.5
                }
            ]);

            App.mainRegion.show(new TableView({collection: collection}));
        }
    });
});