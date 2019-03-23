import Controller from '@ember/controller';

export default Controller.extend({
    didRender() {
        console.log('header');
    this._super(...arguments);
    let header = this.element.getElementById('header');
    header.classList.add('visible');
  },
  actions: {
    button() {
      console.log('click');
    },
  }
});
