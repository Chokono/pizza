import Controller from '@ember/controller';

export default Controller.extend({
  calculateParams({pizza, products, param}) {
    let result = 0;
    if (pizza.size) {
      result += products.size.find(product=>(product.name === pizza.size))[param];
    }
    if (Array.isArray(pizza.stuffing)) {
      pizza.stuffing.forEach(stuffing=>{
        result += products.stuffing.find(product=>(product.name === stuffing))[param];
      });
    }
    if (Array.isArray(pizza.topping)) {
      pizza.topping.forEach(topping=>{
        result += products.topping.find(product=>(product.name === topping))[param];
      });
    }
    return result;
  },
  actions: {
    addToPizza() {
      if (this.model.product.category === 'size') {
        if (this.model.pizzas.objectAt(0) !== this.model.product.name) {
          this.model.pizzas.objectAt(0).set(this.model.product.category, this.model.product.name);
          this.model.pizzas.objectAt(0).set('price', this.calculateParams({pizza:this.model.pizzas.objectAt(0), products: this.model.products, param: 'price'}));
          this.model.pizzas.objectAt(0).set('calories', this.calculateParams({pizza:this.model.pizzas.objectAt(0), products: this.model.products, param: 'calories'}));
        }
      } else {
        let pizzaArr = this.model.pizzas.objectAt(0)[this.model.product.category];
        pizzaArr.push(this.model.product.name);
        this.model.pizzas.objectAt(0).set(this.model.product.category, pizzaArr);
        this.model.pizzas.objectAt(0).set('price', this.calculateParams({pizza:this.model.pizzas.objectAt(0), products: this.model.products, param: 'price'}));
        this.model.pizzas.objectAt(0).set('calories', this.calculateParams({pizza:this.model.pizzas.objectAt(0), products: this.model.products, param: 'calories'}));
      }
    },
    removeFromPizza() {
      this.model.pizzas.objectAt(0).set(this.model.product.category, this.model.pizzas.objectAt(0)[this.model.product.category].filter(product=>(product !== this.model.product.name)));
      this.model.pizzas.objectAt(0).set('price', this.calculateParams({pizza:this.model.pizzas.objectAt(0), products: this.model.products, param: 'price'}));
      this.model.pizzas.objectAt(0).set('calories', this.calculateParams({pizza:this.model.pizzas.objectAt(0), products: this.model.products, param: 'calories'}));
    },
  }
});
