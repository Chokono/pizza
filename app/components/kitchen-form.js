import Component from '@ember/component';
import { calculateParams } from 'ember-hamburher/helpers/calculate-params';

export default Component.extend({
  tagName: 'form',
  error: '',
  validate (model) {
    if (model.size === undefined) {
      throw new Error ('choose size of pizza');
    }
    if (model.stuffing.length < 1) {
      throw new Error ('add any stuffing to pizza');
    }
    if (model.topping.length < 1) {
      throw new Error ('add any topping to pizza');
    }
    return true;
  },
  actions: {
    toggleButtonCreate (e) {
      e.preventDefault();
      try {
        this.validate(this.pizza);
        this.pizza.set('exist', true);
      } catch (err) {
        this.set('error', err);
      }
    },
    toggleRadioInput (e) {
      if(this.pizza.size !== e.target.value) {
        this.pizza.set('size', e.target.value);
        this.pizza.set('price', calculateParams({pizza:this.pizza, products: this.products, param: 'price'}));
        this.pizza.set('calories', calculateParams({pizza:this.pizza, products: this.products, param: 'calories'}));
      }
    },
    toggleCheckboxInput (e) {
      if (e.target.checked) {
        if (this.pizza[e.target.getAttribute('name')].indexOf(e.target.value) === -1) {
          let arr = [];
          if(Array.isArray(this.pizza[e.target.getAttribute('name')])) {
            arr = this.pizza[e.target.getAttribute('name')];
          }
          arr.push(e.target.value);
          this.pizza.set(e.target.getAttribute('name'), arr);
        } else {
          this.set('error', 'Don\'t do this, cheater!\n This checkbox is checked.');
        }
      } else {
        if (this.pizza[e.target.getAttribute('name')].indexOf(e.target.value) === -1) {
          this.set('error', 'Don\'t do this, cheater!\n This checkbox is not checked.');
        } else {
          this.pizza.set(e.target.getAttribute('name'), this.pizza[e.target.getAttribute('name')].filter(ingredient=>(ingredient !== e.target.value)));
        }
      }
      this.pizza.set('price', calculateParams({pizza:this.pizza, products: this.products, param: 'price'}));
      this.pizza.set('calories', calculateParams({pizza:this.pizza, products: this.products, param: 'calories'}));
    },
    closeError () {
      this.set('error', '');
    },
    resetPizzaParams () {
      this.pizza.set('size', '');
      this.pizza.set('stuffing', []);
      this.pizza.set('topping', []);
      this.pizza.set('price', 0);
      this.pizza.set('calories', 0);
    },
  }
});
