import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let pizza = {
      categories: [{
        id: 'size',
        name: 'size',
        description: 'size description',
        img: 'size img',
      }, {
        id: 'stuffing',
        name: 'stuffing',
        description: 'stuffing description',
        img: 'stuffing img',
      }, {
        id: 'topping',
        name: 'topping',
        description: 'topping description',
        img: 'topping img',
      }],
      size: [{
        id: 'small',
        name: 'small',
        description: 'small description',
        img: 'small img',
        price: 50,
        calories: 20
      }, {
        id: 'large',
        name: 'large',
        description: 'large description',
        img: 'large img',
        price: 100,
        calories: 40
      }],
      stuffing: [{
        id: 'cheese',
        name: 'cheese',
        description: 'cheese description',
        img: 'cheese img',
        price: 10,
        calories: 20
      }, {
        id: 'salad',
        name: 'salad',
        description: 'salad description',
        img: 'salad img',
        price: 20,
        calories: 5
      }, {
        id: 'potato',
        name: 'potato',
        description: 'potato description',
        img: 'potato img',
        price: 15,
        calories: 10
      }],
      topping: [{
        id: 'mayo',
        name: 'mayo',
        description: 'mayo description',
        img: 'mayo img',
        price: 20,
        calories: 5
      }, {
        id: 'spice',
        name: 'spice',
        description: 'spice description',
        img: 'spice img',
        price: 15,
        calories: 0
      }]
  	};
    return pizza;
  }
});
