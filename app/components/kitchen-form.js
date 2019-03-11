import Component from '@ember/component';

export default Component.extend({
  pizza: {},
  actions: {
    toggleRadioInput (e) {
      e.preventDefault();
      console.log(this);
       this.set('pizza.isExist', true);
      //this.pizza.isExist = true;
      //this.pizza[vale] = true;
    }
  }
});
