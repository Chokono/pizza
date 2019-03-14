import DS from 'ember-data';

export default DS.Model.extend({
  size: DS.attr(),
  stuffing: DS.attr(),
  topping: DS.attr(),
});
