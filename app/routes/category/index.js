import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let arr = location.href.split('/');
    console.log(this.store.query('category', {category_name: arr[arr.length-1] || arr[arr.length-2]}));
    return this.store.query('category', {category_name: arr[arr.length-1] || arr[arr.length-2]});
  }
});
