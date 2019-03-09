import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByParam(param) {
      return this.store.query('category', param);
    }
  }
});
