import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ingredients/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ingredients/index');
    assert.ok(route);
  });
});
