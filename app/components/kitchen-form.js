import Component from '@ember/component';
import { calculateParams } from 'ember-hamburher/helpers/calculate-params';

export default Component.extend({
  tagName: 'form',
  error: '',
  validate (model) {
    if (!model.size) {
      throw new Error ('choose size of pizza');
    }
    if (!model.stuffing) {
      throw new Error ('add any stuffing to pizza');
    } else if (model.stuffing.split(', ').length > 5) {
      throw new Error (`Sorry, you can't cooked pizza with wore than 5 stuffing.`);
    }
    if (!model.topping) {
      throw new Error ('add any topping to pizza');
    } else if (model.topping.split(', ').length > 5) {
      throw new Error (`Sorry, you can't cooked pizza with wore than 5 topping.`);
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
        calculateParams({pizza:this.pizza, products: this.products});
      }
    },
    toggleCheckboxInput (e) {
      let value = this.pizza[e.target.getAttribute('name')].split(', ');
      if (e.target.checked) {
        if (value.indexOf(e.target.value) === -1) {
          if (this.pizza[e.target.getAttribute('name')]) {
            this.pizza.set(e.target.getAttribute('name'), `${this.pizza[e.target.getAttribute('name')]}, ${e.target.value}`);
          } else {
            this.pizza.set(e.target.getAttribute('name'), e.target.value);
          }
        } else {
          this.set('error', 'Don\'t do this, cheater!\n This checkbox is checked.');
        }
      } else {
        if (value.indexOf(e.target.value) === -1) {
          this.set('error', 'Don\'t do this, cheater!\n This checkbox is not checked.');
        } else {
          this.pizza.set(e.target.getAttribute('name'), value.filter(el=>(el !== e.target.value)).join(', '));
        }
      }
      calculateParams({pizza:this.pizza, products: this.products});
    },
    closeError () {
      this.set('error', '');
    },
    resetPizzaParams (e) {
      e.preventDefault();
      this.pizza.set('exist', false);
      this.pizza.set('size', '');
      this.pizza.set('stuffing', '');
      this.pizza.set('topping', '');
      this.pizza.set('price', 0);
      this.pizza.set('calories', 0);
    },
  }
});
