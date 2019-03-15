import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    actionOk(e) {
      console.log('add');
      e.preventDefault();
    }
  }
});
