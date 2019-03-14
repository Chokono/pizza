import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let { category_name } = this.paramsFor('ingredients.category');
    return this.store.query('category', {category_name})
    .then((categories) => (categories.get("firstObject")))
    .catch(() => {
      this.transitionTo('not-found', 404);
    })
  }
});
