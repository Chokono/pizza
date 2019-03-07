import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | kitchen', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:kitchen');
    assert.ok(route);
  });
});
