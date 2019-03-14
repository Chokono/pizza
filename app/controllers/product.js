import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addToPizza(e) {
      e.preventDefault();
      console.log('add');
    }
  }
});
