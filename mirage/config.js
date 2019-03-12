export default function() {
  this.namespace = '/api';

  let categories = [{
    type: 'category',
    id: 'size',
    attributes: {
      name: 'size',
      description: 'size description',
      img: '/assets/images/size.png',
      category: 'size',
      items: []
    }
  }, {
    type: 'category',
    id: 'stuffing',
    attributes: {
      name: 'stuffing',
      description: 'stuffing description',
      img: '/assets/images/stuffing.jpg',
      category: 'stuffing',
      items: []
    }
  }, {
    type: 'category',
    id: 'topping',
    attributes: {
      name: 'topping',
      description: 'topping description',
      img: '/assets/images/topping.jpg',
      category: 'topping',
      items: []
    }
  }];
  let products = {
    size: [{
      id: 'small',
      type: 'category',
      attributes: {
        name: 'small',
        description: 'small description',
        img: '/assets/images/small.jpg',
        price: 50,
        calories: 20,
        category: 'size',
      }
    }, {
      id: 'medium',
      type: 'category',
      attributes: {
        name: 'medium',
        description: 'medium description',
        img: '/assets/images/medium.png',
        price: 75,
        calories: 30,
        category: 'size'
      }
    }, {
      id: 'large',
      type: 'category',
      attributes: {
        name: 'large',
        description: 'large description',
        img: '/assets/images/large.jpg',
        price: 100,
        calories: 40,
        category: 'size'
      }
    }],
    topping: [{
      id: 'mayo',
      type: 'category',
      attributes: {
        name: 'mayo',
        description: 'mayo description',
        img: '/assets/images/mayo.jpg',
        price: 20,
        calories: 5,
        category: 'topping'
      }
    }, {
      id: 'spice',
      type: 'category',
      attributes: {
        name: 'spice',
        description: 'spice description',
        img: '/assets/images/spice.jpg',
        price: 15,
        calories: 0,
        category: 'topping'
      }
    }],
    stuffing: [{
      id: 'cheese',
      type: 'category',
      attributes: {
        name: 'cheese',
        description: 'cheese description',
        img: '/assets/images/cheese.jpg',
        price: 10,
        calories: 20,
        category: 'stuffing'
      }
    }, {
      id: 'salad',
      type: 'category',
      attributes: {
        name: 'salad',
        description: 'salad description',
        img: '/assets/images/salad.jpg',
        price: 20,
        calories: 5,
        category: 'stuffing'
      }
    }, {
      id: 'potato',
      type: 'category',
      attributes: {
        name: 'potato',
        description: 'potato description',
        img: '/assets/images/potato.jpg',
        price: 15,
        calories: 10,
        category: 'stuffing'
      }
    }]
  }
  this.get('categories', function(db, request) {
    let filteredCategories = categories.find((cat_ry) => cat_ry.attributes.name.toLowerCase() === request.queryParams.category_name.toLowerCase());
    if (filteredCategories) {
      if (request.queryParams.product_name === undefined) {
        filteredCategories.attributes.items = products[request.queryParams.category_name.toLowerCase()].map(product=>(product.attributes));
        return { data: [filteredCategories] };
      } else {
        let filtredProducts = products[request.queryParams.category_name.toLowerCase()].find((pro_ct) => pro_ct.attributes.name.toLowerCase() === request.queryParams.product_name.toLowerCase());
        if (filtredProducts) {
          return { data: [filtredProducts] };
        }
      }
    }
    return { data: 'not found' };
  });
  this.get('/kitchens', function() {
    let kitchenInputs = categories.map(category=>({
      type: 'kitchen',
      id: category.id,
      attributes: {
        name: category.attributes.name,
        items: products[category.attributes.name].map(product=>({
          id: product.id,
          name: product.attributes.name,
        }))
      }
    }));
    return {data: kitchenInputs}
  });
  this.get('/ingredients', function() {
    let ingredientInputs = categories.map(category=>({
      type: 'ingredient',
      id: category.id,
      attributes: {
        name: category.attributes.name,
        img: category.attributes.img
      }
    }));
    return {data: ingredientInputs}
  });
}