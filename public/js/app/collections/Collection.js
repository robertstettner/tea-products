define(["jquery","backbone","models/Model"],
  function($, Backbone, Model) {
    var Collection = Backbone.Collection.extend({
        sortBy: "id",
        order: "asc",
        model: Model,
        comparator: function(a, b){
            var aVal = a.get(this.sortBy),
                bVal = b.get(this.sortBy);

            if(aVal < bVal){
                return this.order === "asc" ? 1 : -1;
            }else if(aVal > bVal){
                return this.order === "asc" ? -1 : 1;
            }else{
                return 0;
            }
        }
    });

    return Collection;
  });