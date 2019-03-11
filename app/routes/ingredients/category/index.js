import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel: function(params) {
    this.category_name = params.resolvedModels["ingredients.category"].category_name;
  },
  model() {
  	console.log('category_name = ',this.category_name);
    return this.store.query('category', {category_name: this.category_name});
  }
});
