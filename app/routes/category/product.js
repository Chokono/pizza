import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let arr = location.href.split('/');
    console.log(this.store.query('category', {category_name: arr[arr.length-2] === params.product_name ? arr[arr.length-3] : arr[arr.length-2], product_name: params.product_name}));
    return this.store.query('category', {category_name: arr[arr.length-2] === params.product_name ? arr[arr.length-3] : arr[arr.length-2], product_name: params.product_name});
  }
});
