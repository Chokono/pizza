import Route from '@ember/routing/route';

export default Route.extend({
  model() {
  	let arr = location.href.split('/');
    return arr[arr.length-1] || arr[arr.length-2];
  }
});
