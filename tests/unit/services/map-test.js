import { module, test } from 'qunit';
import { setupTest } from 'tailwindcss-demo/tests/helpers';

module('Unit | Service | map', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:map');
    assert.ok(service);
  });
});
