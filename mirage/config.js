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
        description: 'Mayo description',
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
        description: 'Spice description',
        img: '/assets/images/spice.jpg',
        price: 15,
        calories: 0,
        category: 'topping'
      }
    },{
      id: 'ketchup',
      type: 'category',
      attributes: {
        name: 'ketchup',
        description: 'Ketchup description',
        img: '/assets/images/ketchup.jpg',
        price: 10,
        calories: 5,
        category: 'topping'
      }
    },{
      id: 'mustard',
      type: 'category',
      attributes: {
        name: 'mustard',
        description: 'Mustard description',
        img: '/assets/images/mustard.jpg',
        price: 9,
        calories: 5,
        category: 'topping'
      }
    },{
      id: 'soySauce',
      type: 'category',
      attributes: {
        name: 'soy sauce',
        description: 'Soy sauce description',
        img: '/assets/images/soySauce.jpg',
        price: 5,
        calories: 2,
        category: 'topping'
      }
    }],
    stuffing: [{
      id: 'cheese',
      type: 'category',
      attributes: {
        name: 'cheese',
        description: 'Cheese description',
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
        description: 'Salad description',
        img: '/assets/images/salad.jpg',
        price: 20,
        calories: 5,
        category: 'stuffing'
      }
    }, {
      id: 'tomato',
      type: 'category',
      attributes: {
        name: 'tomato',
        description: 'Potato description',
        img: '/assets/images/tomato.jpg',
        price: 15,
        calories: 10,
        category: 'stuffing'
      }
    }, {
      id: 'mushrooms',
      type: 'category',
      attributes: {
        name: 'mushrooms',
        description: 'Mushrooms description',
        img: '/assets/images/mushroom.jpg',
        price: 20,
        calories: 15,
        category: 'stuffing'
      }
    }, {
      id: 'sausage',
      type: 'category',
      attributes: {
        name: 'sausage',
        description: 'Sausage description',
        img: '/assets/images/sausage.jpg',
        price: 15,
        calories: 25,
        category: 'stuffing'
      }
    }, {
      id: 'bacon',
      type: 'category',
      attributes: {
        name: 'bacon',
        description: 'Bacon description',
        img: '/assets/images/bacon.jpg',
        price: 20,
        calories: 15,
        category: 'stuffing'
      }
    }, {
      id: 'potato',
      type: 'category',
      attributes: {
        name: 'potato',
        description: 'Potato description',
        img: '/assets/images/potato.jpg',
        price: 8,
        calories: 10,
        category: 'stuffing'
      }
    }, {
      id: 'pepper',
      type: 'category',
      attributes: {
        name: 'pepper',
        description: 'Pepper description',
        img: '/assets/images/pepper.jpg',
        price: 10,
        calories: 3,
        category: 'stuffing'
      }
    }, {
      id: 'salmon',
      type: 'category',
      attributes: {
        name: 'salmon',
        description: 'Salmon description',
        img: '/assets/images/salmon.jpg',
        price: 30,
        calories: 15,
        category: 'stuffing'
      }
    }, {
      id: 'onion',
      type: 'category',
      attributes: {
        name: 'onion',
        description: 'Onion description',
        img: '/assets/images/onion.jpg',
        price: 5,
        calories: 1,
        category: 'stuffing'
      }
    }]
  }
  let pizzas = [{
    type: 'pizza',
    id: 'pizza',
    attributes: {
      exist: false,
      size: '',
      stuffing: '',
      topping: '',
      price: 0,
      calories: 0,
    },
  }];
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
          price: product.attributes.price,
          calories: product.attributes.calories,
        }))
      }
    }));
    return { data: kitchenInputs }
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
  this.get('/pizzas', function() {
    return { data: pizzas };
  });
  this.get('/products', function() {
    let allProducts = {
      id: 'products',
      type: 'product',
      attributes: {
        size: products.size.map(el=>({
          name: el.attributes.name,
          price: el.attributes.price,
          calories: el.attributes.calories,
        })),
        stuffing: products.stuffing.map(el=>({
          name: el.attributes.name,
          price: el.attributes.price,
          calories: el.attributes.calories,
        })),
        topping: products.topping.map(el=>({
          name: el.attributes.name,
          price: el.attributes.price,
          calories: el.attributes.calories,
        })),
      }
    }
    return { data: allProducts };
  });
}