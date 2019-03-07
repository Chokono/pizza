import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | index/category/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:index/category/show');
    assert.ok(route);
  });
});
