import DS from 'ember-data';

export default DS.Model.extend({
  exist: DS.attr(),
  size: DS.attr(),
  stuffing: DS.attr(),
  topping: DS.attr(),
  price: DS.attr(),
  calories: DS.attr(),
});
