import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let { category_name } = this.paramsFor('ingredients.category');
    return this.store.query('category', {category_name, product_name: params.product_name})
    .then(products => (products))
    .catch(() => {
      this.transitionTo('not-found', 404);
    })
  }
});
