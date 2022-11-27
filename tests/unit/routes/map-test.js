import { module, test } from 'qunit';
import { setupTest } from 'tailwindcss-demo/tests/helpers';

module('Unit | Route | map', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:map');
    assert.ok(route);
  });
});
