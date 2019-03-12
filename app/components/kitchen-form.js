import Component from '@ember/component';

export default Component.extend({
  pizza: {},
  actions: {
    toggleRadioInput (e) {
      e.preventDefault();
       this.set('pizza.isExist', true);
      //this.pizza.isExist = true;
      //this.pizza[vale] = true;
    }
  }
});
