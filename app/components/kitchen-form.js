import Component from '@ember/component';

export default Component.extend({
  tagName: 'form',
  pizza: {
    isExist: false,
    params: {},
    pricesize: 0,
    caloriessize: 0,
    pricestuffing: 0,
    caloriesstuffing: 0,
    pricetopping: 0,
    caloriestopping: 0,
    price: 0,
    calories: 0,
  },
  error: '',
  validate (model) {
    if (model.size === undefined) {
      throw new Error ('choose size of pizza');
    }
    if (model.stuffing === undefined) {
      throw new Error ('add any stuffing to pizza');
    }
    if (model.topping === undefined) {
      throw new Error ('add any topping to pizza');
    }
    return true;
  },
  actions: {
    toggleButtonCreate (e) {
      e.preventDefault();
      try {
        this.validate(this.pizza.params);
        this.set('pizza.isExist', true);
      } catch (err) {
        this.set('error', err);
      }
    },
    toggleRadioInput (e) {
      let params = this.pizza.params;
      params[e.target.name] = [e.target.value];
      this.set('pizza.params', params);
      this.set(`pizza.price${e.target.name}`, Number.parseInt(e.target.getAttribute('price')));
      this.set('pizza.price', this.pizza.pricesize + this.pizza.pricestuffing + this.pizza.pricetopping);
      this.set(`pizza.calories${e.target.name}`, Number.parseInt(e.target.getAttribute('calories')));
      this.set('pizza.calories', this.pizza.caloriessize + this.pizza.caloriesstuffing + this.pizza.caloriestopping);
    },
    closeError () {
      this.set('error', '');
    },
    resetPizzaParams () {
      this.set('pizza', {
        isExist: false,
        params: {},
        pricesize: 0,
        caloriessize: 0,
        pricestuffing: 0,
        caloriesstuffing: 0,
        pricetopping: 0,
        caloriestopping: 0,
        price: 0,
        calories: 0,
      })
    },
  }
});
