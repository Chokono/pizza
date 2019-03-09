import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  category: DS.attr(),
  img: DS.attr(),
  items: DS.attr(),
  price: DS.attr(),
  calories: DS.attr()
});
