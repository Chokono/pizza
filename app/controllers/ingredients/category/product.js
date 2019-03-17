import Controller from '@ember/controller';
import { calculateParams } from 'ember-hamburher/helpers/calculate-params';

export default Controller.extend({
  error: '',
  //isAddButton: (this.model.product.category === 'size') || (this.model.pizzas.objectAt(0)[this.model.product.category].indexOf(this.model.product.name) === -1) ? true : false,
  actions: {
    addToPizza() {
      if (this.model.product.category === 'size') {
        if (this.model.pizzas.objectAt(0) !== this.model.product.name) {
          this.model.pizzas.objectAt(0).set(this.model.product.category, this.model.product.name);
          this.model.pizzas.objectAt(0).set('price', calculateParams({pizza:this.model.pizzas.objectAt(0), products: this.model.products.objectAt(0), param: 'price'}));
          this.model.pizzas.objectAt(0).set('calories', calculateParams({pizza:this.model.pizzas.objectAt(0), products: this.model.products.objectAt(0), param: 'calories'}));
        }
      } else {
        if(this.model.pizzas.objectAt(0)[this.model.product.category].split(', ').length === 5) {
          this.set('error', `Sorry, you can't cooked pizza with wore than 5 ${this.model.product.category}.`);
          return;
        }
        this.model.pizzas.objectAt(0).set(this.model.product.category, `${this.model.pizzas.objectAt(0)[this.model.product.category]}, ${this.model.product.name}`);
        this.model.pizzas.objectAt(0).set('price', calculateParams({pizza:this.model.pizzas.objectAt(0), products: this.model.products.objectAt(0), param: 'price'}));
        this.model.pizzas.objectAt(0).set('calories', calculateParams({pizza:this.model.pizzas.objectAt(0), products: this.model.products.objectAt(0), param: 'calories'}));
      }
    },
    removeFromPizza() {
      let arr = this.model.pizzas.objectAt(0)[this.model.product.category].split(', ');
      if(arr.length === 1) {
        this.set('error', `Sorry, you can't cooked pizza without ${this.model.product.category}.`);
        return;
      }
      this.model.pizzas.objectAt(0).set(this.model.product.category, arr.filter(el=>(el !== this.model.product.name)).join(', '));
      this.model.pizzas.objectAt(0).set('price', calculateParams({pizza:this.model.pizzas.objectAt(0), products: this.model.products.objectAt(0), param: 'price'}));
      this.model.pizzas.objectAt(0).set('calories', calculateParams({pizza:this.model.pizzas.objectAt(0), products: this.model.products.objectAt(0), param: 'calories'}));
    },
    closeError () {
      this.set('error', '');
    },
  }
});
