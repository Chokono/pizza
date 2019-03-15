import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    let { category_name } = this.paramsFor('ingredients.category');
    return RSVP.hash({
      product: this.store.query('category', {category_name, product_name: params.product_name})
      .then(products => (products.get("firstObject")))
      .catch(() => {
        this.transitionTo('not-found', 404);
      }),
      products: this.store.findAll('product'),
      pizzas: this.store.findAll('pizza'),
    })
  }
});
